import { COMMON_UNITS } from './constants.js';
import { getDictionary } from './multilingual.js';

const NUMBER_WORDS = {
  'a': 1,
  'an': 1,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'dozen': 12,
  'half a dozen': 6,
  'couple': 2,
  'few': 3,
  // Hindi numbers
  'ek': 1,
  'do': 2,
  'teen': 3,
  'char': 4,
  'paanch': 5,
  'che': 6,
  'saat': 7,
  'aath': 8,
  'nau': 9,
  'dus': 10,
  'एक': 1,
  'दो': 2,
  'तीन': 3,
  'चार': 4,
  'पाँच': 5,
  // Spanish numbers
  'uno': 1,
  'una': 1,
  'dos': 2,
  'tres': 3,
  'cuatro': 4,
  'cinco': 5,
  // French numbers
  'un': 1,
  'une': 1,
  'deux': 2,
  'trois': 3,
  'quatre': 4,
  'cinq': 5,
  // German numbers
  'eins': 1,
  'ein': 1,
  'eine': 1,
  'zwei': 2,
  'drei': 3,
  'vier': 4,
  'fünf': 5,
};

/**
 * Extracts numeric quantity and unit from a text snippet.
 */
function extractQuantityAndUnit(text) {
  let quantity = 1;
  let unit = 'items';
  let cleanText = text;

  // 1. Check for standard numeric patterns (e.g., "3 bottles of", "2.5 kg", "1 loaf")
  const numRegex = /^(\d+(\.\d+)?)\s*([a-zA-Z]+)?(\s+of)?\s*/i;
  const numMatch = cleanText.match(numRegex);

  if (numMatch) {
    quantity = parseFloat(numMatch[1]);
    const candidateUnit = numMatch[3] ? numMatch[3].toLowerCase() : null;
    
    if (candidateUnit && COMMON_UNITS.some((u) => u.startsWith(candidateUnit) || candidateUnit.startsWith(u))) {
      unit = candidateUnit;
      cleanText = cleanText.substring(numMatch[0].length);
    } else if (candidateUnit) {
      // It might be a word like "apples"
      cleanText = cleanText.substring(numMatch[1].length).trim();
    } else {
      cleanText = cleanText.substring(numMatch[0].length);
    }
  } else {
    // 2. Check for number words (e.g. "two bottles of water", "a dozen eggs")
    for (const [word, val] of Object.entries(NUMBER_WORDS)) {
      const wordRegex = new RegExp(`^${word}\\s+([a-zA-Z]+)?(\\s+of)?\\s*`, 'i');
      const wordMatch = cleanText.match(wordRegex);
      if (wordMatch) {
        quantity = val;
        const candidateUnit = wordMatch[1] ? wordMatch[1].toLowerCase() : null;
        if (candidateUnit && COMMON_UNITS.some((u) => u.startsWith(candidateUnit) || candidateUnit.startsWith(u))) {
          unit = candidateUnit;
          cleanText = cleanText.substring(wordMatch[0].length);
        } else {
          cleanText = cleanText.substring(word.length).trim();
        }
        break;
      }
    }
  }

  // Remove leading prepositions like "of", "to", "for"
  cleanText = cleanText.replace(/^(of|de|von|ka|ki|ke)\s+/i, '').trim();

  return { quantity, unit, itemName: cleanText };
}

/**
 * Extracts price range filters from search queries.
 * Examples:
 * - "toothpaste under $5"
 * - "olive oil between $5 and $15"
 * - "apples less than 4 dollars"
 */
function extractPriceRange(text) {
  let minPrice = 0;
  let maxPrice = 100;
  let queryText = text;

  // Pattern: between $X and $Y / between X and Y dollars
  const betweenMatch = queryText.match(/between\s+\$?(\d+(\.\d+)?)\s*(?:and|to|-)\s*\$?(\d+(\.\d+)?)/i);
  if (betweenMatch) {
    minPrice = parseFloat(betweenMatch[1]);
    maxPrice = parseFloat(betweenMatch[3]);
    queryText = queryText.replace(betweenMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  // Pattern: under $X / less than $X / below $X / sub $X
  const underMatch = queryText.match(/(?:under|less than|below|cheaper than|max|up to|kam|se kam)\s+\$?(\d+(\.\d+)?)\s*(?:dollars|bucks|rs|rupees|euro|eur)?/i);
  if (underMatch) {
    maxPrice = parseFloat(underMatch[1]);
    queryText = queryText.replace(underMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  // Pattern: above $X / more than $X / over $X
  const aboveMatch = queryText.match(/(?:above|over|more than|at least)\s+\$?(\d+(\.\d+)?)\s*(?:dollars|bucks|rs|rupees|euro|eur)?/i);
  if (aboveMatch) {
    minPrice = parseFloat(aboveMatch[1]);
    queryText = queryText.replace(aboveMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  return { minPrice, maxPrice, queryText };
}

/**
 * Parses raw voice transcript into structured intent and entities.
 */
export function parseVoiceCommand(transcript, langCode = 'en-US') {
  if (!transcript || typeof transcript !== 'string') {
    return { intent: 'UNKNOWN', raw: transcript };
  }

  const rawText = transcript.trim();
  const lowerText = rawText.toLowerCase();
  const dict = getDictionary(langCode);

  // 1. Check for CLEAR command
  const isClearAll = dict.clearWords.some((w) => lowerText.includes(w)) ||
    lowerText.match(/(clear|empty|delete|remove)\s+(everything|all|my list|the list|whole list)/i);
  
  if (isClearAll) {
    return {
      intent: 'CLEAR_LIST',
      raw: rawText,
    };
  }

  const isClearChecked = lowerText.match(/(clear|remove|delete)\s+(checked|completed|done|ticked)/i);
  if (isClearChecked) {
    return {
      intent: 'CLEAR_CHECKED',
      raw: rawText,
    };
  }

  // 2. Check for SEARCH command
  const isSearch = dict.searchWords.some((w) => lowerText.startsWith(w) || lowerText.includes(w + ' ')) ||
    lowerText.match(/^(find|search|look for|show me|where is|dhoondho|buscar|chercher|suchen)\b/i);

  if (isSearch) {
    // Strip search trigger keywords
    let queryBody = lowerText;
    for (const sw of dict.searchWords) {
      queryBody = queryBody.replace(new RegExp(`^${sw}\\s+`, 'i'), '');
      queryBody = queryBody.replace(new RegExp(`\\b${sw}\\b`, 'gi'), '');
    }
    queryBody = queryBody.replace(/^(me|for|un|une|des|el|la|los|las|mein|ko)\s+/i, '').trim();

    const { minPrice, maxPrice, queryText } = extractPriceRange(queryBody);
    const organic = queryText.includes('organic') || queryText.includes('jaivik');
    const cleanSearchQuery = queryText.replace(/\borganic\b/gi, '').replace(/\s+/g, ' ').trim();

    return {
      intent: 'SEARCH_ITEMS',
      query: cleanSearchQuery || queryText,
      minPrice,
      maxPrice,
      organic,
      raw: rawText,
    };
  }

  // 3. Check for MODIFY command (e.g. "Change milk quantity to 3", "Update bread to 2")
  const isModify = dict.modifyWords.some((w) => lowerText.startsWith(w) || lowerText.includes(w + ' ')) ||
    lowerText.match(/^(change|update|set|modify|make|badlo)\b/i);

  if (isModify) {
    // Match: "change [item] [quantity to X / to X]"
    const modifyMatch = lowerText.match(/(?:change|update|set|make|badlo)\s+(?:the\s+)?([a-z0-9\s]+?)\s+(?:quantity\s+)?(?:to|as|into|ko)\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten)/i);
    if (modifyMatch) {
      const itemTarget = modifyMatch[1].trim();
      const qtyWord = modifyMatch[2].trim();
      const newQty = NUMBER_WORDS[qtyWord] || parseInt(qtyWord, 10) || 1;
      return {
        intent: 'MODIFY_QUANTITY',
        targetItem: itemTarget,
        quantity: newQty,
        raw: rawText,
      };
    }
  }

  // 4. Check for REMOVE / DELETE command
  const isRemove = dict.removeWords.some((w) => lowerText.startsWith(w) || lowerText.includes(w + ' ')) ||
    lowerText.match(/^(remove|delete|take off|drop|eliminate|hatao|quitar|supprimer|entfernen)\b/i);

  if (isRemove) {
    let itemToRemove = lowerText;
    for (const rw of dict.removeWords) {
      itemToRemove = itemToRemove.replace(new RegExp(`^${rw}\\s+`, 'i'), '');
    }
    // Clean fillers like "from my list", "off the list", "se", "de la liste"
    itemToRemove = itemToRemove
      .replace(/\s+(from|off|in)?\s*(my|the)?\s*list\b/gi, '')
      .replace(/\s+(list se|se hatao)\b/gi, '')
      .replace(/^(the|a|an|some|el|la|le|la|les|ein|eine)\s+/i, '')
      .trim();

    return {
      intent: 'REMOVE_ITEM',
      itemName: itemToRemove,
      raw: rawText,
    };
  }

  // 5. Check for ADD command or natural statement (Default / Fallback)
  let addBody = lowerText;
  
  // Remove known add prefixes
  const addPrefixes = [
    'add', 'i need to buy', 'i need', 'i want to buy', 'i want', 'buy', 'get me', 'get',
    'put', 'pick up', 'bring', 'please add', 'can you add', 'put on the list',
    'mujhe chahiye', 'le aao', 'kharidna hai', 'jodo',
    'añadir', 'agregar', 'necesito', 'quiero comprar',
    'ajouter', 'j\'ai besoin de', 'je veux',
    'hinzufügen', 'ich brauche', 'ich möchte'
  ];

  for (const prefix of addPrefixes) {
    if (addBody.startsWith(prefix)) {
      addBody = addBody.substring(prefix.length).trim();
      break;
    }
  }

  // Clean trailing phrases ("to my list", "on the list", "in my cart", "ko list me jodo")
  addBody = addBody
    .replace(/\s+(to|on|into|in)\s+(my|the)?\s*(shopping\s+)?(list|cart)\b/gi, '')
    .replace(/\s+(list me|list mein|ko jodo)\b/gi, '')
    .trim();

  // Support compound additions like "2 apples and 3 bananas"
  const andParts = addBody.split(/\s+(?:and|aur|y|et|und)\s+/i);
  const itemsToAdd = andParts.map((part) => {
    const cleanPart = part.replace(/^(the|some|a|an|few)\s+/i, '').trim();
    const { quantity, unit, itemName } = extractQuantityAndUnit(cleanPart);
    return {
      quantity,
      unit,
      name: itemName || cleanPart,
    };
  }).filter((it) => it.name && it.name.length > 0);

  if (itemsToAdd.length > 0) {
    return {
      intent: 'ADD_ITEM',
      items: itemsToAdd,
      raw: rawText,
    };
  }

  return {
    intent: 'UNKNOWN',
    raw: rawText,
  };
}

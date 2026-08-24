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
  'dozen': 1,
  'half a dozen': 6,
  'couple': 2,
  'few': 3,
  // Hindi / Hinglish numbers
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
  'adha': 0.5,
  'aadha': 0.5,
  'एक': 1,
  'दो': 2,
  'तीन': 3,
  'चार': 4,
  'पाँच': 5,
  'छह': 6,
  'सात': 7,
  'आठ': 8,
  'नौ': 9,
  'दस': 10,
  // Spanish
  'uno': 1, 'una': 1, 'dos': 2, 'tres': 3, 'cuatro': 4, 'cinco': 5,
  // French
  'un': 1, 'une': 1, 'deux': 2, 'trois': 3, 'quatre': 4, 'cinq': 5,
  // German
  'eins': 1, 'ein': 1, 'eine': 1, 'zwei': 2, 'drei': 3, 'vier': 4, 'fünf': 5,
};

const HINGLISH_ACTION_VERBS = [
  'add karo', 'add kro', 'add kar do', 'add kardo', 'add kar dena', 'add kijiye',
  'daal do', 'daaldo', 'daal dena', 'daalo', 'daaliye', 'daalna',
  'jodo', 'jodiye', 'shamil karo', 'shamil kijiye',
  'le aao', 'le aana', 'lao', 'le aaiye', 'mangwa do', 'mangwa dena',
  'kharidna hai', 'kharido', 'chahiye', 'bhi le aana', 'bhi daal do',
  'hata do', 'hatao', 'hatado', 'hata dena', 'nikal do', 'nikalo', 'delete karo', 'delete kro',
  'badlo', 'badal do', 'karo', 'kro', 'kar do', 'kardo', 'krdo'
];

function cleanItemName(text) {
  let clean = text.trim();

  // Strip trailing & leading Hinglish action phrases
  for (const verb of HINGLISH_ACTION_VERBS) {
    const endRegex = new RegExp(`\\s+${verb}\\b.*$`, 'i');
    clean = clean.replace(endRegex, '');
    const startRegex = new RegExp(`^${verb}\\s+`, 'i');
    clean = clean.replace(startRegex, '');
  }

  // Strip English & location fillers
  clean = clean
    .replace(/^(add|buy|get|need|want|put|bring|pick up|please)\s+/i, '')
    .replace(/\s+(from|to|on|in|into)\s+(my|the)?\s*(shopping\s+)?(list|cart)\b/gi, '')
    .replace(/\s+(list me|list mein|cart me|cart mein|list se|cart se)\b/gi, '')
    .replace(/^(from|of|de|von|ka|ki|ke|ko|se)\s+/i, '')
    .replace(/\s+(bhi|ko|se)$/i, '')
    .trim();

  return clean;
}

function extractQuantityAndUnit(text) {
  let quantity = 1;
  let unit = 'items';
  
  // First strip leading command words like "add", "buy", "get"
  let cleanText = text.trim()
    .replace(/^(add|buy|get|need|want|put|bring|pick up|please|añadir|ajouter|hinzufügen)\s+/i, '')
    .replace(/^(of|de|von|ka|ki|ke)\s+/i, '')
    .trim();

  // Check numeric digit at start: e.g. "2 packets of Amul milk", "1.5 kg", "1 loaf"
  const numRegex = /^(\d+(\.\d+)?)\s*([a-zA-Z]+)?(\s+of)?\s*/i;
  const numMatch = cleanText.match(numRegex);

  if (numMatch) {
    quantity = parseFloat(numMatch[1]);
    const candidateUnit = numMatch[3] ? numMatch[3].toLowerCase() : null;
    
    if (candidateUnit && COMMON_UNITS.some((u) => u.startsWith(candidateUnit) || candidateUnit.startsWith(u))) {
      unit = candidateUnit;
      cleanText = cleanText.substring(numMatch[0].length);
    } else if (candidateUnit) {
      cleanText = cleanText.substring(numMatch[1].length).trim();
    } else {
      cleanText = cleanText.substring(numMatch[0].length);
    }
  } else {
    // Check written number words: e.g. "two packets", "ek kilo", "do packet"
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

  const finalName = cleanItemName(cleanText);
  return { quantity, unit, itemName: finalName };
}

function extractPriceRange(text) {
  let minPrice = 0;
  let maxPrice = 1000;
  let queryText = text;

  const betweenMatch = queryText.match(/between\s+(?:₹|rs\.?|inr)?\s*(\d+(\.\d+)?)\s*(?:and|to|-)\s*(?:₹|rs\.?|inr)?\s*(\d+(\.\d+)?)\s*(?:rupees|rupaye|rs|bucks)?/i);
  if (betweenMatch) {
    minPrice = parseFloat(betweenMatch[1]);
    maxPrice = parseFloat(betweenMatch[3]);
    queryText = queryText.replace(betweenMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  const underMatch = queryText.match(/(?:under|less than|below|cheaper than|max|up to|se kam|kam)\s+(?:₹|rs\.?|inr|\$)?\s*(\d+(\.\d+)?)\s*(?:rupees|rupaye|rs|bucks|dollars|inr)?/i);
  if (underMatch) {
    maxPrice = parseFloat(underMatch[1]);
    queryText = queryText.replace(underMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  const reverseUnderMatch = queryText.match(/(\d+(\.\d+)?)\s*(?:₹|rs\.?|rupees|rupaye)\s*(?:se kam|under|less)/i);
  if (reverseUnderMatch) {
    maxPrice = parseFloat(reverseUnderMatch[1]);
    queryText = queryText.replace(reverseUnderMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  const aboveMatch = queryText.match(/(?:above|over|more than|at least|se jyada)\s+(?:₹|rs\.?|inr|\$)?\s*(\d+(\.\d+)?)\s*(?:rupees|rupaye|rs|bucks|inr)?/i);
  if (aboveMatch) {
    minPrice = parseFloat(aboveMatch[1]);
    queryText = queryText.replace(aboveMatch[0], '').trim();
    return { minPrice, maxPrice, queryText };
  }

  return { minPrice, maxPrice, queryText };
}

export function parseVoiceCommand(transcript, langCode = 'en-IN') {
  if (!transcript || typeof transcript !== 'string') {
    return { intent: 'UNKNOWN', raw: transcript };
  }

  const rawText = transcript.trim();
  const lowerText = rawText.toLowerCase();
  const dict = getDictionary(langCode);

  // 1. Check for CART / TOTAL QUERY
  if (
    lowerText.match(/(what('s| is) (in )?(my )?(cart|list)|list dikhao|cart dikhao|kya kya hai|kya hai list me)/i) ||
    lowerText.match(/(what('s| is) the total( price)?|total kitna (hua|hai)|kitne paise hue|bill kitna hua)/i)
  ) {
    return {
      intent: 'QUERY_CART',
      raw: rawText,
    };
  }

  // 2. Check for RECOMMENDATIONS / SEASONAL QUERY
  if (lowerText.match(/(what is in season|seasonal (items|deals)|mausami sabzi|kuch suggest karo|recommend|kya taza hai)/i)) {
    return {
      intent: 'QUERY_RECOMMENDATIONS',
      raw: rawText,
    };
  }

  // 3. Check for CLEAR command
  const isClearAll = dict.clearWords.some((w) => lowerText.includes(w)) ||
    lowerText.match(/(clear|empty|delete|remove)\s+(everything|all|my list|the list|whole list)/i) ||
    lowerText.match(/(sab hata do|sab delete karo|puri list khali karo|list saaf karo)/i);
  
  if (isClearAll) {
    return {
      intent: 'CLEAR_LIST',
      raw: rawText,
    };
  }

  const isClearChecked = lowerText.match(/(clear|remove|delete)\s+(checked|completed|done|ticked)/i) ||
    lowerText.match(/(completed hata do|done items hatao|ticked items nikal do)/i);
  if (isClearChecked) {
    return {
      intent: 'CLEAR_CHECKED',
      raw: rawText,
    };
  }

  // 4. Check for SEARCH command
  const isSearch = dict.searchWords.some((w) => lowerText.startsWith(w) || lowerText.includes(w + ' ')) ||
    lowerText.match(/^(find|search|look for|show me|where is|dhoondho|kahan hai|dikhao|kya rate hai|buscar|chercher|suchen)\b/i) ||
    lowerText.includes('price batao') || lowerText.includes('search karo');

  if (isSearch) {
    let queryBody = lowerText;
    for (const sw of dict.searchWords) {
      queryBody = queryBody.replace(new RegExp(`^${sw}\\s+`, 'i'), '');
      queryBody = queryBody.replace(new RegExp(`\\b${sw}\\b`, 'gi'), '');
    }
    queryBody = queryBody.replace(/^(me|for|un|une|des|el|la|los|las|mein|ko)\s+/i, '');
    queryBody = cleanItemName(queryBody);

    const { minPrice, maxPrice, queryText } = extractPriceRange(queryBody);
    const organic = queryText.includes('organic') || queryText.includes('jaivik') || queryText.includes('desi');
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

  // 5. Check for MODIFY command
  const isModify = dict.modifyWords.some((w) => lowerText.includes(w)) ||
    lowerText.match(/^(change|update|set|modify|make|badlo)\b/i) ||
    lowerText.match(/(ki quantity|ko badal ke|kardo|kar do)/i);

  if (isModify && (lowerText.includes('quantity') || lowerText.includes('kar do') || lowerText.includes('badlo') || lowerText.startsWith('change'))) {
    const modifyMatch = lowerText.match(/(?:change|update|set|make|badlo)?\s*(?:the\s+)?([a-z0-9\s]+?)\s*(?:quantity\s+|ki quantity\s+)?(?:to|as|into|ko|karke)?\s*(\d+|one|two|three|four|five|six|seven|eight|nine|ten|ek|do|teen|char|paanch)\s*(?:kar do|kardo|karo|bana do)?/i);
    if (modifyMatch && modifyMatch[1] && modifyMatch[2]) {
      const itemTarget = cleanItemName(modifyMatch[1]);
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

  // 6. Check for REMOVE / DELETE command
  const isRemove = dict.removeWords.some((w) => lowerText.startsWith(w) || lowerText.includes(' ' + w)) ||
    lowerText.match(/(remove|delete|take off|hata do|hatao|nikal do|nikalo|hatado|quitar|supprimer|entfernen)/i);

  if (isRemove) {
    let itemToRemove = lowerText;
    for (const rw of dict.removeWords) {
      itemToRemove = itemToRemove.replace(new RegExp(`\\b${rw}\\b`, 'gi'), '');
    }
    itemToRemove = cleanItemName(itemToRemove);

    return {
      intent: 'REMOVE_ITEM',
      itemName: itemToRemove,
      raw: rawText,
    };
  }

  // 7. Check for ADD command
  let addBody = lowerText;
  const andParts = addBody.split(/\s+(?:and|aur|tatha|y|et|und)\s+/i);
  const itemsToAdd = andParts.map((part) => {
    const { quantity, unit, itemName } = extractQuantityAndUnit(part);
    return {
      quantity,
      unit,
      name: itemName,
    };
  }).filter((it) => it.name && it.name.length > 0 && it.name !== 'kro' && it.name !== 'karo');

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

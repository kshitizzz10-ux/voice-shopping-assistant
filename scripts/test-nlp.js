import { parseVoiceCommand } from '../src/utils/nlpParser.js';
import { classifyItemCategory } from '../src/utils/categoryClassifier.js';
import { findSubstitutes } from '../src/utils/substituteMap.js';
import { searchProducts, findBestCatalogMatch } from '../src/utils/productDatabase.js';
import { generateSmartSuggestions } from '../src/utils/suggestionEngine.js';

let passed = 0;
let failed = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${testName} - ${details}`);
    failed++;
  }
}

console.log('🧪 Running VoiceCart Hinglish & Light Grocery Marketplace Test Suite...\n');

// 1. Hinglish & NLP Add Command Tests
console.log('--- 1. Hinglish & Natural Add Command Tests ---');
const hinglish1 = parseVoiceCommand('bread add kro');
assert(hinglish1.intent === 'ADD_ITEM', 'Intent is ADD_ITEM for "bread add kro"');
assert(hinglish1.items[0]?.name === 'bread', 'Correctly extracted "bread" (stripped "add kro")', hinglish1.items[0]?.name);

const hinglish2 = parseVoiceCommand('doodh add karo');
assert(hinglish2.intent === 'ADD_ITEM' && hinglish2.items[0]?.name === 'doodh', 'Extracted "doodh" from "doodh add karo"');

const hinglish3 = parseVoiceCommand('2 packet amul doodh daal do');
assert(hinglish3.items[0]?.quantity === 2, 'Quantity 2 from Hinglish');
assert(hinglish3.items[0]?.name.includes('amul doodh'), 'Item name is amul doodh');

const addFish = parseVoiceCommand('add fish');
assert(addFish.items[0]?.name === 'fish', 'Extracted "fish" from "add fish"');

const add1 = parseVoiceCommand('Add 2 packets of Amul milk');
assert(add1.intent === 'ADD_ITEM', 'Intent is ADD_ITEM');
assert(add1.items[0].name === 'amul milk', 'Extracted name "amul milk"');
assert(add1.items[0].quantity === 2, 'Extracted quantity 2');

const add3 = parseVoiceCommand('Buy 1 dozen bananas and 1 loaf of bread');
assert(add3.items.length === 2, 'Compound command splits 2 items');
assert(add3.items[0].name === 'bananas' && add3.items[0].quantity === 1, '1 dozen bananas parsed correctly');
assert(add3.items[1].name === 'bread' && add3.items[1].quantity === 1, '1 loaf of bread parsed correctly');

// 2. Conversational Q&A Tests
console.log('\n--- 2. Conversational Q&A Tests ---');
const cartQuery1 = parseVoiceCommand("what is in my cart");
assert(cartQuery1.intent === 'QUERY_CART', 'Intent is QUERY_CART for "what is in my cart"');

const cartQuery2 = parseVoiceCommand("total kitna hua");
assert(cartQuery2.intent === 'QUERY_CART', 'Intent is QUERY_CART for "total kitna hua"');

const recQuery = parseVoiceCommand("what is in season");
assert(recQuery.intent === 'QUERY_RECOMMENDATIONS', 'Intent is QUERY_RECOMMENDATIONS for "what is in season"');

// 3. NLP Tests - Remove commands
console.log('\n--- 3. NLP Remove Command Tests ---');
const rem1 = parseVoiceCommand('Remove milk from my list');
assert(rem1.intent === 'REMOVE_ITEM' && rem1.itemName === 'milk', 'Remove milk recognized');

const rem2 = parseVoiceCommand('bread hata do');
assert(rem2.intent === 'REMOVE_ITEM' && rem2.itemName === 'bread', 'Hinglish "bread hata do" recognized');

// 4. NLP Tests - Search & Rupee Price Filter commands
console.log('\n--- 4. NLP Search & Rupee Price Filter Tests ---');
const search1 = parseVoiceCommand('Find toothpaste under 60 rupees');
assert(search1.intent === 'SEARCH_ITEMS' && search1.maxPrice === 60, 'Find toothpaste under 60 rupees');

const search2 = parseVoiceCommand('Find Fortune oil between 100 and 200 rs');
assert(search2.minPrice === 100 && search2.maxPrice === 200, 'Between 100 and 200 rs parsed');

// 5. Store Catalog Best Match Tests
console.log('\n--- 5. Store Catalog Match Tests ---');
const breadMatch = findBestCatalogMatch('bread');
assert(breadMatch.found === true && breadMatch.product.name.includes('Bread'), 'Found in-stock Bread in store catalog');

const fishMatch = findBestCatalogMatch('fish');
assert(fishMatch.found === true && fishMatch.product.name.includes('Fish'), 'Found in-stock Fish in store catalog');

const unavailableMatch = findBestCatalogMatch('dragonfruit');
assert(unavailableMatch.found === false, 'Dragonfruit correctly marked as unavailable');

console.log(`\n========================================`);
console.log(`🎉 Test Results: ${passed} passed, ${failed} failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}

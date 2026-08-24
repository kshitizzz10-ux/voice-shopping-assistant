import { parseVoiceCommand } from '../src/utils/nlpParser.js';
import { classifyItemCategory } from '../src/utils/categoryClassifier.js';
import { findSubstitutes } from '../src/utils/substituteMap.js';
import { searchProducts } from '../src/utils/productDatabase.js';
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

console.log('🧪 Running VoiceCart NLP & Logic Verification Suite...\n');

// 1. NLP Tests - Add commands
console.log('--- 1. NLP Add Command Tests ---');
const add1 = parseVoiceCommand('Add 2 bottles of whole milk');
assert(add1.intent === 'ADD_ITEM', 'Intent is ADD_ITEM');
assert(add1.items[0].name === 'whole milk', 'Extracted name "whole milk"', add1.items[0]?.name);
assert(add1.items[0].quantity === 2, 'Extracted quantity 2', add1.items[0]?.quantity);
assert(add1.items[0].unit === 'bottles', 'Extracted unit "bottles"', add1.items[0]?.unit);

const add2 = parseVoiceCommand('I need 3 organic apples');
assert(add2.intent === 'ADD_ITEM', 'Intent is ADD_ITEM from "I need"');
assert(add2.items[0].quantity === 3, 'Extracted quantity 3');
assert(add2.items[0].name === 'organic apples', 'Extracted "organic apples"');

const add3 = parseVoiceCommand('Buy 5 bananas and 2 loaves of bread');
assert(add3.items.length === 2, 'Compound command splits 2 items');
assert(add3.items[0].name === 'bananas' && add3.items[0].quantity === 5, 'Item 1 is 5 bananas');
assert(add3.items[1].name === 'bread' && add3.items[1].quantity === 2, 'Item 2 is 2 loaves of bread');

// 2. NLP Tests - Remove commands
console.log('\n--- 2. NLP Remove Command Tests ---');
const rem1 = parseVoiceCommand('Remove milk from my list');
assert(rem1.intent === 'REMOVE_ITEM', 'Intent is REMOVE_ITEM');
assert(rem1.itemName === 'milk', 'Extracted item to remove is "milk"', rem1.itemName);

const rem2 = parseVoiceCommand('Delete bananas');
assert(rem2.intent === 'REMOVE_ITEM' && rem2.itemName === 'bananas', 'Delete bananas recognized');

// 3. NLP Tests - Modify commands
console.log('\n--- 3. NLP Modify Command Tests ---');
const mod1 = parseVoiceCommand('Change milk quantity to 3');
assert(mod1.intent === 'MODIFY_QUANTITY', 'Intent is MODIFY_QUANTITY');
assert(mod1.targetItem === 'milk', 'Target item is milk', mod1.targetItem);
assert(mod1.quantity === 3, 'New quantity is 3', mod1.quantity);

// 4. NLP Tests - Search & Price Filter commands
console.log('\n--- 4. NLP Search & Price Filter Tests ---');
const search1 = parseVoiceCommand('Find toothpaste under $5');
assert(search1.intent === 'SEARCH_ITEMS', 'Intent is SEARCH_ITEMS');
assert(search1.query === 'toothpaste', 'Search query is toothpaste', search1.query);
assert(search1.maxPrice === 5, 'Max price is 5', search1.maxPrice);

const search2 = parseVoiceCommand('Find organic apples between $2 and $6');
assert(search2.intent === 'SEARCH_ITEMS', 'Search between $2 and $6');
assert(search2.minPrice === 2 && search2.maxPrice === 6, 'Min and max price parsed', `${search2.minPrice} - ${search2.maxPrice}`);
assert(search2.organic === true, 'Organic flag parsed correctly');

// 5. Multilingual NLP Tests
console.log('\n--- 5. Multilingual NLP Tests ---');
const hiAdd = parseVoiceCommand('दूध जोड़ो', 'hi-IN');
assert(hiAdd.intent === 'ADD_ITEM', 'Hindi Add intent recognized');

const esAdd = parseVoiceCommand('Añadir 3 manzanas', 'es-ES');
assert(esAdd.intent === 'ADD_ITEM' && esAdd.items[0].quantity === 3, 'Spanish Add 3 manzanas parsed');

const frAdd = parseVoiceCommand('Ajouter 2 bouteilles de lait', 'fr-FR');
assert(frAdd.intent === 'ADD_ITEM' && frAdd.items[0].quantity === 2, 'French Add 2 bouteilles de lait parsed');

// 6. Category Classifier Tests
console.log('\n--- 6. Category Classifier Tests ---');
assert(classifyItemCategory('organic honeycrisp apple') === 'Produce', 'Apple is Produce');
assert(classifyItemCategory('whole milk') === 'Dairy & Eggs', 'Milk is Dairy & Eggs');
assert(classifyItemCategory('sourdough bread') === 'Bakery', 'Bread is Bakery');
assert(classifyItemCategory('tide detergent') === 'Household & Cleaning', 'Detergent is Household');
assert(classifyItemCategory('colgate toothpaste') === 'Personal Care', 'Toothpaste is Personal Care');

// 7. Substitutes Lookup Tests
console.log('\n--- 7. Substitutes Lookup Tests ---');
const milkSubs = findSubstitutes('whole milk');
assert(milkSubs.length > 0, 'Found alternatives for milk');
assert(milkSubs.some(s => s.name.includes('Almond') || s.name.includes('Oat')), 'Milk substitutes include Oat or Almond milk');

const sugarSubs = findSubstitutes('sugar');
assert(sugarSubs.some(s => s.name.includes('Honey') || s.name.includes('Stevia')), 'Sugar substitutes include Honey / Stevia');

// 8. Catalog Search Tests
console.log('\n--- 8. Catalog Search Tests ---');
const cheapToothpastes = searchProducts({ query: 'toothpaste', maxPrice: 5 });
assert(cheapToothpastes.length > 0, 'Found toothpaste under $5');
assert(cheapToothpastes.every(p => p.price <= 5), 'All returned items are under $5');

// 9. Smart Suggestions Tests
console.log('\n--- 9. Smart Suggestions Engine Tests ---');
const suggestions = generateSmartSuggestions({
  currentItems: [{ id: '1', name: 'Whole Milk', category: 'Dairy & Eggs' }],
  purchaseHistory: {
    'Artisan Sourdough Loaf': { count: 4, lastAdded: Date.now() - 86400000 * 5, category: 'Bakery' },
    'Organic Bananas': { count: 3, lastAdded: Date.now() - 86400000 * 4, category: 'Produce' },
  }
});
assert(suggestions.historySuggestions.some(s => s.name === 'Artisan Sourdough Loaf'), 'History suggestion includes frequently bought bread');
assert(suggestions.seasonalSuggestions.length > 0, 'Seasonal suggestions generated');
assert(suggestions.substituteSuggestions.length > 0, 'Substitute suggestions generated for current items');

console.log(`\n========================================`);
console.log(`🎉 Test Results: ${passed} passed, ${failed} failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}

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

console.log('🧪 Running VoiceCart Indian Market & Rupee Test Suite...\n');

// 1. NLP Tests - Add commands
console.log('--- 1. NLP Add Command Tests ---');
const add1 = parseVoiceCommand('Add 2 packets of Amul milk');
assert(add1.intent === 'ADD_ITEM', 'Intent is ADD_ITEM');
assert(add1.items[0].name === 'amul milk', 'Extracted name "amul milk"', add1.items[0]?.name);
assert(add1.items[0].quantity === 2, 'Extracted quantity 2', add1.items[0]?.quantity);
assert(add1.items[0].unit === 'packets', 'Extracted unit "packets"', add1.items[0]?.unit);

const add2 = parseVoiceCommand('I need 1 kg fresh Shimla apples');
assert(add2.intent === 'ADD_ITEM', 'Intent is ADD_ITEM from "I need"');
assert(add2.items[0].quantity === 1, 'Extracted quantity 1');
assert(add2.items[0].unit === 'kg', 'Extracted unit kg');

const add3 = parseVoiceCommand('Buy 1 dozen bananas and 1 loaf of bread');
assert(add3.items.length === 2, 'Compound command splits 2 items');
assert(add3.items[0].name === 'bananas' && add3.items[0].quantity === 1, '1 dozen bananas parsed correctly');
assert(add3.items[1].name === 'bread' && add3.items[1].quantity === 1, '1 loaf of bread parsed correctly', JSON.stringify(add3.items[1]));

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

// 4. NLP Tests - Search & Rupee Price Filter commands
console.log('\n--- 4. NLP Search & Rupee Price Filter Tests ---');
const search1 = parseVoiceCommand('Find toothpaste under 60 rupees');
assert(search1.intent === 'SEARCH_ITEMS', 'Intent is SEARCH_ITEMS for "under 60 rupees"');
assert(search1.query === 'toothpaste', 'Search query is toothpaste', search1.query);
assert(search1.maxPrice === 60, 'Max price is 60', search1.maxPrice);

const search2 = parseVoiceCommand('Find Fortune oil between 100 and 200 rs');
assert(search2.intent === 'SEARCH_ITEMS', 'Search between 100 and 200 rs');
assert(search2.minPrice === 100 && search2.maxPrice === 200, 'Min 100 and max 200 price parsed', `${search2.minPrice} - ${search2.maxPrice}`);

const search3 = parseVoiceCommand('Search for organic tea under ₹300');
assert(search3.intent === 'SEARCH_ITEMS', 'Search under ₹300');
assert(search3.maxPrice === 300, 'Max price is 300');
assert(search3.organic === true, 'Organic flag parsed correctly');

// 5. Multilingual NLP Tests
console.log('\n--- 5. Multilingual NLP Tests ---');
const hiAdd = parseVoiceCommand('दो पैकेट अमूल दूध जोड़ो', 'hi-IN');
assert(hiAdd.intent === 'ADD_ITEM', 'Hindi Add intent recognized');

const esAdd = parseVoiceCommand('Añadir 3 manzanas', 'es-ES');
assert(esAdd.intent === 'ADD_ITEM' && esAdd.items[0].quantity === 3, 'Spanish Add 3 manzanas parsed');

const frAdd = parseVoiceCommand('Ajouter 2 bouteilles de lait', 'fr-FR');
assert(frAdd.intent === 'ADD_ITEM' && frAdd.items[0].quantity === 2, 'French Add 2 bouteilles de lait parsed');

// 6. Category Classifier Tests
console.log('\n--- 6. Category Classifier Tests ---');
assert(classifyItemCategory('Fresh Shimla Apples') === 'Produce & Veggies', 'Apple is Produce & Veggies');
assert(classifyItemCategory('Amul Taaza Toned Milk') === 'Dairy & Eggs', 'Milk is Dairy & Eggs');
assert(classifyItemCategory('Harvest Gold Atta Bread') === 'Bakery & Breads', 'Bread is Bakery & Breads');
assert(classifyItemCategory('Surf Excel Detergent') === 'Household & Cleaning', 'Detergent is Household & Cleaning');
assert(classifyItemCategory('Colgate Toothpaste') === 'Personal Care', 'Toothpaste is Personal Care');
assert(classifyItemCategory('Tata Tea Gold') === 'Beverages & Chai', 'Tea is Beverages & Chai');
assert(classifyItemCategory('Aashirvaad Atta') === 'Pantry & Masalas', 'Atta is Pantry & Masalas');

// 7. Substitutes Lookup Tests
console.log('\n--- 7. Substitutes Lookup Tests ---');
const milkSubs = findSubstitutes('milk');
assert(milkSubs.length > 0, 'Found alternatives for milk');
assert(milkSubs.some(s => s.name.includes('Almond') || s.name.includes('Oat')), 'Milk substitutes include Oat or Almond milk');

const sugarSubs = findSubstitutes('sugar');
assert(sugarSubs.some(s => s.name.includes('Jaggery') || s.name.includes('Gur') || s.name.includes('Honey')), 'Sugar substitutes include Jaggery / Gur');

// 8. Catalog Search Tests
console.log('\n--- 8. Catalog Search Tests ---');
const cheapToothpastes = searchProducts({ query: 'toothpaste', maxPrice: 150 });
assert(cheapToothpastes.length > 0, 'Found toothpaste under ₹150');
assert(cheapToothpastes.every(p => p.price <= 150), 'All returned items are under ₹150');

// 9. Smart Suggestions Tests
console.log('\n--- 9. Smart Suggestions Engine Tests ---');
const suggestions = generateSmartSuggestions({
  currentItems: [{ id: '1', name: 'Amul Taaza Toned Milk', category: 'Dairy & Eggs' }],
  purchaseHistory: {
    'Harvest Gold 100% Atta Bread': { count: 4, lastAdded: Date.now() - 86400000 * 5, category: 'Bakery & Breads' },
    'Robusta Bananas': { count: 3, lastAdded: Date.now() - 86400000 * 4, category: 'Produce & Veggies' },
  }
});
assert(suggestions.historySuggestions.some(s => s.name === 'Harvest Gold 100% Atta Bread'), 'History suggestion includes frequently bought bread');
assert(suggestions.seasonalSuggestions.length > 0, 'Seasonal suggestions generated');
assert(suggestions.substituteSuggestions.length > 0, 'Substitute suggestions generated for current items');

console.log(`\n========================================`);
console.log(`🎉 Test Results: ${passed} passed, ${failed} failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}

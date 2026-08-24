import { CATEGORIES } from './constants.js';
import { PRODUCT_CATALOG } from './productDatabase.js';

const CATEGORY_KEYWORDS = {
  [CATEGORIES.PRODUCE]: [
    'apple', 'apples', 'banana', 'bananas', 'orange', 'oranges', 'berry', 'berries', 'strawberry', 'strawberries',
    'spinach', 'palak', 'methi', 'lettuce', 'avocado', 'avocados', 'tomato', 'tomatoes', 'tamatar',
    'cucumber', 'kheera', 'kakdi', 'broccoli', 'carrot', 'carrots', 'gajar', 'onion', 'onions', 'pyaaz',
    'garlic', 'lahsun', 'potato', 'potatoes', 'aalu', 'grape', 'grapes', 'angoor', 'lemon', 'lemons', 'nimbu',
    'pepper', 'peppers', 'shimla mirch', 'ginger', 'adrak', 'mushroom', 'mushrooms', 'watermelon', 'tarbooj',
    'mango', 'mangoes', 'aam', 'peach', 'gobhi', 'cauliflower', 'cabbage', 'patta gobhi', 'bhindi', 'okra',
    'ladyfinger', 'karela', 'lauki', 'bottle gourd', 'tinda', 'matar', 'peas', 'dhaniya', 'coriander', 'pudina',
    'mint', 'mirch', 'chilli', 'green chilli', 'curry patta', 'kadipatta', 'fruit', 'fruits', 'vegetable', 'vegetables', 'sabzi', 'fal'
  ],
  [CATEGORIES.DAIRY_EGGS]: [
    'milk', 'doodh', 'toned milk', 'cow milk', 'egg', 'eggs', 'anda', 'ande', 'butter', 'makhan', 'amul butter',
    'cheese', 'paneer', 'cottage cheese', 'yogurt', 'curd', 'dahi', 'ghee', 'desi ghee', 'cream', 'malai',
    'sour cream', 'whipping cream', 'parmesan', 'cheddar', 'mozzarella', 'almond milk', 'oat milk', 'soya milk', 'sofit'
  ],
  [CATEGORIES.BAKERY]: [
    'bread', 'atta bread', 'white bread', 'brown bread', 'multigrain bread', 'sourdough', 'pav', 'bombay pav',
    'burger bun', 'buns', 'parota', 'paratha', 'chapati', 'roti', 'phulka', 'naan', 'croissant', 'cake',
    'fruit cake', 'rusk', 'toast', 'khari', 'bagel', 'muffin'
  ],
  [CATEGORIES.MEAT_SEAFOOD]: [
    'chicken', 'boneless chicken', 'murga', 'fish', 'machli', 'rohu', 'surmai', 'prawns', 'shrimp', 'mutton',
    'gosht', 'lamb', 'keema', 'egg', 'meat', 'seafood', 'tikka', 'kebab'
  ],
  [CATEGORIES.PANTRY]: [
    'oil', 'tel', 'mustard oil', 'sarson tel', 'sunflower oil', 'refined oil', 'olive oil', 'coconut oil',
    'atta', 'flour', 'chakki atta', 'maida', 'suji', 'rawa', 'besan', 'rice', 'chawal', 'basmati', 'dal',
    'toor dal', 'arhar dal', 'moong dal', 'chana dal', 'urad dal', 'masoor dal', 'rajma', 'chole', 'kabuli chana',
    'salt', 'namak', 'tata salt', 'sugar', 'cheeni', 'jaggery', 'gur', 'shakkar', 'honey', 'shahad',
    'haldi', 'turmeric', 'mirch powder', 'deggi mirch', 'dhaniya powder', 'garam masala', 'jeera', 'cumin',
    'rai', 'mustard seeds', 'hing', 'asafoetida', 'sauce', 'ketchup', 'maggi', 'noodles', 'pasta', 'peanut butter'
  ],
  [CATEGORIES.BEVERAGES]: [
    'chai', 'tea', 'tata tea', 'wagh bakri', 'green tea', 'tulsi tea', 'coffee', 'nescafe', 'bru', 'filter coffee',
    'water', 'pani', 'kinley', 'bisleri', 'aquafina', 'soda', 'cold drink', 'coke', 'pepsi', 'thums up', 'sprite',
    'frooti', 'maaza', 'real juice', 'juice', 'rooh afza', 'sharbat', 'bournvita', 'horlicks', 'complan'
  ],
  [CATEGORIES.SNACKS]: [
    'bhujia', 'aloo bhujia', 'khatta meetha', 'namkeen', 'sev', 'mixture', 'biscuit', 'parle-g', 'good day',
    'marie gold', 'oreo', 'bourbon', 'chips', 'lays', 'kurkure', 'bingo', 'nachos', 'popcorn', 'makhana',
    'chocolate', 'dairy milk', 'silk', '5 star', 'kitkat', 'kaju', 'cashew', 'badam', 'almond', 'pista', 'kishmish', 'dry fruits'
  ],
  [CATEGORIES.FROZEN]: [
    'frozen', 'frozen matar', 'frozen peas', 'french fries', 'mccain', 'smiles', 'ice cream', 'amul ice cream',
    'kwality walls', 'kulfi', 'matka kulfi', 'chocobar', 'cone'
  ],
  [CATEGORIES.PERSONAL_CARE]: [
    'colgate', 'toothpaste', 'brush', 'toothbrush', 'dabur red', 'sensodyne', 'dettol', 'soap', 'dove', 'pears',
    'lifebuoy', 'shampoo', 'head and shoulders', 'clinic plus', 'pantene', 'hair oil', 'parachute', 'coconut oil',
    'cream', 'moisturizer', 'nivea', 'fair and lovely', 'face wash', 'himalaya neem', 'sunscreen', 'boroplus', 'vaseline'
  ],
  [CATEGORIES.HOUSEHOLD]: [
    'surf excel', 'detergent', 'tide', 'ariel', 'wheel', 'ghadi', 'rin', 'vim', 'dishwash', 'pril', 'lizol',
    'floor cleaner', 'harpic', 'toilet cleaner', 'colin', 'hit', 'good knight', 'all out', 'garbage bags',
    'tissue', 'kitchen towel', 'napkin', 'sponge', 'scotch brite', 'broom', 'pocha'
  ]
};

export function classifyItemCategory(itemName) {
  if (!itemName) return CATEGORIES.OTHER;
  const clean = itemName.toLowerCase().trim();

  // 1. Direct search in product catalog
  const catalogMatch = PRODUCT_CATALOG.find((p) => 
    p.name.toLowerCase() === clean || clean.includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(clean)
  );
  if (catalogMatch) {
    return catalogMatch.category;
  }

  // 2. Keyword mapping
  const words = clean.split(/\s+/);
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const kw of keywords) {
      if (clean === kw || words.includes(kw) || clean.includes(kw)) {
        return category;
      }
    }
  }

  return CATEGORIES.OTHER;
}

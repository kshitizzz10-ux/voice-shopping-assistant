import { CATEGORIES } from './constants.js';

export const PRODUCT_CATALOG = [
  // Produce & Veggies
  { id: 'p1', name: 'Fresh Shimla Apples', category: CATEGORIES.PRODUCE, brand: 'Himachal Fresh', price: 140, unit: 'kg', organic: false, image: '🍎', tags: ['fruit', 'crisp', 'apple', 'fresh', 'seb', 'apples'] },
  { id: 'p2', name: 'Organic Royal Gala Apples', category: CATEGORIES.PRODUCE, brand: 'Organic India', price: 190, unit: 'kg', organic: true, image: '🍎', tags: ['fruit', 'apple', 'organic', 'seb'] },
  { id: 'p3', name: 'Robusta Bananas (1 Dozen)', category: CATEGORIES.PRODUCE, brand: 'Fresh Farm', price: 50, unit: 'dozen', organic: false, image: '🍌', tags: ['fruit', 'banana', 'kela', 'bananas'] },
  { id: 'p4', name: 'Fresh Strawberries (Box)', category: CATEGORIES.PRODUCE, brand: 'Mahabaleshwar', price: 90, unit: 'boxes', organic: false, image: '🍓', tags: ['berry', 'sweet', 'strawberry', 'strawberries'] },
  { id: 'p5', name: 'Desi Palak / Spinach', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 25, unit: 'bunches', organic: true, image: '🥬', tags: ['greens', 'palak', 'spinach', 'iron'] },
  { id: 'p6', name: 'Hass Avocados (2 pcs)', category: CATEGORIES.PRODUCE, brand: 'Imported', price: 180, unit: 'packs', organic: false, image: '🥑', tags: ['healthy fats', 'avocado', 'avocados'] },
  { id: 'p7', name: 'Fresh Desi Tomatoes (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 35, unit: 'kg', organic: false, image: '🍅', tags: ['salad', 'tamatar', 'tomato', 'tomatoes'] },
  { id: 'p8', name: 'Fresh Green Cucumbers / Kheera', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 30, unit: 'kg', organic: false, image: '🥒', tags: ['salad', 'cucumber', 'kheera'] },
  { id: 'p9', name: 'Fresh Cauliflower / Gobhi', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 35, unit: 'pcs', organic: false, image: '🥦', tags: ['vegetable', 'gobhi', 'cauliflower'] },
  { id: 'p10', name: 'Red Carrots / Gajar (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 40, unit: 'kg', organic: false, image: '🥕', tags: ['gajar', 'carrot', 'carrots'] },
  { id: 'p11', name: 'Nashik Red Onions / Pyaaz (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Nashik Fresh', price: 35, unit: 'kg', organic: false, image: '🧅', tags: ['essential', 'onion', 'pyaaz', 'onions'] },
  { id: 'p12', name: 'Agra Fresh Potatoes / Aalu (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Agra Special', price: 30, unit: 'kg', organic: false, image: '🥔', tags: ['staple', 'aalu', 'potato', 'potatoes'] },
  { id: 'p13', name: 'Fresh Garlic / Lahsun (250g)', category: CATEGORIES.PRODUCE, brand: 'Desi', price: 45, unit: 'packs', organic: false, image: '🧄', tags: ['lahsun', 'garlic'] },
  { id: 'p14', name: 'Fresh Ginger / Adrak (250g)', category: CATEGORIES.PRODUCE, brand: 'Desi', price: 35, unit: 'packs', organic: false, image: '🫚', tags: ['adrak', 'ginger', 'chai'] },
  { id: 'p15', name: 'Fresh Lemons / Nimbu (4 pcs)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 20, unit: 'packs', organic: false, image: '🍋', tags: ['lemon', 'nimbu', 'citrus'] },
  { id: 'p16', name: 'Fresh Green Peas / Matar (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Winter Fresh', price: 50, unit: 'kg', organic: false, image: '🫛', tags: ['matar', 'peas', 'green peas'] },
  { id: 'p17', name: 'Fresh Button Mushrooms (200g)', category: CATEGORIES.PRODUCE, brand: 'Mushroom World', price: 50, unit: 'packs', organic: false, image: '🍄', tags: ['mushroom', 'mushrooms', 'khumb'] },

  // Dairy & Eggs
  { id: 'd1', name: 'Amul Taaza Toned Milk (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 56, unit: 'packets', organic: false, image: '🥛', tags: ['milk', 'doodh', 'toned milk', 'amul milk'] },
  { id: 'd2', name: 'Amul Gold Full Cream Milk (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 68, unit: 'packets', organic: false, image: '🥛', tags: ['milk', 'doodh', 'full cream milk', 'amul gold'] },
  { id: 'd3', name: 'Mother Dairy Cow Milk (500ml)', category: CATEGORIES.DAIRY_EGGS, brand: 'Mother Dairy', price: 28, unit: 'packets', organic: false, image: '🥛', tags: ['milk', 'cow milk', 'doodh', 'mother dairy'] },
  { id: 'd4', name: 'Amul Fresh Malai Paneer (200g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 90, unit: 'packs', organic: false, image: '🧀', tags: ['paneer', 'cottage cheese', 'malai paneer'] },
  { id: 'd5', name: 'Mother Dairy Classic Dahi / Curd (400g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Mother Dairy', price: 35, unit: 'tubs', organic: false, image: '🥣', tags: ['dahi', 'curd', 'yogurt'] },
  { id: 'd6', name: 'Amul Salted Butter (100g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 58, unit: 'packs', organic: false, image: '🧈', tags: ['butter', 'makhan', 'amul butter'] },
  { id: 'd7', name: 'Amul Desi Ghee (1 L Ceka Pack)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 610, unit: 'packs', organic: false, image: '✨', tags: ['ghee', 'desi ghee', 'pure ghee'] },
  { id: 'd8', name: 'Farm Fresh White Eggs (6 pcs)', category: CATEGORIES.DAIRY_EGGS, brand: 'Eggoz', price: 48, unit: 'packs', organic: false, image: '🥚', tags: ['eggs', 'egg', 'anda', 'ande'] },
  { id: 'd9', name: 'Amul Cheese Slices (10 Slices)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 140, unit: 'packs', organic: false, image: '🧀', tags: ['cheese', 'cheese slices', 'sandwich'] },
  { id: 'd10', name: 'Raw Pressery Almond Milk (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Raw Pressery', price: 280, unit: 'bottles', organic: true, image: '🥛', tags: ['dairy-free', 'almond milk', 'vegan'] },

  // Bakery & Breads
  { id: 'b1', name: 'Harvest Gold 100% Atta Whole Wheat Bread', category: CATEGORIES.BAKERY, brand: 'Harvest Gold', price: 50, unit: 'loaves', organic: false, image: '🍞', tags: ['bread', 'atta bread', 'wheat bread', 'brown bread', 'white bread'] },
  { id: 'b2', name: 'Britannia 100% Whole Wheat Bread', category: CATEGORIES.BAKERY, brand: 'Britannia', price: 45, unit: 'loaves', organic: false, image: '🍞', tags: ['bread', 'sandwich bread', 'britannia bread'] },
  { id: 'b3', name: 'English Oven Multi Grain Bread', category: CATEGORIES.BAKERY, brand: 'English Oven', price: 55, unit: 'loaves', organic: false, image: '🥖', tags: ['bread', 'multigrain', 'multigrain bread'] },
  { id: 'b4', name: 'Harvest Gold Bombay Pav (6 pcs)', category: CATEGORIES.BAKERY, brand: 'Harvest Gold', price: 25, unit: 'packs', organic: false, image: '🥯', tags: ['pav', 'pav bhaji', 'buns'] },
  { id: 'b5', name: 'English Oven Burger Buns (2 pcs)', category: CATEGORIES.BAKERY, brand: 'English Oven', price: 30, unit: 'packs', organic: false, image: '🍔', tags: ['burger', 'buns', 'burger buns'] },
  { id: 'b6', name: 'iD Fresh Whole Wheat Malabar Parota (5 pcs)', category: CATEGORIES.BAKERY, brand: 'iD Fresh', price: 85, unit: 'packs', organic: false, image: '🫓', tags: ['paratha', 'parota', 'malabar parota'] },
  { id: 'b7', name: 'iD Fresh Whole Wheat Chapatis (10 pcs)', category: CATEGORIES.BAKERY, brand: 'iD Fresh', price: 70, unit: 'packs', organic: false, image: '🫓', tags: ['roti', 'chapati', 'phulka'] },

  // Meat & Seafood
  { id: 'm1', name: 'Fresh Boneless Chicken Breast (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Licious', price: 210, unit: 'packs', organic: false, image: '🍗', tags: ['chicken', 'boneless chicken', 'protein', 'murga', 'meat'] },
  { id: 'm2', name: 'Fresh Chicken Curry Cut (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Licious', price: 145, unit: 'packs', organic: false, image: '🍗', tags: ['chicken', 'curry cut', 'chicken curry'] },
  { id: 'm3', name: 'Fresh Rohu Fish Cut (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'FreshToHome', price: 180, unit: 'packs', organic: false, image: '🐟', tags: ['fish', 'rohu', 'machli', 'seafood', 'fresh fish'] },
  { id: 'm4', name: 'Fresh Prawns Cleaned & Deveined (250g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Licious', price: 240, unit: 'packs', organic: false, image: '🦐', tags: ['prawns', 'shrimp', 'jheenga'] },
  { id: 'm5', name: 'Fresh Mutton Curry Cut (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'FreshToHome', price: 440, unit: 'packs', organic: false, image: '🥩', tags: ['mutton', 'gosht', 'lamb'] },

  // Pantry & Masalas
  { id: 'pt1', name: 'Aashirvaad Shudh Chakki Atta (5 kg)', category: CATEGORIES.PANTRY, brand: 'Aashirvaad', price: 235, unit: 'bags', organic: false, image: '🌾', tags: ['atta', 'flour', 'chakki atta', 'aashirvaad atta'] },
  { id: 'pt2', name: 'Fortune Kachi Ghani Mustard Oil (1 L)', category: CATEGORIES.PANTRY, brand: 'Fortune', price: 155, unit: 'bottles', organic: false, image: '🫒', tags: ['oil', 'sarson tel', 'mustard oil', 'fortune oil'] },
  { id: 'pt3', name: 'Fortune Sunlite Sunflower Oil (1 L)', category: CATEGORIES.PANTRY, brand: 'Fortune', price: 135, unit: 'packets', organic: false, image: '🌻', tags: ['oil', 'sunflower oil', 'refined oil'] },
  { id: 'pt4', name: 'Tata Salt Vacuum Evaporated (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata', price: 28, unit: 'packets', organic: false, image: '🧂', tags: ['salt', 'namak', 'tata salt'] },
  { id: 'pt5', name: 'Madhur Pure Sugar (1 kg)', category: CATEGORIES.PANTRY, brand: 'Madhur', price: 50, unit: 'packets', organic: false, image: '🍬', tags: ['sugar', 'cheeni', 'madhur sugar'] },
  { id: 'pt6', name: 'Organic Jaggery Powder / Gur (500g)', category: CATEGORIES.PANTRY, brand: 'Organic Tattva', price: 65, unit: 'packs', organic: true, image: '🪵', tags: ['jaggery', 'gur', 'shakkar'] },
  { id: 'pt7', name: 'Daawat Rozana Super Basmati Rice (5 kg)', category: CATEGORIES.PANTRY, brand: 'Daawat', price: 380, unit: 'bags', organic: false, image: '🍚', tags: ['rice', 'chawal', 'basmati rice', 'daawat'] },
  { id: 'pt8', name: 'Tata Sampann Unpolished Toor Dal (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata Sampann', price: 165, unit: 'packets', organic: false, image: '🍲', tags: ['dal', 'toor dal', 'arhar dal', 'tata dal'] },
  { id: 'pt9', name: 'Tata Sampann Moong Dal Dhuli (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata Sampann', price: 140, unit: 'packets', organic: false, image: '🍲', tags: ['moong dal', 'dal'] },
  { id: 'pt10', name: 'Maggi 2-Minute Masala Noodles (Pack of 4)', category: CATEGORIES.PANTRY, brand: 'Nestle Maggi', price: 56, unit: 'packs', organic: false, image: '🍜', tags: ['maggi', 'noodles', 'instant noodles'] },
  { id: 'pt11', name: 'Kissan Fresh Tomato Ketchup (950g)', category: CATEGORIES.PANTRY, brand: 'Kissan', price: 125, unit: 'bottles', organic: false, image: '🍅', tags: ['ketchup', 'sauce', 'kissan ketchup'] },
  { id: 'pt12', name: 'MDH Deggi Mirch Powder (100g)', category: CATEGORIES.PANTRY, brand: 'MDH', price: 78, unit: 'boxes', organic: false, image: '🌶️', tags: ['mirch', 'masala', 'chilli powder', 'deggi mirch'] },
  { id: 'pt13', name: 'Everest Turmeric / Haldi Powder (100g)', category: CATEGORIES.PANTRY, brand: 'Everest', price: 36, unit: 'boxes', organic: false, image: '🌿', tags: ['haldi', 'turmeric', 'everest haldi'] },
  { id: 'pt14', name: 'Dabur 100% Pure Honey (500g)', category: CATEGORIES.PANTRY, brand: 'Dabur', price: 210, unit: 'bottles', organic: false, image: '🍯', tags: ['honey', 'shahad', 'dabur honey'] },

  // Beverages & Chai
  { id: 'bev1', name: 'Tata Tea Gold Premium Leaf Chai (500g)', category: CATEGORIES.BEVERAGES, brand: 'Tata Tea', price: 285, unit: 'packets', organic: false, image: '☕', tags: ['tea', 'chai', 'tata tea', 'tata tea gold', 'chay'] },
  { id: 'bev2', name: 'Wagh Bakri Premium Leaf Tea (500g)', category: CATEGORIES.BEVERAGES, brand: 'Wagh Bakri', price: 260, unit: 'packets', organic: false, image: '☕', tags: ['tea', 'chai', 'wagh bakri'] },
  { id: 'bev3', name: 'Nescafe Classic Instant Coffee Jar (100g)', category: CATEGORIES.BEVERAGES, brand: 'Nescafe', price: 320, unit: 'jars', organic: false, image: '☕', tags: ['coffee', 'nescafe', 'instant coffee'] },
  { id: 'bev4', name: 'Kinley Packaged Drinking Water (1 L)', category: CATEGORIES.BEVERAGES, brand: 'Kinley', price: 20, unit: 'bottles', organic: false, image: '💧', tags: ['water', 'pani', 'mineral water'] },
  { id: 'bev5', name: 'Real 100% Mixed Fruit Juice (1 L)', category: CATEGORIES.BEVERAGES, brand: 'Real', price: 110, unit: 'cartons', organic: false, image: '🧃', tags: ['juice', 'fruit juice', 'real juice'] },

  // Snacks & Namkeen
  { id: 'sn1', name: 'Haldiram\'s Nagpur Aloo Bhujia (400g)', category: CATEGORIES.SNACKS, brand: 'Haldirams', price: 110, unit: 'packets', organic: false, image: '🥨', tags: ['bhujia', 'aloo bhujia', 'namkeen', 'haldiram'] },
  { id: 'sn2', name: 'Parle-G Original Glucose Biscuits (800g)', category: CATEGORIES.SNACKS, brand: 'Parle', price: 80, unit: 'packets', organic: false, image: '🍪', tags: ['biscuit', 'parle-g', 'biscuits', 'parle'] },
  { id: 'sn3', name: 'Britannia Good Day Butter Cookies (600g)', category: CATEGORIES.SNACKS, brand: 'Britannia', price: 120, unit: 'packets', organic: false, image: '🍪', tags: ['cookies', 'good day', 'butter cookies'] },
  { id: 'sn4', name: 'Lay\'s India\'s Magic Masala Chips (50g)', category: CATEGORIES.SNACKS, brand: 'Lays', price: 20, unit: 'packets', organic: false, image: '🥔', tags: ['chips', 'lays', 'magic masala', 'crisps'] },
  { id: 'sn5', name: 'Kurkure Masala Munch (90g)', category: CATEGORIES.SNACKS, brand: 'Kurkure', price: 20, unit: 'packets', organic: false, image: '🥨', tags: ['kurkure', 'namkeen', 'snack'] },
  { id: 'sn6', name: 'Cadbury Dairy Milk Silk Chocolate (150g)', category: CATEGORIES.SNACKS, brand: 'Cadbury', price: 175, unit: 'bars', organic: false, image: '🍫', tags: ['chocolate', 'silk', 'dairy milk', 'cadbury'] },

  // Personal Care & Household
  { id: 'pc1', name: 'Colgate Strong Teeth Toothpaste (500g)', category: CATEGORIES.PERSONAL_CARE, brand: 'Colgate', price: 210, unit: 'tubes', organic: false, image: '🪥', tags: ['colgate', 'toothpaste', 'brush', 'dental'] },
  { id: 'pc2', name: 'Dettol Original Bathing Soap (Pack of 4)', category: CATEGORIES.PERSONAL_CARE, brand: 'Dettol', price: 180, unit: 'packs', organic: false, image: '🧼', tags: ['soap', 'dettol', 'bath soap'] },
  { id: 'pc3', name: 'Parachute 100% Pure Coconut Oil (500ml)', category: CATEGORIES.PERSONAL_CARE, brand: 'Parachute', price: 145, unit: 'bottles', organic: true, image: '🥥', tags: ['coconut oil', 'hair oil', 'parachute'] },
  { id: 'hh1', name: 'Surf Excel Quick Wash Detergent Powder (1 kg)', category: CATEGORIES.HOUSEHOLD, brand: 'Surf Excel', price: 145, unit: 'packets', organic: false, image: '🧺', tags: ['surf excel', 'detergent', 'washing powder'] },
  { id: 'hh2', name: 'Vim Dishwash Gel Lemon (750ml)', category: CATEGORIES.HOUSEHOLD, brand: 'Vim', price: 155, unit: 'bottles', organic: false, image: '🍋', tags: ['vim', 'dishwash', 'vim gel'] },
];

/**
 * Searches and finds the best matching in-stock product from the store catalog.
 */
export function findBestCatalogMatch(queryText) {
  if (!queryText) return null;
  const clean = queryText.toLowerCase().trim();

  // 1. Direct exact name or exact tag match
  const exactMatch = PRODUCT_CATALOG.find((p) =>
    p.name.toLowerCase() === clean ||
    p.tags.some((t) => t.toLowerCase() === clean)
  );

  if (exactMatch) return { found: true, product: exactMatch };

  // 2. Multi-word tag / brand match
  const cleanWords = clean.split(/\s+/);
  const wordMatch = PRODUCT_CATALOG.find((p) =>
    cleanWords.some((w) => p.tags.includes(w) && w.length > 2 && w !== 'fruit' && w !== 'food')
  );

  if (wordMatch) return { found: true, product: wordMatch };

  // 3. Partial name match
  const partialNameMatch = PRODUCT_CATALOG.find((p) =>
    p.name.toLowerCase().includes(clean) || clean.includes(p.name.toLowerCase())
  );

  if (partialNameMatch) return { found: true, product: partialNameMatch };

  // 4. If not found in catalog, return closest category suggestions
  return {
    found: false,
    query: queryText,
    suggestions: PRODUCT_CATALOG.slice(0, 4),
  };
}

export function searchProducts({
  query = '',
  minPrice = 0,
  maxPrice = 1000,
  category = null,
  organicOnly = false,
}) {
  const cleanQuery = query.toLowerCase().trim();
  
  return PRODUCT_CATALOG.filter((item) => {
    if (item.price < minPrice || item.price > maxPrice) return false;
    if (category && category !== 'All' && item.category !== category) return false;
    if (organicOnly && !item.organic) return false;
    if (!cleanQuery) return true;
    
    const nameMatch = item.name.toLowerCase().includes(cleanQuery);
    const brandMatch = item.brand.toLowerCase().includes(cleanQuery);
    const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(cleanQuery));
    const catMatch = item.category.toLowerCase().includes(cleanQuery);
    
    return nameMatch || brandMatch || tagMatch || catMatch;
  });
}

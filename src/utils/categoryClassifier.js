import { CATEGORIES } from './constants.js';
import { PRODUCT_CATALOG } from './productDatabase.js';

const CATEGORY_KEYWORDS = {
  [CATEGORIES.PRODUCE]: [
    'apple', 'apples', 'banana', 'bananas', 'orange', 'oranges', 'berry', 'berries', 'strawberry', 'strawberries',
    'blueberry', 'blueberries', 'spinach', 'kale', 'lettuce', 'avocado', 'avocados', 'tomato', 'tomatoes',
    'cucumber', 'cucumbers', 'broccoli', 'carrot', 'carrots', 'onion', 'onions', 'garlic', 'potato', 'potatoes',
    'grape', 'grapes', 'lemon', 'lemons', 'lime', 'limes', 'pepper', 'peppers', 'ginger', 'mushroom', 'mushrooms',
    'watermelon', 'melon', 'mango', 'mangoes', 'peach', 'peaches', 'celery', 'zucchini', 'cilantro', 'parsley',
    'mint', 'corn', 'squash', 'herbs', 'salad', 'fruit', 'fruits', 'vegetable', 'vegetables', 'sabzi', 'fal', 'aalu', 'pyaaz', 'tamatar'
  ],
  [CATEGORIES.DAIRY_EGGS]: [
    'milk', 'doodh', 'egg', 'eggs', 'anda', 'ande', 'butter', 'makhan', 'cheese', 'paneer', 'yogurt', 'curd',
    'dahi', 'ghee', 'cream', 'creamer', 'sour cream', 'whipping cream', 'cottage cheese', 'parmesan', 'cheddar',
    'mozzarella', 'almond milk', 'oat milk', 'soy milk'
  ],
  [CATEGORIES.BAKERY]: [
    'bread', 'roti', 'loaf', 'loaves', 'bagel', 'bagels', 'croissant', 'croissants', 'muffin', 'muffins',
    'tortilla', 'tortillas', 'bun', 'buns', 'pita', 'naan', 'sourdough', 'pastry', 'toast', 'baguette', 'cake', 'cookies'
  ],
  [CATEGORIES.MEAT_SEAFOOD]: [
    'chicken', 'murga', 'beef', 'steak', 'pork', 'bacon', 'turkey', 'fish', 'machli', 'salmon', 'tuna',
    'shrimp', 'prawns', 'meat', 'mutton', 'lamb', 'sausage', 'ham', 'crab', 'lobster', 'cod', 'ribs'
  ],
  [CATEGORIES.PANTRY]: [
    'oil', 'olive oil', 'tel', 'rice', 'chawal', 'pasta', 'flour', 'atta', 'sugar', 'cheeni', 'salt', 'namak',
    'honey', 'syrup', 'beans', 'lentils', 'dal', 'sauce', 'marinara', 'vinegar', 'soy sauce', 'spice', 'spices',
    'masala', 'quinoa', 'peanut butter', 'almond butter', 'cereal', 'oats', 'chickpeas', 'ketchup', 'mayonnaise', 'mustard'
  ],
  [CATEGORIES.BEVERAGES]: [
    'water', 'pani', 'juice', 'ras', 'coffee', 'chai', 'tea', 'soda', 'coke', 'pepsi', 'lemonade', 'kombucha',
    'latte', 'espresso', 'sparkling water', 'beer', 'wine', 'energy drink', 'smoothie'
  ],
  [CATEGORIES.SNACKS]: [
    'chips', 'crisps', 'popcorn', 'chocolate', 'biscuit', 'biscuits', 'cookies', 'nuts', 'crackers', 'gummy',
    'candy', 'snack', 'bars', 'granola bar', 'pretzels', 'namkeen', 'trail mix'
  ],
  [CATEGORIES.FROZEN]: [
    'frozen', 'ice cream', 'pizza', 'frozen pizza', 'frozen berries', 'frozen vegetables', 'edamame', 'frozen meals',
    'ice', 'waffles', 'popsicles'
  ],
  [CATEGORIES.PERSONAL_CARE]: [
    'toothpaste', 'soap', 'shampoo', 'conditioner', 'body wash', 'lotion', 'face wash', 'cleanser', 'sunscreen',
    'lip balm', 'deodorant', 'razor', 'floss', 'tampons', 'pads', 'skincare', 'perfume', 'brush', 'toothbrush'
  ],
  [CATEGORIES.HOUSEHOLD]: [
    'detergent', 'dish soap', 'paper towel', 'paper towels', 'toilet paper', 'wipes', 'trash bags', 'garbage bags',
    'cleaner', 'bleach', 'sponge', 'foil', 'ziploc', 'light bulb', 'tissues', 'napkins'
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

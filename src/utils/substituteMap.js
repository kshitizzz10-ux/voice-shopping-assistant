export const SUBSTITUTE_MAP = {
  // Dairy Alternatives
  'milk': [
    { name: 'Unsweetened Almond Milk', reason: 'Dairy-Free & Low Calorie', category: 'Dairy & Eggs', icon: '🥛' },
    { name: 'Creamy Oat Milk', reason: 'Rich & Plant-Based', category: 'Dairy & Eggs', icon: '🌾' },
    { name: 'Organic Soy Milk', reason: 'High Protein Alternative', category: 'Dairy & Eggs', icon: '🌱' },
    { name: 'Coconut Milk', reason: 'Tropical & Lactose-Free', category: 'Dairy & Eggs', icon: '🥥' },
  ],
  'whole milk': [
    { name: 'Creamy Oat Milk', reason: 'Closest creamy texture without dairy', category: 'Dairy & Eggs', icon: '🌾' },
    { name: 'Unsweetened Almond Milk', reason: 'Light & Plant-Based', category: 'Dairy & Eggs', icon: '🥛' },
  ],
  'butter': [
    { name: 'Plant-Based Butter', reason: 'Vegan & Dairy-Free', category: 'Dairy & Eggs', icon: '🧈' },
    { name: 'Organic Coconut Oil', reason: 'Healthy Baking Substitute', category: 'Pantry & Condiments', icon: '🥥' },
    { name: 'Extra Virgin Olive Oil', reason: 'Heart-Healthy Sautéing', category: 'Pantry & Condiments', icon: '🫒' },
    { name: 'Pure Ghee', reason: 'Lactose-Free Clarified Butter', category: 'Dairy & Eggs', icon: '✨' },
  ],
  'cheese': [
    { name: 'Plant-Based Shredded Cheddar', reason: 'Dairy-Free & Melts Well', category: 'Dairy & Eggs', icon: '🧀' },
    { name: 'Nutritional Yeast', reason: 'Savory Cheesy Flavor (Vegan)', category: 'Pantry & Condiments', icon: '✨' },
  ],
  'yogurt': [
    { name: 'Coconut Milk Yogurt', reason: 'Creamy & Probiotic Rich', category: 'Dairy & Eggs', icon: '🥥' },
    { name: 'Almond Milk Yogurt', reason: 'Light & Dairy-Free', category: 'Dairy & Eggs', icon: '🥛' },
  ],
  'sour cream': [
    { name: 'Greek Plain Yogurt', reason: 'Higher Protein Alternative', category: 'Dairy & Eggs', icon: '🥣' },
    { name: 'Cashew Sour Cream', reason: 'Vegan & Tangy', category: 'Dairy & Eggs', icon: '🌱' },
  ],

  // Sweeteners & Sugar
  'sugar': [
    { name: 'Raw Unfiltered Honey', reason: 'Natural Antioxidant Sweetener', category: 'Pantry & Condiments', icon: '🍯' },
    { name: '100% Pure Maple Syrup', reason: 'Unrefined Natural Sweetener', category: 'Pantry & Condiments', icon: '🍁' },
    { name: 'Organic Stevia Sweetener', reason: 'Zero-Calorie & Keto-Friendly', category: 'Pantry & Condiments', icon: '🌿' },
    { name: 'Monk Fruit Sweetener', reason: 'Zero Glycemic Impact', category: 'Pantry & Condiments', icon: '🍈' },
  ],
  'white sugar': [
    { name: 'Organic Stevia Sweetener', reason: 'Zero Sugar & Low Carb', category: 'Pantry & Condiments', icon: '🌿' },
    { name: 'Coconut Sugar', reason: 'Lower Glycemic Index', category: 'Pantry & Condiments', icon: '🥥' },
  ],

  // Bakery & Grains (Gluten-Free)
  'bread': [
    { name: 'Gluten-Free White Bread', reason: 'Celiac & Wheat-Free Safe', category: 'Bakery', icon: '🍞' },
    { name: 'Artisan Sourdough Loaf', reason: 'Fermented & Easier to Digest', category: 'Bakery', icon: '🥖' },
    { name: 'Ezekiel Sprouted Bread', reason: 'Nutrient-Dense & Low GI', category: 'Bakery', icon: '🌾' },
  ],
  'wheat bread': [
    { name: 'Gluten-Free Multi-Seed Bread', reason: '100% Gluten-Free', category: 'Bakery', icon: '🍞' },
    { name: 'Rye Bread', reason: 'High Fiber & Hearty', category: 'Bakery', icon: '🥖' },
  ],
  'pasta': [
    { name: 'Banza Chickpea Pasta', reason: 'Gluten-Free & High Protein', category: 'Pantry & Condiments', icon: '🍝' },
    { name: 'Brown Rice Pasta', reason: 'Traditional Texture Wheat-Free', category: 'Pantry & Condiments', icon: '🌾' },
    { name: 'Zucchini Spirals (Zoodles)', reason: 'Low Carb Veggie Option', category: 'Produce', icon: '🥒' },
  ],
  'flour': [
    { name: 'Almond Flour', reason: 'Gluten-Free & Keto-Friendly', category: 'Pantry & Condiments', icon: '🌰' },
    { name: 'Gluten-Free 1-to-1 Baking Flour', reason: 'Direct Baking Replacement', category: 'Pantry & Condiments', icon: '🌾' },
    { name: 'Oat Flour', reason: 'Whole Grain & High Fiber', category: 'Pantry & Condiments', icon: '🥣' },
  ],
  'white rice': [
    { name: 'Organic Quinoa (Tricolor)', reason: 'Complete Protein Supergrain', category: 'Pantry & Condiments', icon: '🌾' },
    { name: 'Cauliflower Rice', reason: 'Low Carb & Keto-Friendly', category: 'Produce', icon: '🥦' },
    { name: 'Brown Jasmine Rice', reason: 'Whole Grain Fiber', category: 'Pantry & Condiments', icon: '🍚' },
  ],

  // Meat Substitutes (Vegan / Plant-based)
  'beef': [
    { name: 'Beyond Meat Plant-Based Beef', reason: '100% Vegan & High Protein', category: 'Meat & Seafood', icon: '🌱' },
    { name: 'Organic Black Beans', reason: 'Whole Food Plant Protein', category: 'Pantry & Condiments', icon: '🫘' },
    { name: 'Portobello Mushrooms', reason: 'Meaty Texture & Low Calorie', category: 'Produce', icon: '🍄' },
  ],
  'ground beef': [
    { name: 'Beyond Meat Plant-Based Beef', reason: 'Vegan Burger Alternative', category: 'Meat & Seafood', icon: '🌱' },
    { name: 'Organic Firm Tofu (Crumbled)', reason: 'Versatile Plant Protein', category: 'Produce', icon: '🧈' },
  ],
  'chicken': [
    { name: 'Organic Firm Tofu', reason: 'High Protein Plant Alternative', category: 'Produce', icon: '🧈' },
    { name: 'Tempeh Strips', reason: 'Nutty & Fermented Superfood', category: 'Produce', icon: '🌱' },
    { name: 'Jackfruit (Canned in Brine)', reason: 'Shredded Pulled Texture', category: 'Pantry & Condiments', icon: '🍈' },
  ],
  'bacon': [
    { name: 'Turkey Bacon', reason: 'Lower Fat Alternative', category: 'Meat & Seafood', icon: '🥓' },
    { name: 'Tempeh Bacon Strips', reason: 'Smoky Vegan Crisp', category: 'Produce', icon: '🌱' },
  ],

  // Spreads & Condiments
  'peanut butter': [
    { name: 'Creamy Almond Butter', reason: 'Nutrient-Dense & Paleo', category: 'Pantry & Condiments', icon: '🌰' },
    { name: 'Sunflower Seed Butter (SunButter)', reason: 'Nut-Free School Safe', category: 'Pantry & Condiments', icon: '🌻' },
  ],
  'mayonnaise': [
    { name: 'Avocado Oil Mayonnaise', reason: 'Healthy Fats & Seed-Oil Free', category: 'Pantry & Condiments', icon: '🥑' },
    { name: 'Vegan Mayo', reason: 'Egg-Free & Plant-Based', category: 'Pantry & Condiments', icon: '🌱' },
  ],
  'soy sauce': [
    { name: 'Coconut Aminos', reason: 'Soy-Free & Low Sodium', category: 'Pantry & Condiments', icon: '🥥' },
    { name: 'Tamari Sauce', reason: '100% Gluten-Free Soy Sauce', category: 'Pantry & Condiments', icon: '🍶' },
  ],
  'chips': [
    { name: 'Sea Salt Popcorn', reason: 'Whole Grain & Lower Calorie', category: 'Snacks & Sweets', icon: '🍿' },
    { name: 'Baked Veggie Crisps', reason: 'Crunchy Veggie Alternative', category: 'Snacks & Sweets', icon: '🥕' },
  ],
};

/**
 * Find substitutes for a given item name.
 */
export function findSubstitutes(itemName) {
  if (!itemName) return [];
  const normalized = itemName.toLowerCase().trim();
  
  // Direct match
  if (SUBSTITUTE_MAP[normalized]) {
    return SUBSTITUTE_MAP[normalized];
  }
  
  // Partial / sub-word match
  for (const [key, subs] of Object.entries(SUBSTITUTE_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return subs;
    }
  }
  
  return [];
}

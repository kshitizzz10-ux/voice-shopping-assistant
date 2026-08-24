export const SUBSTITUTE_MAP = {
  // Dairy & Paneer Alternatives
  'milk': [
    { name: 'Raw Pressery Almond Milk', reason: 'Dairy-Free & Lactose-Free', category: 'Dairy & Eggs', icon: '🥛' },
    { name: 'Oatly Oat Milk', reason: 'Rich, Creamy & Plant-Based', category: 'Dairy & Eggs', icon: '🌾' },
    { name: 'Sofit Soya Milk', reason: 'High Protein Plant Alternative', category: 'Dairy & Eggs', icon: '🌱' },
    { name: 'Mother Dairy Cow Milk', reason: 'Lighter & Easier Digestion', category: 'Dairy & Eggs', icon: '🥛' },
  ],
  'paneer': [
    { name: 'Organic Soya Tofu (200g)', reason: '100% Vegan & Low-Fat Protein', category: 'Produce & Veggies', icon: '🧈' },
    { name: 'Fresh Soya Chaap (500g)', reason: 'High Protein Plant Alternative', category: 'Pantry & Masalas', icon: '🌱' },
    { name: 'Sprouted Green Moong (500g)', reason: 'Natural Whole Food Protein', category: 'Pantry & Masalas', icon: '🫘' },
  ],
  'butter': [
    { name: 'Pure Desi Ghee', reason: 'Lactose-Free Clarified Butter', category: 'Dairy & Eggs', icon: '✨' },
    { name: 'Nutralite DoodhShakti Butter Spread', reason: 'Zero Cholesterol Table Spread', category: 'Dairy & Eggs', icon: '🧈' },
    { name: 'Fortune Mustard Oil / Sarson Tel', reason: 'Heart-Healthy Traditional Cooking', category: 'Pantry & Masalas', icon: '🫒' },
  ],
  'curd': [
    { name: 'Epigamia Greek Yogurt (Plain)', reason: '2x Protein & Low Fat', category: 'Dairy & Eggs', icon: '🥣' },
    { name: 'Coconut Milk Dahi', reason: 'Dairy-Free Probiotic Alternative', category: 'Dairy & Eggs', icon: '🥥' },
  ],
  'dahi': [
    { name: 'Epigamia Greek Yogurt (Plain)', reason: '2x Protein & Low Fat', category: 'Dairy & Eggs', icon: '🥣' },
    { name: 'Coconut Milk Dahi', reason: 'Dairy-Free Probiotic Alternative', category: 'Dairy & Eggs', icon: '🥥' },
  ],

  // Sweeteners & Sugar
  'sugar': [
    { name: 'Organic Jaggery Powder / Gur', reason: 'Unrefined & Rich in Iron', category: 'Pantry & Masalas', icon: '🪵' },
    { name: 'Dabur 100% Pure Honey', reason: 'Natural Antioxidant Sweetener', category: 'Pantry & Masalas', icon: '🍯' },
    { name: 'SugarFree Green Stevia', reason: '100% Natural Zero Calorie', category: 'Pantry & Masalas', icon: '🌿' },
    { name: 'Desi Khand / Raw Cane Sugar', reason: 'Chemical-Free Traditional Sweetener', category: 'Pantry & Masalas', icon: '🌾' },
  ],
  'cheeni': [
    { name: 'Organic Jaggery Powder / Gur', reason: 'Iron-Rich Natural Sweetener', category: 'Pantry & Masalas', icon: '🪵' },
    { name: 'SugarFree Green Stevia', reason: 'Zero Calorie Sweetener', category: 'Pantry & Masalas', icon: '🌿' },
  ],

  // Breads, Flours & Grains (Gluten-Free & Healthy)
  'bread': [
    { name: 'Harvest Gold 100% Atta Bread', reason: 'Zero Maida Whole Wheat', category: 'Bakery & Breads', icon: '🍞' },
    { name: 'English Oven Multi Grain Bread', reason: 'High Fiber Seeds & Grains', category: 'Bakery & Breads', icon: '🌾' },
    { name: 'The Baker\'s Dozen Sourdough Bread', reason: 'Gut-Friendly Fermented Bread', category: 'Bakery & Breads', icon: '🥖' },
  ],
  'flour': [
    { name: 'Aashirvaad Multigrain Atta', reason: '6 Grain Fiber Rich Blend', category: 'Pantry & Masalas', icon: '🌾' },
    { name: 'Organic Ragi / Finger Millet Flour', reason: 'Gluten-Free & High Calcium', category: 'Pantry & Masalas', icon: '🥣' },
    { name: 'Besan / Gram Flour', reason: 'High Protein Gluten-Free Flour', category: 'Pantry & Masalas', icon: '🍲' },
  ],
  'atta': [
    { name: 'Aashirvaad Multigrain Atta', reason: 'High Fiber 6-Grain Blend', category: 'Pantry & Masalas', icon: '🌾' },
    { name: 'Organic Jowar / Sorghum Atta', reason: 'Gluten-Free Ancient Grain', category: 'Pantry & Masalas', icon: '🌾' },
    { name: 'Organic Ragi Flour', reason: 'Calcium & Iron Superfood', category: 'Pantry & Masalas', icon: '🥣' },
  ],
  'maida': [
    { name: 'Aashirvaad Shudh Chakki Atta', reason: '100% Whole Wheat Alternative', category: 'Pantry & Masalas', icon: '🌾' },
    { name: 'Organic Suji / Rava', reason: 'Coarse Wheat Semolina', category: 'Pantry & Masalas', icon: '🥣' },
  ],
  'white rice': [
    { name: 'Daawat Brown Basmati Rice', reason: 'Low GI & High Fiber', category: 'Pantry & Masalas', icon: '🍚' },
    { name: 'Organic Quinoa (Tricolor)', reason: 'High Protein Supergrain', category: 'Pantry & Masalas', icon: '🌾' },
    { name: 'Millets / Foxtail Millet (Kangni)', reason: 'Ancient Diabetic-Friendly Grain', category: 'Pantry & Masalas', icon: '🌾' },
  ],
  'rice': [
    { name: 'Daawat Brown Basmati Rice', reason: 'Low Glycemic Index', category: 'Pantry & Masalas', icon: '🍚' },
    { name: 'Millets / Little Millet', reason: 'High Fiber Gluten-Free Grain', category: 'Pantry & Masalas', icon: '🌾' },
  ],

  // Cooking Oils & Fats
  'oil': [
    { name: 'Fortune Kachi Ghani Mustard Oil', reason: 'Cold-Pressed Heart Friendly', category: 'Pantry & Masalas', icon: '🫒' },
    { name: 'Figaro Pure Olive Oil', reason: 'Rich in Antioxidants & Omega-9', category: 'Pantry & Masalas', icon: '🫒' },
    { name: 'Pure Desi Ghee', reason: 'Aromatic Traditional Cooking Fat', category: 'Dairy & Eggs', icon: '✨' },
    { name: 'Parachute Cold-Pressed Coconut Oil', reason: 'Medium Chain Triglycerides (MCT)', category: 'Pantry & Masalas', icon: '🥥' },
  ],

  // Snacks & Chips
  'chips': [
    { name: 'Roasted Makhana / Fox Nuts (100g)', reason: 'Low Calorie Superfood Crunch', category: 'Snacks & Namkeen', icon: '🍿' },
    { name: 'Nutraj Roasted Salted Almonds', reason: 'Nutritious High Protein Snack', category: 'Snacks & Namkeen', icon: '🌰' },
    { name: 'Haldiram\'s Roasted Chana', reason: 'Crispy High Fiber Protein Snack', category: 'Snacks & Namkeen', icon: '🫘' },
  ],
};

export function findSubstitutes(itemName) {
  if (!itemName) return [];
  const normalized = itemName.toLowerCase().trim();
  
  if (SUBSTITUTE_MAP[normalized]) {
    return SUBSTITUTE_MAP[normalized];
  }
  
  for (const [key, subs] of Object.entries(SUBSTITUTE_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return subs;
    }
  }
  
  return [];
}

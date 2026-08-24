import { CATEGORIES } from './constants.js';

export const SEASONS = {
  SPRING: 'Spring / Basant',
  SUMMER: 'Summer / Grishma',
  AUTUMN: 'Monsoon / Autumn',
  WINTER: 'Winter / Shishir',
};

export const SEASONAL_ITEMS = {
  [SEASONS.WINTER]: [
    { name: 'Fresh Green Peas / Matar', category: CATEGORIES.PRODUCE, reason: 'Sweet winter season harvest', discount: '₹40 / kg', icon: '🫛' },
    { name: 'Fresh Red Gajar / Carrots', category: CATEGORIES.PRODUCE, reason: 'Winter Gajar ka Halwa special', discount: '₹35 / kg', icon: '🥕' },
    { name: 'Sarson ka Saag & Bathua', category: CATEGORIES.PRODUCE, reason: 'Traditional winter Punjabi greens', discount: '₹30 / bunch', icon: '🥬' },
    { name: 'Nagpur Fresh Sweet Oranges', category: CATEGORIES.PRODUCE, reason: 'Peak winter citrus harvest', discount: '₹60 / kg', icon: '🍊' },
    { name: 'Organic Jaggery / Gur', category: CATEGORIES.PANTRY, reason: 'Winter body warmer & natural sweet', discount: '₹65 / pack', icon: '🪵' },
    { name: 'Ghee Roasted Chikki / Gajak', category: CATEGORIES.SNACKS, reason: 'Winter crunch staple', discount: 'Special Price', icon: '🥜' },
  ],
  [SEASONS.SPRING]: [
    { name: 'Fresh Strawberries (Mahabaleshwar)', category: CATEGORIES.PRODUCE, reason: 'Sweet Spring berry harvest', discount: '₹80 / box', icon: '🍓' },
    { name: 'Fresh Green Beans / French Beans', category: CATEGORIES.PRODUCE, reason: 'Crisp spring harvest', discount: '₹40 / kg', icon: '🌱' },
    { name: 'Organic Raw Turmeric / Kacchi Haldi', category: CATEGORIES.PRODUCE, reason: 'Immunity & spring detox', discount: '₹50 / 250g', icon: '🌿' },
    { name: 'Tender Coconut / Nariyal Pani', category: CATEGORIES.BEVERAGES, reason: 'Spring hydration booster', discount: '₹55 each', icon: '🥥' },
    { name: 'Bhakharwadi & Gujiya Sweets', category: CATEGORIES.SNACKS, reason: 'Holi festival seasonal special', discount: 'Fresh Daily', icon: '🥟' },
    { name: 'Fresh Pudina / Mint Leaves', category: CATEGORIES.PRODUCE, reason: 'Aromatic spring cooling', discount: '₹15 / bunch', icon: '🍃' },
  ],
  [SEASONS.SUMMER]: [
    { name: 'Alphonso Mangoes / Hapus Aam', category: CATEGORIES.PRODUCE, reason: 'King of Fruits summer season', discount: 'Best Seasonal', icon: '🥭' },
    { name: 'Sweet Striped Watermelon', category: CATEGORIES.PRODUCE, reason: 'Summer hydration favorite', discount: '₹25 / kg', icon: '🍉' },
    { name: 'Raw Mango / Kairi (for Aam Panna)', category: CATEGORIES.PRODUCE, reason: 'Summer heat protection', discount: '₹40 / kg', icon: '🥭' },
    { name: 'Fresh Cucumbers / Kheera', category: CATEGORIES.PRODUCE, reason: 'Cooling summer salad essential', discount: '₹30 / kg', icon: '🥒' },
    { name: 'Rooh Afza Herbal Sharbat', category: CATEGORIES.BEVERAGES, reason: 'Classic summer cooler', discount: '₹170 / bottle', icon: '🥤' },
    { name: 'Amul Matka Kulfi / Ice Cream', category: CATEGORIES.FROZEN, reason: 'Summer heat buster', discount: '₹45 each', icon: '🍦' },
  ],
  [SEASONS.AUTUMN]: [
    { name: 'Shimla Fresh Apples', category: CATEGORIES.PRODUCE, reason: 'Fresh orchard autumn crop', discount: '₹120 / kg', icon: '🍎' },
    { name: 'Organic Corn / Bhutta', category: CATEGORIES.PRODUCE, reason: 'Monsoon & autumn roasted treat', discount: '₹25 / pc', icon: '🌽' },
    { name: 'Fresh Guavas / Amrood', category: CATEGORIES.PRODUCE, reason: 'Pink & sweet autumn harvest', discount: '₹60 / kg', icon: '🍈' },
    { name: 'Wagh Bakri Masala Chai Leaf', category: CATEGORIES.BEVERAGES, reason: 'Monsoon warm chai essential', discount: '₹150 / 250g', icon: '☕' },
    { name: 'Besan / Gram Flour', category: CATEGORIES.PANTRY, reason: 'Crispy monsoon pakora season', discount: '₹85 / kg', icon: '🥣' },
    { name: 'Pomegranate / Anar (1 kg)', category: CATEGORIES.PRODUCE, reason: 'Ruby red fresh autumn fruit', discount: '₹140 / kg', icon: '🫐' },
  ],
};

export function getCurrentSeason() {
  const month = new Date().getMonth();
  if (month === 11 || month === 0 || month === 1) return SEASONS.WINTER;
  if (month >= 2 && month <= 4) return SEASONS.SPRING;
  if (month >= 5 && month <= 7) return SEASONS.SUMMER;
  return SEASONS.AUTUMN;
}

export function getSeasonalRecommendations(season = getCurrentSeason()) {
  return SEASONAL_ITEMS[season] || SEASONAL_ITEMS[SEASONS.SUMMER];
}

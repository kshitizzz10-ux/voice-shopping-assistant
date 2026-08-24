import { CATEGORIES } from './constants.js';

export const SEASONS = {
  SPRING: 'Spring',
  SUMMER: 'Summer',
  AUTUMN: 'Autumn / Fall',
  WINTER: 'Winter',
};

export const SEASONAL_ITEMS = {
  [SEASONS.WINTER]: [
    { name: 'Hot Cocoa Mix', category: CATEGORIES.BEVERAGES, reason: 'Cozy winter warmer', discount: '15% Off', icon: '☕' },
    { name: 'Butternut Squash Soup', category: CATEGORIES.PANTRY, reason: 'Winter seasonal comfort', discount: 'Special Price', icon: '🍲' },
    { name: 'Organic Navel Oranges', category: CATEGORIES.PRODUCE, reason: 'Peak winter citrus harvest', discount: '$0.89 / lb', icon: '🍊' },
    { name: 'Fresh Cranberries', category: CATEGORIES.PRODUCE, reason: 'Holiday season staple', discount: '20% Off', icon: '🍒' },
    { name: 'Organic Cinnamon Sticks', category: CATEGORIES.PANTRY, reason: 'Winter baking & cider spice', discount: 'Seasonal', icon: '🪵' },
    { name: 'Eggnog Creamer', category: CATEGORIES.DAIRY_EGGS, reason: 'Holiday seasonal treat', discount: 'Limited Edition', icon: '🥛' },
  ],
  [SEASONS.SPRING]: [
    { name: 'Fresh Asparagus', category: CATEGORIES.PRODUCE, reason: 'Fresh spring harvest', discount: 'Peak Freshness', icon: '🌱' },
    { name: 'Organic Strawberries', category: CATEGORIES.PRODUCE, reason: 'Early season sweet berries', discount: '$2.99 / pack', icon: '🍓' },
    { name: 'Fresh Artichokes', category: CATEGORIES.PRODUCE, reason: 'Spring specialty vegetable', discount: 'Seasonal', icon: '🌿' },
    { name: 'Sweet Peas', category: CATEGORIES.PRODUCE, reason: 'Crisp spring harvest', discount: '15% Off', icon: '🫛' },
    { name: 'Brioche Hot Cross Buns', category: CATEGORIES.BAKERY, reason: 'Spring bakery favorite', discount: 'Fresh Daily', icon: '🍞' },
    { name: 'Organic Mint Leaves', category: CATEGORIES.PRODUCE, reason: 'Refreshing spring herbs', discount: 'Peak Flavor', icon: '🍃' },
  ],
  [SEASONS.SUMMER]: [
    { name: 'Seedless Watermelon', category: CATEGORIES.PRODUCE, reason: 'Summer hydration favorite', discount: '$3.99 each', icon: '🍉' },
    { name: 'Sweet Yellow Corn on the Cob', category: CATEGORIES.PRODUCE, reason: 'BBQ & grilling essential', discount: '4 for $2', icon: '🌽' },
    { name: 'Fresh Peaches & Nectarines', category: CATEGORIES.PRODUCE, reason: 'Peak stone fruit season', discount: 'Sweet & Juicy', icon: '🍑' },
    { name: 'Brioche Burger Buns', category: CATEGORIES.BAKERY, reason: 'Summer cookout favorite', discount: '20% Off', icon: '🍔' },
    { name: 'Mineral Sunscreen SPF 50', category: CATEGORIES.PERSONAL_CARE, reason: 'Sun protection essential', discount: 'Top Summer Pick', icon: '☀️' },
    { name: 'Sparkling Lemonade', category: CATEGORIES.BEVERAGES, reason: 'Cool summer refresher', discount: 'Buy 2 Get 1', icon: '🍋' },
  ],
  [SEASONS.AUTUMN]: [
    { name: 'Honeycrisp Apples', category: CATEGORIES.PRODUCE, reason: 'Autumn orchard harvest', discount: '$1.99 / lb', icon: '🍎' },
    { name: 'Organic Pie Pumpkin', category: CATEGORIES.PRODUCE, reason: 'Fall baking & soups', discount: 'Seasonal', icon: '🎃' },
    { name: 'Apple Cider (Fresh Pressed)', category: CATEGORIES.BEVERAGES, reason: 'Autumn harvest special', discount: 'Local Fresh', icon: '🧃' },
    { name: 'Pumpkin Spice Latte Mix', category: CATEGORIES.BEVERAGES, reason: 'Fall favorite seasonal drink', discount: 'Popular', icon: '☕' },
    { name: 'Sweet Potatoes', category: CATEGORIES.PRODUCE, reason: 'Harvest root vegetable', discount: '$0.79 / lb', icon: '🍠' },
    { name: 'Pure Maple Syrup', category: CATEGORIES.PANTRY, reason: 'Fall pancake season', discount: '10% Off', icon: '🍁' },
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

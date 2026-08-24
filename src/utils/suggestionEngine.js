import { getSeasonalRecommendations } from './seasonalData.js';
import { findSubstitutes } from './substituteMap.js';
import { classifyItemCategory } from './categoryClassifier.js';

export function generateSmartSuggestions({ currentItems = [], purchaseHistory = {} }) {
  const currentItemNames = new Set(currentItems.map((i) => i.name.toLowerCase().trim()));

  const historySuggestions = Object.entries(purchaseHistory)
    .filter(([name]) => !currentItemNames.has(name.toLowerCase()))
    .map(([name, data]) => {
      const daysSinceLast = (Date.now() - data.lastAdded) / (1000 * 60 * 60 * 24);
      let urgencyReason = 'Frequently purchased';
      
      if (data.count >= 3 && daysSinceLast > 3) {
        urgencyReason = `Running low? (Bought ${data.count}x before)`;
      } else if (data.count >= 2) {
        urgencyReason = `Regular staple (${data.count} purchases)`;
      }

      return {
        name,
        category: data.category || classifyItemCategory(name),
        reason: urgencyReason,
        frequency: data.count,
        icon: '🔄',
        type: 'history',
      };
    })
    .sort((a, b) => b.frequency - a.frequency)
    .slice(0, 6);

  const fallbackHistory = [
    { name: 'Whole Milk', category: 'Dairy & Eggs', reason: 'Common daily staple', frequency: 5, icon: '🥛', type: 'history' },
    { name: 'Organic Bananas', category: 'Produce', reason: 'Running low on fruit', frequency: 4, icon: '🍌', type: 'history' },
    { name: 'Whole Wheat Bread', category: 'Bakery', reason: 'Weekly household essential', frequency: 4, icon: '🍞', type: 'history' },
    { name: 'Large Grade A Eggs', category: 'Dairy & Eggs', reason: 'Breakfast staple', frequency: 3, icon: '🥚', type: 'history' },
  ].filter((item) => !currentItemNames.has(item.name.toLowerCase()));

  const finalHistorySuggestions = historySuggestions.length > 0 ? historySuggestions : fallbackHistory;

  const seasonalRecommendations = getSeasonalRecommendations()
    .filter((item) => !currentItemNames.has(item.name.toLowerCase()))
    .map((item) => ({
      ...item,
      type: 'seasonal',
    }))
    .slice(0, 6);

  const activeSubstitutes = [];
  currentItems.forEach((item) => {
    const subs = findSubstitutes(item.name);
    subs.forEach((sub) => {
      if (!currentItemNames.has(sub.name.toLowerCase()) && !activeSubstitutes.some((s) => s.name === sub.name)) {
        activeSubstitutes.push({
          ...sub,
          originalItem: item.name,
          type: 'substitute',
        });
      }
    });
  });

  return {
    historySuggestions: finalHistorySuggestions,
    seasonalSuggestions: seasonalRecommendations,
    substituteSuggestions: activeSubstitutes.slice(0, 6),
  };
}

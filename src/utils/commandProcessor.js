import { parseVoiceCommand } from './nlpParser.js';
import { getDictionary } from './multilingual.js';
import { findBestCatalogMatch } from './productDatabase.js';

export function processVoiceCommand(transcript, langCode, shoppingActions, currentCart = []) {
  const parsed = parseVoiceCommand(transcript, langCode);
  const dict = getDictionary(langCode);

  switch (parsed.intent) {
    case 'QUERY_CART': {
      const count = currentCart.length;
      if (count === 0) {
        return {
          success: true,
          intent: 'QUERY_CART',
          feedback: 'Your shopping cart is currently empty. You can say "Add 2 packets Amul milk" to get started!',
        };
      }

      const totalCost = currentCart.reduce((sum, item) => sum + (item.price ? item.price * (item.quantity || 1) : 0), 0);
      const itemSummaries = currentCart.slice(0, 4).map((i) => `${i.quantity} ${i.name}`).join(', ');
      const extraText = count > 4 ? ` and ${count - 4} more items` : '';

      return {
        success: true,
        intent: 'QUERY_CART',
        feedback: `You have ${count} items in your cart (${itemSummaries}${extraText}). Total is ₹${totalCost.toFixed(0)}.`,
      };
    }

    case 'QUERY_RECOMMENDATIONS': {
      return {
        success: true,
        intent: 'QUERY_RECOMMENDATIONS',
        feedback: 'Fresh seasonal deals today: Alphonso Mangoes, Sweet Watermelon, and Winter Green Peas! Check the seasonal tab on your screen.',
      };
    }

    case 'ADD_ITEM': {
      const addedDescriptions = [];
      const unavailableItems = [];

      parsed.items.forEach((item) => {
        const matchResult = findBestCatalogMatch(item.name);

        if (matchResult && matchResult.found) {
          const matchedProduct = matchResult.product;
          shoppingActions.addItem({
            name: matchedProduct.name,
            quantity: item.quantity || 1,
            unit: item.unit && item.unit !== 'items' ? item.unit : matchedProduct.unit,
            brand: matchedProduct.brand,
            price: matchedProduct.price,
            category: matchedProduct.category,
          });
          addedDescriptions.push(`${item.quantity > 1 ? item.quantity + ' ' : ''}${matchedProduct.name}`);
        } else {
          // If not in catalog, check fallback
          unavailableItems.push(item.name);
          if (shoppingActions.setUnavailableQuery) {
            shoppingActions.setUnavailableQuery(item.name);
          }
        }
      });

      if (unavailableItems.length > 0 && addedDescriptions.length === 0) {
        return {
          success: false,
          intent: 'UNAVAILABLE_ITEM',
          feedback: `Sorry, "${unavailableItems.join(', ')}" is not available in our store. Please choose from our available store items below!`,
          data: { unavailableItems },
        };
      }

      const addedText = addedDescriptions.length === 1
        ? `Added ${addedDescriptions[0]} to your shopping list.`
        : `Added ${addedDescriptions.join(' and ')} to your list.`;

      const warningText = unavailableItems.length > 0
        ? ` Note: "${unavailableItems.join(', ')}" is not in stock.`
        : '';

      return {
        success: true,
        intent: 'ADD_ITEM',
        feedback: `${addedText}${warningText}`,
        data: parsed.items,
      };
    }

    case 'REMOVE_ITEM': {
      const removed = shoppingActions.removeItemByName(parsed.itemName);
      if (removed) {
        return {
          success: true,
          intent: 'REMOVE_ITEM',
          feedback: `Removed "${parsed.itemName}" from your shopping list.`,
          data: { itemName: parsed.itemName },
        };
      } else {
        return {
          success: false,
          intent: 'REMOVE_ITEM',
          feedback: `Could not find "${parsed.itemName}" in your shopping list.`,
          data: { itemName: parsed.itemName },
        };
      }
    }

    case 'MODIFY_QUANTITY': {
      const updated = shoppingActions.updateItemQuantityByName(parsed.targetItem, parsed.quantity);
      if (updated) {
        return {
          success: true,
          intent: 'MODIFY_QUANTITY',
          feedback: `Updated "${parsed.targetItem}" quantity to ${parsed.quantity}.`,
          data: { targetItem: parsed.targetItem, quantity: parsed.quantity },
        };
      } else {
        return {
          success: false,
          intent: 'MODIFY_QUANTITY',
          feedback: `Could not find "${parsed.targetItem}" on your list to update.`,
          data: { targetItem: parsed.targetItem },
        };
      }
    }

    case 'CLEAR_LIST': {
      shoppingActions.clearList();
      return {
        success: true,
        intent: 'CLEAR_LIST',
        feedback: 'Cleared all items from your shopping list.',
      };
    }

    case 'CLEAR_CHECKED': {
      shoppingActions.clearChecked();
      return {
        success: true,
        intent: 'CLEAR_CHECKED',
        feedback: 'Cleared all completed items.',
      };
    }

    case 'SEARCH_ITEMS': {
      shoppingActions.triggerSearch({
        query: parsed.query,
        minPrice: parsed.minPrice,
        maxPrice: parsed.maxPrice,
        organic: parsed.organic,
      });

      return {
        success: true,
        intent: 'SEARCH_ITEMS',
        feedback: `Showing store items for "${parsed.query}"${parsed.maxPrice < 1000 ? ' under ₹' + parsed.maxPrice : ''}.`,
        data: parsed,
      };
    }

    case 'UNKNOWN':
    default: {
      return {
        success: false,
        intent: 'UNKNOWN',
        feedback: 'I didn\'t quite catch that. Try saying "Bread add karo", "Add fish", or "Find milk under 60 rupees".',
        raw: transcript,
      };
    }
  }
}

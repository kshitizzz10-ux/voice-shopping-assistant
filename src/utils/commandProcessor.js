import { parseVoiceCommand } from './nlpParser.js';
import { getDictionary } from './multilingual.js';

export function processVoiceCommand(transcript, langCode, shoppingActions) {
  const parsed = parseVoiceCommand(transcript, langCode);
  const dict = getDictionary(langCode);

  switch (parsed.intent) {
    case 'ADD_ITEM': {
      const addedNames = [];
      parsed.items.forEach((item) => {
        shoppingActions.addItem({
          name: item.name,
          quantity: item.quantity || 1,
          unit: item.unit || 'items',
        });
        addedNames.push(`${item.quantity > 1 ? item.quantity + ' ' : ''}${item.name}`);
      });

      const speechMessage = parsed.items.length === 1
        ? dict.messages.added(parsed.items[0].quantity, parsed.items[0].unit, parsed.items[0].name)
        : `Added ${addedNames.join(' and ')} to your list.`;

      return {
        success: true,
        intent: 'ADD_ITEM',
        feedback: speechMessage,
        data: parsed.items,
      };
    }

    case 'REMOVE_ITEM': {
      const removed = shoppingActions.removeItemByName(parsed.itemName);
      if (removed) {
        return {
          success: true,
          intent: 'REMOVE_ITEM',
          feedback: dict.messages.removed(parsed.itemName),
          data: { itemName: parsed.itemName },
        };
      } else {
        return {
          success: false,
          intent: 'REMOVE_ITEM',
          feedback: dict.messages.notFound(parsed.itemName),
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
          feedback: dict.messages.updated(parsed.targetItem, parsed.quantity),
          data: { targetItem: parsed.targetItem, quantity: parsed.quantity },
        };
      } else {
        return {
          success: false,
          intent: 'MODIFY_QUANTITY',
          feedback: dict.messages.notFound(parsed.targetItem),
          data: { targetItem: parsed.targetItem },
        };
      }
    }

    case 'CLEAR_LIST': {
      shoppingActions.clearList();
      return {
        success: true,
        intent: 'CLEAR_LIST',
        feedback: dict.messages.cleared(),
      };
    }

    case 'CLEAR_CHECKED': {
      shoppingActions.clearChecked();
      return {
        success: true,
        intent: 'CLEAR_CHECKED',
        feedback: dict.messages.clearedChecked(),
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
        feedback: `Searching for ${parsed.query}${parsed.maxPrice < 100 ? ' under $' + parsed.maxPrice : ''}...`,
        data: parsed,
      };
    }

    case 'UNKNOWN':
    default: {
      return {
        success: false,
        intent: 'UNKNOWN',
        feedback: dict.messages.notUnderstood(),
        raw: transcript,
      };
    }
  }
}

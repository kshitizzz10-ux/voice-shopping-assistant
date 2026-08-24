import React, { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { classifyItemCategory } from '../utils/categoryClassifier';
import { generateSmartSuggestions } from '../utils/suggestionEngine';
import { STORAGE_KEYS, CATEGORIES } from '../utils/constants';
import confetti from 'canvas-confetti';

const ShoppingContext = createContext(null);

const initialSearchState = {
  isOpen: false,
  query: '',
  minPrice: 0,
  maxPrice: 50,
  category: 'All',
  organicOnly: false,
};

const DEFAULT_SAMPLE_ITEMS = [
  { id: '1', name: 'Whole Milk', quantity: 2, unit: 'bottles', category: CATEGORIES.DAIRY_EGGS, checked: false, price: 4.89, addedAt: Date.now() - 3600000 },
  { id: '2', name: 'Organic Honeycrisp Apples', quantity: 3, unit: 'lbs', category: CATEGORIES.PRODUCE, checked: false, price: 4.99, addedAt: Date.now() - 7200000 },
  { id: '3', name: 'Whole Wheat Sandwich Bread', quantity: 1, unit: 'loaves', category: CATEGORIES.BAKERY, checked: true, price: 3.49, addedAt: Date.now() - 10800000 },
];

export function ShoppingProvider({ children }) {
  const [storedItems, setStoredItems] = useLocalStorage(STORAGE_KEYS.SHOPPING_LIST, DEFAULT_SAMPLE_ITEMS);
  const [purchaseHistory, setPurchaseHistory] = useLocalStorage(STORAGE_KEYS.PURCHASE_HISTORY, {
    'Whole Milk': { count: 6, lastAdded: Date.now() - 86400000 * 4, category: CATEGORIES.DAIRY_EGGS },
    'Organic Bananas': { count: 5, lastAdded: Date.now() - 86400000 * 6, category: CATEGORIES.PRODUCE },
    'Large Grade A Eggs': { count: 4, lastAdded: Date.now() - 86400000 * 5, category: CATEGORIES.DAIRY_EGGS },
    'Artisan Sourdough Loaf': { count: 3, lastAdded: Date.now() - 86400000 * 7, category: CATEGORIES.BAKERY },
  });

  const [language, setLanguage] = useLocalStorage('voicecart_lang', 'en-US');
  const [searchState, setSearchState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initialSearchState
  );

  const [toasts, setToasts] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state.slice(-4), { id: Date.now() + Math.random(), ...action.payload }];
      case 'REMOVE':
        return state.filter((t) => t.id !== action.id);
      default:
        return state;
    }
  }, []);

  const { speak, stop: stopSpeaking, voiceFeedbackEnabled, toggleVoiceFeedback } = useSpeechSynthesis();

  const addToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts({ type: 'ADD', payload: { id, message, type } });
    setTimeout(() => {
      setToasts({ type: 'REMOVE', id });
    }, 4000);
  }, []);

  // Update purchase history helper
  const recordPurchase = useCallback((name, category) => {
    setPurchaseHistory((prev) => {
      const existing = prev[name] || { count: 0, lastAdded: 0, category };
      return {
        ...prev,
        [name]: {
          count: existing.count + 1,
          lastAdded: Date.now(),
          category: category || existing.category || classifyItemCategory(name),
        },
      };
    });
  }, [setPurchaseHistory]);

  // Add Item
  const addItem = useCallback(({ name, quantity = 1, unit = 'items', brand = '', price = null, category = null }) => {
    if (!name || !name.trim()) return;
    const cleanName = name.trim();
    const resolvedCategory = category || classifyItemCategory(cleanName);

    setStoredItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.name.toLowerCase() === cleanName.toLowerCase());
      if (existingIndex > -1) {
        // Increase quantity of existing item
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      const newItem = {
        id: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        name: cleanName,
        quantity: Math.max(1, quantity),
        unit: unit || 'items',
        brand: brand || '',
        price: price || null,
        category: resolvedCategory,
        checked: false,
        addedAt: Date.now(),
      };

      return [newItem, ...prev];
    });

    recordPurchase(cleanName, resolvedCategory);
    addToast(`Added "${cleanName}" (${quantity} ${unit})`, 'success');
  }, [addToast, recordPurchase, setStoredItems]);

  // Remove Item by ID
  const removeItem = useCallback((id) => {
    let removedName = '';
    setStoredItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) removedName = item.name;
      return prev.filter((i) => i.id !== id);
    });
    if (removedName) {
      addToast(`Removed "${removedName}" from list`, 'info');
    }
  }, [addToast, setStoredItems]);

  // Remove Item by Name (for voice commands)
  const removeItemByName = useCallback((name) => {
    if (!name) return false;
    const clean = name.toLowerCase().trim();
    let found = false;

    setStoredItems((prev) => {
      const matchIndex = prev.findIndex((i) => i.name.toLowerCase().includes(clean) || clean.includes(i.name.toLowerCase()));
      if (matchIndex > -1) {
        found = true;
        const item = prev[matchIndex];
        addToast(`Removed "${item.name}" from list`, 'info');
        return prev.filter((_, idx) => idx !== matchIndex);
      }
      return prev;
    });

    return found;
  }, [addToast, setStoredItems]);

  // Update Item
  const updateItem = useCallback((id, changes) => {
    setStoredItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, ...changes } : i))
    );
  }, [setStoredItems]);

  // Update Item Quantity by ID
  const updateItemQuantity = useCallback((id, newQty) => {
    if (newQty <= 0) {
      removeItem(id);
      return;
    }
    setStoredItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
    );
  }, [removeItem, setStoredItems]);

  // Update Item Quantity by Name (for voice commands)
  const updateItemQuantityByName = useCallback((name, newQty) => {
    if (!name) return false;
    const clean = name.toLowerCase().trim();
    let found = false;

    setStoredItems((prev) => {
      const matchIndex = prev.findIndex((i) => i.name.toLowerCase().includes(clean) || clean.includes(i.name.toLowerCase()));
      if (matchIndex > -1) {
        found = true;
        const item = prev[matchIndex];
        const updated = [...prev];
        if (newQty <= 0) {
          addToast(`Removed "${item.name}"`, 'info');
          return prev.filter((_, idx) => idx !== matchIndex);
        }
        updated[matchIndex] = { ...item, quantity: newQty };
        addToast(`Updated "${item.name}" to ${newQty}`, 'success');
        return updated;
      }
      return prev;
    });

    return found;
  }, [addToast, setStoredItems]);

  // Toggle Item Checked
  const toggleItemChecked = useCallback((id) => {
    setStoredItems((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const nextChecked = !i.checked;
          if (nextChecked) {
            try {
              confetti({
                particleCount: 25,
                spread: 45,
                origin: { y: 0.8 },
                colors: ['#10b981', '#34d399', '#6ee7b7'],
              });
            } catch {
              // ignore
            }
          }
          return { ...i, checked: nextChecked };
        }
        return i;
      })
    );
  }, [setStoredItems]);

  // Clear Entire List
  const clearList = useCallback(() => {
    setStoredItems([]);
    addToast('Cleared shopping list', 'info');
  }, [addToast, setStoredItems]);

  // Clear Checked Items
  const clearChecked = useCallback(() => {
    setStoredItems((prev) => prev.filter((i) => !i.checked));
    addToast('Cleared all checked items', 'info');
  }, [addToast, setStoredItems]);

  // Search Triggers
  const triggerSearch = useCallback((params) => {
    setSearchState({
      isOpen: true,
      query: params.query || '',
      minPrice: params.minPrice !== undefined ? params.minPrice : 0,
      maxPrice: params.maxPrice !== undefined ? params.maxPrice : 50,
      organicOnly: Boolean(params.organic),
    });
  }, []);

  const closeSearch = useCallback(() => {
    setSearchState({ isOpen: false });
  }, []);

  // Suggestions Calculation
  const suggestions = useMemo(() => {
    return generateSmartSuggestions({
      currentItems: storedItems,
      purchaseHistory,
    });
  }, [storedItems, purchaseHistory]);

  const value = {
    items: storedItems,
    addItem,
    removeItem,
    removeItemByName,
    updateItem,
    updateItemQuantity,
    updateItemQuantityByName,
    toggleItemChecked,
    clearList,
    clearChecked,
    language,
    setLanguage,
    searchState,
    setSearchState,
    triggerSearch,
    closeSearch,
    suggestions,
    toasts,
    addToast,
    speak,
    stopSpeaking,
    voiceFeedbackEnabled,
    toggleVoiceFeedback,
  };

  return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
}

export function useShopping() {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShopping must be used within a ShoppingProvider');
  }
  return context;
}

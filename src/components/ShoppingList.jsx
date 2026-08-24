import React, { useState, useMemo } from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { CategoryGroup } from './CategoryGroup.jsx';
import { COMMON_UNITS, CURRENCY } from '../utils/constants.js';
import { Plus, Trash2, CheckCheck, Sparkles, ShoppingBag, Store } from 'lucide-react';

export function ShoppingList({ onSelectSubstitute, onOpenSearch, onOpenHelp, onVoiceCommand }) {
  const { items, addItem, clearList, clearChecked, currency = CURRENCY } = useShopping();
  const [quickName, setQuickName] = useState('');
  const [quickQty, setQuickQty] = useState(1);
  const [quickUnit, setQuickUnit] = useState('packets');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const quickShortcuts = [
    'Bread add karo',
    'Add 2 packets Amul milk',
    'Buy 1 dozen bananas',
    'Find toothpaste under ₹60',
    'Add fish',
  ];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    if (!quickName.trim()) return;
    addItem({
      name: quickName.trim(),
      quantity: parseFloat(quickQty) || 1,
      unit: quickUnit,
    });
    setQuickName('');
    setQuickQty(1);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (filterType === 'active' && item.checked) return false;
      if (filterType === 'completed' && !item.checked) return false;
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        return matchesName || matchesCategory;
      }
      return true;
    });
  }, [items, filterType, searchTerm]);

  const groupedByCategory = useMemo(() => {
    const groups = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const totalEstimatedCost = items.reduce((acc, curr) => {
    if (curr.price) {
      return acc + curr.price * (curr.quantity || 1);
    }
    return acc;
  }, 0);

  const completedCount = items.filter((i) => i.checked).length;

  return (
    <div className="space-y-4">
      {/* Quick Add Bar & List Actions */}
      <div className="grocery-panel rounded-3xl border border-slate-200 p-4 sm:p-5 space-y-3.5">
        {/* Quick Add Form */}
        <form onSubmit={handleQuickAdd} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={quickName}
              onChange={(e) => setQuickName(e.target.value)}
              placeholder='Type grocery item (e.g., Bread, Amul milk, Atta) or speak...'
              className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              max="99"
              value={quickQty}
              onChange={(e) => setQuickQty(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="w-16 py-3 px-2 text-center bg-slate-50 border border-slate-200 rounded-2xl text-emerald-700 text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              title="Quantity"
            />

            <select
              value={quickUnit}
              onChange={(e) => setQuickUnit(e.target.value)}
              className="py-3 px-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              {COMMON_UNITS.slice(0, 9).map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={!quickName.trim()}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-2xl font-bold text-sm shadow-sm transition-all active:scale-95 flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add</span>
            </button>
          </div>
        </form>

        {/* Quick Shortcut Voice Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">Try voice:</span>
          {quickShortcuts.map((sc) => (
            <button
              key={sc}
              type="button"
              onClick={() => {
                if (onVoiceCommand) {
                  onVoiceCommand(sc);
                } else {
                  addItem({ name: sc.replace(/^(Add|Buy)\s+/i, '').replace(/\s+add\s+karo/i, '') });
                }
              }}
              className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-800 whitespace-nowrap font-medium transition-colors"
            >
              "{sc}"
            </button>
          ))}
        </div>

        {/* Filter & Summary Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {['all', 'active', 'completed'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-lg font-bold capitalize transition-all ${
                  filterType === type
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type} {type === 'all' && `(${items.length})`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {completedCount > 0 && (
              <button
                type="button"
                onClick={clearChecked}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors font-semibold"
              >
                <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Clear Checked ({completedCount})</span>
              </button>
            )}

            {items.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your shopping list?')) {
                    clearList();
                  }
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear List</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grouped Category Items List */}
      {items.length === 0 ? (
        <div className="grocery-panel rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-3xl flex items-center justify-center mx-auto shadow-xs">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-lg font-bold text-slate-900">Your shopping list is empty</h3>
            <p className="text-sm text-slate-500">
              Tap the green mic button below to say <span className="font-bold text-emerald-700">"Bread add karo"</span> or click any product from the available store aisles above!
            </p>
          </div>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="grocery-panel rounded-3xl border border-slate-200 p-8 text-center text-slate-500 text-sm">
          No items match your filter.
        </div>
      ) : (
        <div className="space-y-3.5">
          {Object.entries(groupedByCategory).map(([category, catItems]) => (
            <CategoryGroup
              key={category}
              category={category}
              items={catItems}
              onSelectSubstitute={onSelectSubstitute}
            />
          ))}

          {/* Cost Estimate Bar */}
          {totalEstimatedCost > 0 && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-sm font-semibold text-emerald-950">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Estimated Shopping Cart Total:</span>
              </div>
              <span className="text-lg font-mono font-extrabold text-emerald-800">
                {currency}{totalEstimatedCost.toFixed(0)}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

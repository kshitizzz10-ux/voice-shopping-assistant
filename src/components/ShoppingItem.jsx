import React from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { QuantityControl } from './QuantityControl.jsx';
import { CATEGORY_METADATA, CURRENCY } from '../utils/constants.js';
import { findSubstitutes } from '../utils/substituteMap.js';
import { Trash2, Check, Sparkles } from 'lucide-react';

export function ShoppingItem({ item, onSelectSubstitute }) {
  const { toggleItemChecked, updateItemQuantity, removeItem, currency = CURRENCY } = useShopping();

  const meta = CATEGORY_METADATA[item.category] || CATEGORY_METADATA['Other Items'];
  const substitutes = findSubstitutes(item.name);

  return (
    <div
      className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all duration-200 border ${
        item.checked
          ? 'bg-slate-50/80 border-slate-200 opacity-60'
          : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-xs'
      }`}
    >
      {/* Left section: Checkbox & Name */}
      <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
        <button
          type="button"
          onClick={() => toggleItemChecked(item.id)}
          className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0 border ${
            item.checked
              ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
              : 'border-slate-300 hover:border-emerald-500 bg-white text-transparent'
          }`}
          aria-label={item.checked ? 'Mark uncompleted' : 'Mark completed'}
        >
          {item.checked && <Check className="w-4 h-4 stroke-[3]" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-sm sm:text-base font-bold transition-all truncate ${
                item.checked ? 'line-through text-slate-400 font-medium' : 'text-slate-900'
              }`}
            >
              {item.name}
            </span>

            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border bg-slate-50 text-slate-600 border-slate-200`}
            >
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5 font-medium">
            {item.brand && <span className="font-bold text-emerald-700">{item.brand}</span>}
            {item.brand && <span>•</span>}
            <span className="font-mono text-slate-700">
              {item.quantity} {item.unit}
            </span>
            {item.price && (
              <>
                <span>•</span>
                <span className="font-mono font-bold text-slate-900">
                  {currency}{(item.price * item.quantity).toFixed(0)} ({currency}{item.price}/ea)
                </span>
              </>
            )}
          </div>

          {/* Substitutes Quick Tip */}
          {!item.checked && substitutes.length > 0 && onSelectSubstitute && (
            <button
              type="button"
              onClick={() => onSelectSubstitute(item.name)}
              className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-lg transition-colors"
            >
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>{substitutes.length} healthy swaps available</span>
            </button>
          )}
        </div>
      </div>

      {/* Right section: Quantity controls & Delete */}
      <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        <QuantityControl
          quantity={item.quantity}
          unit={item.unit}
          onIncrease={() => updateItemQuantity(item.id, item.quantity + 1)}
          onDecrease={() => updateItemQuantity(item.id, item.quantity - 1)}
        />

        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 active:scale-95 transition-all"
          title="Remove item"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

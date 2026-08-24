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
          ? 'bg-slate-900/40 border-slate-800/60 opacity-60'
          : 'glass-card hover:border-emerald-500/40'
      }`}
    >
      {/* Left section: Checkbox & Name */}
      <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
        <button
          type="button"
          onClick={() => toggleItemChecked(item.id)}
          className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0 border ${
            item.checked
              ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'border-slate-700 hover:border-emerald-400 bg-slate-900/80 text-transparent'
          }`}
          aria-label={item.checked ? 'Mark uncompleted' : 'Mark completed'}
        >
          {item.checked && <Check className="w-4 h-4 stroke-[3]" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-base font-semibold transition-all truncate ${
                item.checked ? 'line-through text-slate-500 font-normal' : 'text-slate-100'
              }`}
            >
              {item.name}
            </span>

            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border bg-slate-900/80 text-slate-300 border-slate-700`}
            >
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
            {item.brand && <span className="font-medium text-emerald-400">{item.brand}</span>}
            {item.brand && <span>•</span>}
            <span className="font-mono text-slate-300">
              {item.quantity} {item.unit}
            </span>
            {item.price && (
              <>
                <span>•</span>
                <span className="font-mono font-bold text-emerald-300">
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
              className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 px-2.5 py-1 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{substitutes.length} healthy & dietary swaps available</span>
            </button>
          )}
        </div>
      </div>

      {/* Right section: Quantity controls & Delete */}
      <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
        <QuantityControl
          quantity={item.quantity}
          unit={item.unit}
          onIncrease={() => updateItemQuantity(item.id, item.quantity + 1)}
          onDecrease={() => updateItemQuantity(item.id, item.quantity - 1)}
        />

        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 active:scale-95 transition-all"
          title="Remove item"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

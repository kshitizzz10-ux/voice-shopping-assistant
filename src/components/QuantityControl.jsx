import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function QuantityControl({ quantity, unit, onIncrease, onDecrease, compact = false }) {
  return (
    <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-slate-800 shadow-inner">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDecrease();
        }}
        className={`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 active:scale-95 transition-all ${
          compact ? 'h-7 w-7' : 'h-8 w-8'
        } flex items-center justify-center`}
        title="Decrease quantity"
        aria-label="Decrease quantity"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>

      <span className={`px-2.5 font-bold font-mono text-emerald-400 text-center select-none ${compact ? 'text-xs min-w-[24px]' : 'text-sm min-w-[32px]'}`}>
        {quantity}
      </span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIncrease();
        }}
        className={`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 active:scale-95 transition-all ${
          compact ? 'h-7 w-7' : 'h-8 w-8'
        } flex items-center justify-center`}
        title="Increase quantity"
        aria-label="Increase quantity"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

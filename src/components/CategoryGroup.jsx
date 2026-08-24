import React, { useState } from 'react';
import { ShoppingItem } from './ShoppingItem.jsx';
import { CATEGORY_METADATA } from '../utils/constants.js';
import { ChevronDown, ChevronRight } from 'lucide-react';

export function CategoryGroup({ category, items, onSelectSubstitute }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const meta = CATEGORY_METADATA[category] || CATEGORY_METADATA['Other Items'];

  const completedCount = items.filter((i) => i.checked).length;
  const totalCount = items.length;

  return (
    <div className="grocery-card rounded-3xl border border-slate-200 shadow-xs overflow-hidden transition-all">
      {/* Category Header */}
      <button
        type="button"
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="w-full flex items-center justify-between p-3.5 sm:p-4 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left border-b border-slate-100"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold font-mono text-xs bg-emerald-100 text-emerald-800 border border-emerald-200">
            {totalCount}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span>{category}</span>
              {completedCount === totalCount && totalCount > 0 && (
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                  All Done
                </span>
              )}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {completedCount} of {totalCount} completed
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 transition-transform" />
          )}
        </div>
      </button>

      {/* Item List */}
      {!isCollapsed && (
        <div className="p-3 sm:p-4 space-y-2.5 bg-white">
          {items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onSelectSubstitute={onSelectSubstitute}
            />
          ))}
        </div>
      )}
    </div>
  );
}

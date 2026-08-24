import React, { useState } from 'react';
import { ShoppingItem } from './ShoppingItem.jsx';
import { CATEGORY_METADATA } from '../utils/constants.js';
import { ChevronDown, ChevronRight, Folder } from 'lucide-react';

export function CategoryGroup({ category, items, onSelectSubstitute }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const meta = CATEGORY_METADATA[category] || CATEGORY_METADATA['Other Items'];

  const completedCount = items.filter((i) => i.checked).length;
  const totalCount = items.length;

  return (
    <div className="glass-card rounded-3xl border border-slate-800/80 shadow-md overflow-hidden transition-all">
      {/* Category Header */}
      <button
        type="button"
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 bg-slate-900/70 hover:bg-slate-800/70 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold font-mono text-xs bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
            {totalCount}
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-sm sm:text-base flex items-center gap-2">
              <span>{category}</span>
              {completedCount === totalCount && totalCount > 0 && (
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-600/40 px-2 py-0.5 rounded-full">
                  All Done
                </span>
              )}
            </h3>
            <p className="text-xs text-slate-400">
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
        <div className="p-3 sm:p-4 space-y-2.5 bg-slate-950/40">
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

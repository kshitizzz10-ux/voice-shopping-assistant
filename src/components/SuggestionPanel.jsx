import React, { useState } from 'react';
import { useShopping } from '../context/ShoppingContext';
import { Sparkles, History, Sun, Repeat, Plus, Check } from 'lucide-react';

export function SuggestionPanel({ activeTab = 'history', onTabChange }) {
  const { suggestions, addItem, items } = useShopping();
  const [tab, setTab] = useState(activeTab);

  // Sync external tab switch (e.g. from substitute chip click)
  React.useEffect(() => {
    if (activeTab) {
      setTab(activeTab);
    }
  }, [activeTab]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    if (onTabChange) onTabChange(newTab);
  };

  const isItemInList = (name) => {
    return items.some((i) => i.name.toLowerCase() === name.toLowerCase());
  };

  return (
    <div className="bg-white/90 rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col h-full">
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base">Smart Suggestions</h2>
            <p className="text-xs text-slate-500">AI-powered recommendations</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/80 rounded-2xl my-3 text-xs font-semibold">
        <button
          type="button"
          onClick={() => handleTabChange('history')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all ${
            tab === 'history'
              ? 'bg-white text-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Frequent</span>
          <span className="sm:hidden">Low Stock</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabChange('seasonal')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all ${
            tab === 'seasonal'
              ? 'bg-white text-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sun className="w-3.5 h-3.5" />
          <span>Seasonal</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabChange('substitutes')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all ${
            tab === 'substitutes'
              ? 'bg-white text-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Repeat className="w-3.5 h-3.5" />
          <span>Swaps</span>
        </button>
      </div>

      {/* Tab Content List */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[420px]">
        {tab === 'history' && (
          <>
            {suggestions.historySuggestions.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm">
                No frequent items left to add. Great job!
              </div>
            ) : (
              suggestions.historySuggestions.map((item) => {
                const inList = isItemInList(item.name);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg">{item.icon || '🛍️'}</span>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-800 text-sm truncate">{item.name}</h4>
                        <p className="text-[11px] text-emerald-700 font-medium">{item.reason}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem({ name: item.name, category: item.category })}
                      disabled={inList}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                        inList
                          ? 'bg-slate-200 text-slate-500 cursor-default'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-95'
                      }`}
                    >
                      {inList ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })
            )}
          </>
        )}

        {tab === 'seasonal' && (
          <>
            {suggestions.seasonalSuggestions.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm">
                All seasonal items are currently in your list!
              </div>
            ) : (
              suggestions.seasonalSuggestions.map((item) => {
                const inList = isItemInList(item.name);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-amber-50/40 hover:border-amber-200 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg">{item.icon || '☀️'}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-slate-800 text-sm truncate">{item.name}</h4>
                          {item.discount && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                              {item.discount}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500">{item.reason}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem({ name: item.name, category: item.category })}
                      disabled={inList}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                        inList
                          ? 'bg-slate-200 text-slate-500 cursor-default'
                          : 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs active:scale-95'
                      }`}
                    >
                      {inList ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })
            )}
          </>
        )}

        {tab === 'substitutes' && (
          <>
            {suggestions.substituteSuggestions.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm">
                Add staples like milk, bread, or sugar to see healthy & dietary alternative swaps!
              </div>
            ) : (
              suggestions.substituteSuggestions.map((item) => {
                const inList = isItemInList(item.name);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-sky-50/40 hover:border-sky-200 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg">{item.icon || '🌱'}</span>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-800 text-sm truncate">{item.name}</h4>
                        <p className="text-[11px] text-sky-700 font-medium">
                          Swap for <span className="font-bold">{item.originalItem}</span> • {item.reason}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem({ name: item.name, category: item.category })}
                      disabled={inList}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                        inList
                          ? 'bg-slate-200 text-slate-500 cursor-default'
                          : 'bg-sky-600 hover:bg-sky-700 text-white shadow-xs active:scale-95'
                      }`}
                    >
                      {inList ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Swap</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}

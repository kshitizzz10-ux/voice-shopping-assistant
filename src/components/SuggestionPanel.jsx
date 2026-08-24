import React, { useState } from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { Sparkles, History, Sun, Repeat, Plus, Check } from 'lucide-react';

export function SuggestionPanel({ activeTab = 'history', onTabChange }) {
  const { suggestions, addItem, items } = useShopping();
  const [tab, setTab] = useState(activeTab);

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
    <div className="glass-panel rounded-3xl border border-slate-800 shadow-xl p-4 sm:p-5 flex flex-col h-full">
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-100 text-base">Smart Suggestions</h2>
            <p className="text-xs text-slate-400">AI-powered recommendations</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/90 rounded-2xl my-3 text-xs font-semibold border border-slate-800">
        <button
          type="button"
          onClick={() => handleTabChange('history')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all ${
            tab === 'history'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Frequent</span>
          <span className="sm:hidden">Restock</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabChange('seasonal')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all ${
            tab === 'seasonal'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
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
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Repeat className="w-3.5 h-3.5" />
          <span>Swaps</span>
        </button>
      </div>

      {/* Tab Content List */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[460px]">
        {tab === 'history' && (
          <>
            {suggestions.historySuggestions.length === 0 ? (
              <div className="text-center py-10 text-slate-500 text-sm">
                No frequent items left to add. Your cart is all set!
              </div>
            ) : (
              suggestions.historySuggestions.map((item) => {
                const inList = isItemInList(item.name);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/70 hover:border-emerald-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg">{item.icon || '🛍️'}</span>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-100 text-sm truncate">{item.name}</h4>
                        <p className="text-[11px] text-emerald-400 font-medium">{item.reason}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem({ name: item.name, category: item.category })}
                      disabled={inList}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                        inList
                          ? 'bg-slate-800 text-slate-500 cursor-default'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-95'
                      }`}
                    >
                      {inList ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In List</span>
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
              <div className="text-center py-10 text-slate-500 text-sm">
                All seasonal deals are already in your list!
              </div>
            ) : (
              suggestions.seasonalSuggestions.map((item) => {
                const inList = isItemInList(item.name);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/70 hover:border-amber-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg">{item.icon || '☀️'}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-slate-100 text-sm truncate">{item.name}</h4>
                          {item.discount && (
                            <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 border border-amber-500/30 px-1.5 py-0.2 rounded">
                              {item.discount}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400">{item.reason}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem({ name: item.name, category: item.category })}
                      disabled={inList}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                        inList
                          ? 'bg-slate-800 text-slate-500 cursor-default'
                          : 'bg-amber-600 hover:bg-amber-500 text-white shadow-md active:scale-95'
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
              <div className="text-center py-10 text-slate-500 text-sm">
                Add staples like milk, paneer, atta, or sugar to view healthy & dietary alternative swaps!
              </div>
            ) : (
              suggestions.substituteSuggestions.map((item) => {
                const inList = isItemInList(item.name);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/70 hover:border-sky-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg">{item.icon || '🌱'}</span>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-100 text-sm truncate">{item.name}</h4>
                        <p className="text-[11px] text-sky-400 font-medium">
                          Swap for <span className="font-bold text-white">{item.originalItem}</span> • {item.reason}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem({ name: item.name, category: item.category })}
                      disabled={inList}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                        inList
                          ? 'bg-slate-800 text-slate-500 cursor-default'
                          : 'bg-sky-600 hover:bg-sky-500 text-white shadow-md active:scale-95'
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

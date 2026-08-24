import React, { useState, useMemo } from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { searchProducts } from '../utils/productDatabase.js';
import { CATEGORIES, CURRENCY } from '../utils/constants.js';
import { PriceFilter } from './PriceFilter.jsx';
import { Search, X, Mic, Plus, Check, Sparkles } from 'lucide-react';

export function SearchModal({ isOpen, onClose, onVoiceSearchClick }) {
  const { searchState, setSearchState, addItem, items, currency = CURRENCY } = useShopping();
  const [activeCategory, setActiveCategory] = useState('All');

  const categoriesList = ['All', ...Object.values(CATEGORIES)];

  const results = useMemo(() => {
    return searchProducts({
      query: searchState.query || '',
      minPrice: searchState.minPrice ?? 0,
      maxPrice: searchState.maxPrice ?? 1000,
      category: activeCategory,
      organicOnly: searchState.organicOnly ?? false,
    });
  }, [searchState.query, searchState.minPrice, searchState.maxPrice, searchState.organicOnly, activeCategory]);

  if (!isOpen) return null;

  const isItemInList = (name) => {
    return items.some((i) => i.name.toLowerCase() === name.toLowerCase());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-scale-up">
        {/* Header & Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <Search className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Voice-Activated Product Search</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input with Mic button */}
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchState.query || ''}
              onChange={(e) => setSearchState({ query: e.target.value })}
              placeholder='Search Indian groceries, brands (e.g. "Amul", "Aashirvaad", "Dettol")...'
              className="w-full pl-11 pr-24 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              autoFocus
            />
            {searchState.query && (
              <button
                type="button"
                onClick={() => setSearchState({ query: '' })}
                className="absolute right-12 p-1.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onVoiceSearchClick}
              className="absolute right-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 shadow-xs transition-all active:scale-95"
              title="Voice Search"
            >
              <Mic className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Voice</span>
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price & Dietary Filter */}
          <PriceFilter
            minPrice={searchState.minPrice ?? 0}
            maxPrice={searchState.maxPrice ?? 500}
            onPriceChange={(min, max) => setSearchState({ minPrice: min, maxPrice: max })}
            organicOnly={searchState.organicOnly ?? false}
            onOrganicChange={(val) => setSearchState({ organicOnly: val })}
            currency={currency}
          />
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2.5 bg-slate-50/50">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-1">
            <span>Showing {results.length} catalog items</span>
            {searchState.maxPrice < 1000 && <span>Max Price: {currency}{searchState.maxPrice}</span>}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm font-medium">No matching products found.</p>
              <p className="text-slate-400 text-xs mt-1">Try adjusting the price slider or search query.</p>
            </div>
          ) : (
            results.map((product) => {
              const inList = isItemInList(product.name);
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-slate-900 text-sm truncate">{product.name}</h4>
                        {product.organic && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full">
                            Desi / Organic
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <span className="text-slate-600 font-medium">{product.brand}</span>
                        <span>•</span>
                        <span>{product.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-bold text-slate-900 text-sm">
                      {currency}{product.price.toFixed(0)}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          name: product.name,
                          brand: product.brand,
                          price: product.price,
                          category: product.category,
                          unit: product.unit,
                        })
                      }
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
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

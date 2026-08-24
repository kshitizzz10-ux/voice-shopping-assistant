import React, { useState } from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { PRODUCT_CATALOG } from '../utils/productDatabase.js';
import { CATEGORIES, CURRENCY } from '../utils/constants.js';
import { Plus, Check, Store, AlertTriangle, Sparkles, Filter } from 'lucide-react';

export function StoreAisles({ unavailableQuery, onClearUnavailable }) {
  const { addItem, items, currency = CURRENCY } = useShopping();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Object.values(CATEGORIES)];

  const isItemInList = (name) => {
    return items.some((i) => i.name.toLowerCase() === name.toLowerCase());
  };

  const filteredCatalog = selectedCategory === 'All'
    ? PRODUCT_CATALOG
    : PRODUCT_CATALOG.filter((p) => p.category === selectedCategory);

  return (
    <div className="grocery-panel rounded-3xl border border-slate-200 p-4 sm:p-6 mb-6 transition-all">
      {/* Unavailable item alert banner */}
      {unavailableQuery && (
        <div className="mb-5 p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start justify-between gap-3 animate-slide-up">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-200 text-amber-800 rounded-xl shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base">
                "{unavailableQuery}" is currently not available in our store
              </h4>
              <p className="text-xs text-amber-800 mt-0.5">
                Please choose from the available store products in stock below:
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClearUnavailable}
            className="text-xs font-semibold text-amber-800 hover:text-amber-950 px-2.5 py-1 rounded-lg bg-amber-200/80 hover:bg-amber-300 transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Shelf Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <span>Available Store Items</span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                In Stock & Ready
              </span>
            </h2>
            <p className="text-xs text-slate-500">Tap or voice command any available store item</p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.slice(0, 6).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid (Flipkart / Blinkit Grocery Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-4">
        {filteredCatalog.slice(0, 12).map((product) => {
          const inList = isItemInList(product.name);
          return (
            <div
              key={product.id}
              className="grocery-card rounded-2xl p-3 flex flex-col justify-between border border-slate-200 group hover:border-emerald-500"
            >
              <div>
                {/* Product Emoji / Image & Category Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{product.image || '🛒'}</span>
                  {product.organic && (
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Desi
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{product.brand}</p>
              </div>

              {/* Price & Add Button */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <div>
                  <span className="font-extrabold text-slate-900 text-sm font-mono">
                    {currency}{product.price.toFixed(0)}
                  </span>
                  <span className="text-[10px] text-slate-400 block -mt-1">/{product.unit}</span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      name: product.name,
                      price: product.price,
                      brand: product.brand,
                      category: product.category,
                      unit: product.unit,
                    })
                  }
                  disabled={inList}
                  className={`p-1.5 sm:px-2.5 sm:py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    inList
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 cursor-default'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {inList ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="hidden sm:inline">Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="hidden sm:inline">Add</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

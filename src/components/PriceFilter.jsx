import React from 'react';
import { CURRENCY } from '../utils/constants.js';
import { SlidersHorizontal } from 'lucide-react';

export function PriceFilter({ minPrice, maxPrice, onPriceChange, organicOnly, onOrganicChange, currency = CURRENCY }) {
  const presets = [
    { label: 'All Prices', min: 0, max: 500 },
    { label: `Under ${currency}50`, min: 0, max: 50 },
    { label: `${currency}50 - ${currency}150`, min: 50, max: 150 },
    { label: `${currency}150 - ${currency}300`, min: 150, max: 300 },
    { label: `${currency}300+`, min: 300, max: 1000 },
  ];

  return (
    <div className="space-y-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
          <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
          <span>Price & Desi / Organic Filters</span>
        </div>

        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
          {currency}{minPrice.toFixed(0)} - {currency}{maxPrice.toFixed(0)}
        </span>
      </div>

      {/* Preset Pills */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {presets.map((preset) => {
          const isActive = minPrice === preset.min && maxPrice === preset.max;
          return (
            <button
              key={preset.label}
              type="button"
              onClick={() => onPriceChange(preset.min, preset.max)}
              className={`text-xs px-2.5 py-1 rounded-xl font-medium transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Range Slider */}
      <div className="pt-1">
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">{currency}0</span>
          <input
            type="range"
            min="10"
            max="600"
            step="10"
            value={maxPrice > 600 ? 600 : maxPrice}
            onChange={(e) => onPriceChange(minPrice, parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <span className="text-xs text-slate-400 font-medium">{currency}600+</span>
        </div>
      </div>

      {/* Organic / Desi Filter */}
      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-700">🌱 Organic / Desi Certified Only</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={organicOnly}
            onChange={(e) => onOrganicChange(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
        </label>
      </div>
    </div>
  );
}

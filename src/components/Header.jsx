import React from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { LanguageSelector } from './LanguageSelector.jsx';
import { CURRENCY } from '../utils/constants.js';
import { ShoppingBag, Volume2, VolumeX, Search, HelpCircle, Sparkles } from 'lucide-react';

export function Header({ onOpenSearch, onOpenHelp }) {
  const { items, voiceFeedbackEnabled, toggleVoiceFeedback, currency = CURRENCY } = useShopping();

  const totalItems = items.length;
  const completedItems = items.filter((i) => i.checked).length;
  const totalCost = items.reduce((acc, curr) => (curr.price ? acc + curr.price * (curr.quantity || 1) : acc), 0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Voice<span className="text-emerald-600">Cart</span>
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Smart AI Store
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">Indian Grocery Assistant with NLP</p>
          </div>
        </div>

        {/* Live Budget Counter & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Total Cost Badge */}
          {totalItems > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs font-semibold text-emerald-950 shadow-xs">
              <span className="text-emerald-700 hidden md:inline">Cart:</span>
              <span className="font-extrabold text-emerald-800 font-mono text-sm">
                {currency}{totalCost.toFixed(0)}
              </span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-700">
                {completedItems}/{totalItems} done
              </span>
            </div>
          )}

          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs text-xs font-semibold text-slate-700 transition-all active:scale-95 hover:border-emerald-500"
            title="Search products catalog & price filters"
          >
            <Search className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Voice Help Trigger */}
          <button
            type="button"
            onClick={onOpenHelp}
            className="p-2 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs text-slate-600 hover:text-emerald-600 transition-all active:scale-95 hover:border-emerald-500"
            title="Voice Commands Guide"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Voice Feedback Audio Toggle */}
          <button
            type="button"
            onClick={toggleVoiceFeedback}
            className={`p-2 rounded-2xl border shadow-xs transition-all active:scale-95 ${
              voiceFeedbackEnabled
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100'
                : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200'
            }`}
            title={voiceFeedbackEnabled ? 'Voice audio response is ON (Click to mute)' : 'Voice audio response is OFF (Click to unmute)'}
          >
            {voiceFeedbackEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Multilingual Selector */}
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

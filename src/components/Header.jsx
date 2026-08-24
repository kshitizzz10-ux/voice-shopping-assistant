import React from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { LanguageSelector } from './LanguageSelector.jsx';
import { CURRENCY } from '../utils/constants.js';
import { ShoppingBag, Volume2, VolumeX, Search, HelpCircle, Sparkles, Cloud } from 'lucide-react';

export function Header({ onOpenSearch, onOpenHelp }) {
  const { items, voiceFeedbackEnabled, toggleVoiceFeedback, currency = CURRENCY } = useShopping();

  const totalItems = items.length;
  const completedItems = items.filter((i) => i.checked).length;
  const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  const totalCost = items.reduce((acc, curr) => (curr.price ? acc + curr.price * (curr.quantity || 1) : acc), 0);

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20 font-black">
            <ShoppingBag className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Voice<span className="text-emerald-400">Cart</span>
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                AI NLP Voice
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Smart Voice Shopping Assistant</p>
          </div>
        </div>

        {/* Live Budget Counter & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Total Cost Badge */}
          {totalItems > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs font-semibold text-slate-200">
              <span className="text-slate-400 hidden md:inline">Cart Total:</span>
              <span className="font-extrabold text-emerald-400 font-mono">
                {currency}{totalCost.toFixed(0)}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">
                {completedItems}/{totalItems}
              </span>
            </div>
          )}

          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 shadow-sm text-xs font-semibold text-slate-200 transition-all active:scale-95 hover:border-emerald-500/40"
            title="Search products catalog & price filters"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Voice Help Trigger */}
          <button
            type="button"
            onClick={onOpenHelp}
            className="p-2 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 shadow-sm text-slate-300 hover:text-emerald-400 transition-all active:scale-95 hover:border-emerald-500/40"
            title="Voice Commands Guide"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Voice Feedback Audio Toggle */}
          <button
            type="button"
            onClick={toggleVoiceFeedback}
            className={`p-2 rounded-2xl border shadow-sm transition-all active:scale-95 ${
              voiceFeedbackEnabled
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/80'
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:bg-slate-800'
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

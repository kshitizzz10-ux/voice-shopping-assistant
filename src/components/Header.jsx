import React from 'react';
import { useShopping } from '../context/ShoppingContext';
import { LanguageSelector } from './LanguageSelector';
import { ShoppingCart, Volume2, VolumeX, Search, HelpCircle, Sparkles } from 'lucide-react';

export function Header({ onOpenSearch, onOpenHelp }) {
  const { items, voiceFeedbackEnabled, toggleVoiceFeedback } = useShopping();

  const totalItems = items.length;
  const completedItems = items.filter((i) => i.checked).length;
  const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 glass border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Voice<span className="text-emerald-600">Cart</span>
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                AI Voice
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">Smart Voice Shopping Assistant</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Progress Indicator */}
          {totalItems > 0 && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-700">
              <div className="w-16 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span>
                {completedItems}/{totalItems} ({progressPercent}%)
              </span>
            </div>
          )}

          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 transition-all active:scale-95"
            title="Search products catalog & price filters"
          >
            <Search className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Voice Help Trigger */}
          <button
            type="button"
            onClick={onOpenHelp}
            className="p-2 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 shadow-xs text-slate-600 hover:text-emerald-600 transition-all active:scale-95"
            title="Voice Commands Guide"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Voice Audio Feedback Toggle */}
          <button
            type="button"
            onClick={toggleVoiceFeedback}
            className={`p-2 rounded-2xl border shadow-xs transition-all active:scale-95 ${
              voiceFeedbackEnabled
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100'
                : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200'
            }`}
            title={voiceFeedbackEnabled ? 'Voice audio feedback is ON (Click to mute)' : 'Voice audio feedback is OFF (Click to unmute)'}
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

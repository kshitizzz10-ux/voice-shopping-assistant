import React, { useState, useRef, useEffect } from 'react';
import { useShopping } from '../context/ShoppingContext.jsx';
import { SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { Globe, ChevronDown, Check } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage, addToast } = useShopping();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (langCode, langName) => {
    setLanguage(langCode);
    setIsOpen(false);
    addToast(`Voice language set to ${langName}`, 'info');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 shadow-sm text-xs font-semibold text-slate-200 transition-all active:scale-95 hover:border-emerald-500/40"
        title="Change voice recognition language"
      >
        <Globe className="w-3.5 h-3.5 text-emerald-400" />
        <span>{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.label}</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 py-2 z-50 animate-scale-up backdrop-blur-xl">
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
            Voice Recognition Language
          </div>
          {SUPPORTED_LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleSelect(item.code, item.name)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left hover:bg-emerald-950/60 transition-colors ${
                item.code === language ? 'text-emerald-300 font-bold bg-emerald-950/40 border-l-2 border-emerald-400' : 'text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{item.flag}</span>
                <span>{item.name}</span>
              </div>
              {item.code === language && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

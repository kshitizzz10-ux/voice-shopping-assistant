import React, { useState, useRef, useEffect } from 'react';
import { useShopping } from '../context/ShoppingContext';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
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
        className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 transition-all active:scale-95"
        title="Change voice recognition language"
      >
        <Globe className="w-3.5 h-3.5 text-emerald-600" />
        <span>{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.label}</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-scale-up">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
            Voice Recognition Language
          </div>
          {SUPPORTED_LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleSelect(item.code, item.name)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left hover:bg-emerald-50/60 transition-colors ${
                item.code === language ? 'text-emerald-700 font-bold bg-emerald-50/40' : 'text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{item.flag}</span>
                <span>{item.name}</span>
              </div>
              {item.code === language && <Check className="w-3.5 h-3.5 text-emerald-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

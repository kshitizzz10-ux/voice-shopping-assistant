import React from 'react';
import { Mic, MicOff, Sparkles } from 'lucide-react';

export function VoiceButton({ isListening, onClick, disabled = false }) {
  const handleClick = () => {
    if (disabled) return;
    // Haptic feedback on mobile devices
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(isListening ? [30] : [50, 30, 50]);
    }
    onClick();
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Outer pulsing ring when listening */}
      {isListening && (
        <>
          <span className="absolute w-20 h-20 rounded-full bg-emerald-400/40 animate-ping"></span>
          <span className="absolute w-24 h-24 rounded-full bg-emerald-500/20 animate-pulse-slow"></span>
        </>
      )}

      {/* Main Mic Button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 ${
          isListening
            ? 'bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-red-500/30 scale-105 animate-pulse'
            : disabled
            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
            : 'bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-600/30 hover:scale-105'
        }`}
        title={isListening ? 'Tap to stop listening' : 'Tap to speak voice command'}
        aria-label={isListening ? 'Stop listening' : 'Start voice command'}
      >
        {isListening ? (
          <MicOff className="w-7 h-7 animate-bounce" />
        ) : (
          <Mic className="w-7 h-7" />
        )}
      </button>

      {/* Floating Sparkle / Status Pill */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span
          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider transition-colors ${
            isListening
              ? 'bg-rose-100 text-rose-700 border border-rose-200 animate-pulse'
              : 'bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          {isListening ? 'Listening...' : 'Tap to Speak'}
        </span>
      </div>
    </div>
  );
}

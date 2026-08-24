import React from 'react';
import { Mic, MicOff } from 'lucide-react';

export function VoiceButton({ isListening, onClick, disabled = false }) {
  const handleClick = () => {
    if (disabled) return;
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(isListening ? [40] : [60, 40, 60]);
    }
    onClick();
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Outer Holographic Glow Rings */}
      {isListening && (
        <>
          <span className="absolute w-24 h-24 rounded-full bg-emerald-500/30 animate-ping"></span>
          <span className="absolute w-28 h-28 rounded-full bg-emerald-400/20 animate-orb"></span>
          <span className="absolute w-32 h-32 rounded-full border border-emerald-400/40 animate-spin"></span>
        </>
      )}

      {/* Main Mic Button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 ${
          isListening
            ? 'bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 text-white shadow-2xl shadow-red-500/50 scale-110'
            : disabled
            ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
            : 'bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-teal-300 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105'
        }`}
        title={isListening ? 'Tap to stop microphone' : 'Tap to speak voice command'}
        aria-label={isListening ? 'Stop microphone' : 'Start voice command'}
      >
        {isListening ? (
          <MicOff className="w-8 h-8 animate-pulse text-white drop-shadow-md" />
        ) : (
          <Mic className="w-8 h-8 text-white drop-shadow-md" />
        )}
      </button>

      {/* Status Pill Indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span
          className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider transition-all border shadow-lg ${
            isListening
              ? 'bg-rose-950/90 text-rose-300 border-rose-500/60 animate-pulse'
              : 'bg-slate-900/90 text-emerald-400 border-slate-700/80'
          }`}
        >
          {isListening ? '● Live Recording' : '🎙️ Tap to Speak'}
        </span>
      </div>
    </div>
  );
}

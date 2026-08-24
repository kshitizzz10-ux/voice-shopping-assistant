import React from 'react';
import { Mic, Volume2, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export function VoiceFeedback({
  isListening,
  interimTranscript,
  finalTranscript,
  feedbackMessage,
  error,
  isSpeaking,
  onClear,
}) {
  if (!isListening && !interimTranscript && !feedbackMessage && !error && !isSpeaking) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-6 transition-all duration-300">
      <div
        className={`glass-hud rounded-3xl p-4 sm:p-5 transition-all duration-300 relative overflow-hidden ${
          error
            ? 'border-rose-500/50 shadow-rose-950/40 bg-rose-950/40'
            : isListening
            ? 'border-emerald-400/80 ring-2 ring-emerald-500/30 bg-slate-900/90 shadow-emerald-950/60'
            : isSpeaking
            ? 'border-sky-400/70 bg-slate-900/90 shadow-sky-950/40'
            : 'border-emerald-500/40 bg-slate-900/80 shadow-slate-950/40'
        }`}
      >
        {/* Glowing Gradient Accent Line */}
        <div
          className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
            error
              ? 'from-rose-500 via-red-400 to-rose-600'
              : isListening
              ? 'from-emerald-400 via-teal-300 to-emerald-500 animate-pulse'
              : isSpeaking
              ? 'from-sky-400 via-cyan-300 to-sky-500'
              : 'from-emerald-500 via-teal-400 to-emerald-600'
          }`}
        ></div>

        <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            {isListening ? (
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Audio Stream</span>
              </div>
            ) : isSpeaking ? (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-sky-500/20 border border-sky-400/40 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span>Voice Response</span>
              </div>
            ) : error ? (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 border border-rose-400/40 text-rose-300 rounded-full text-xs font-bold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Audio Alert</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 rounded-full text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Action Complete</span>
              </div>
            )}

            {/* Audio Waveform Bars */}
            {isListening && (
              <div className="flex items-center gap-1 h-6 px-2">
                <span className="w-1 bg-emerald-400 rounded-full eq-bar-1"></span>
                <span className="w-1 bg-emerald-300 rounded-full eq-bar-2"></span>
                <span className="w-1 bg-teal-400 rounded-full eq-bar-3"></span>
                <span className="w-1 bg-emerald-400 rounded-full eq-bar-4"></span>
                <span className="w-1 bg-emerald-300 rounded-full eq-bar-5"></span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>NLP Voice Engine</span>
          </div>
        </div>

        {/* Live Audio Transcript Display */}
        <div className="mt-3">
          {error ? (
            <p className="text-sm font-medium text-rose-300">{error}</p>
          ) : isListening ? (
            <div className="flex items-start gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/60 shrink-0">
                HEARD
              </span>
              <p className="text-base sm:text-lg font-medium text-emerald-100 font-sans tracking-wide min-h-[28px]">
                {interimTranscript ? (
                  <>
                    <span>"{interimTranscript}"</span>
                    <span className="inline-block w-1.5 h-4 ml-1 bg-emerald-400 animate-pulse"></span>
                  </>
                ) : (
                  <span className="text-slate-400 italic text-sm">
                    Listening to your voice... (e.g., "Add 2 packets Amul milk" or "दो किलो सेब जोड़ो")
                  </span>
                )}
              </p>
            </div>
          ) : feedbackMessage ? (
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-300">
              <span className="text-emerald-400">✓</span>
              <span>{feedbackMessage}</span>
            </div>
          ) : finalTranscript ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                PROCESSED
              </span>
              <p className="text-sm text-slate-200">"{finalTranscript}"</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

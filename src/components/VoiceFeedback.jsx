import React from 'react';
import { Mic, Volume2, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export function VoiceFeedback({
  isListening,
  interimTranscript,
  finalTranscript,
  feedbackMessage,
  error,
  isSpeaking,
}) {
  if (!isListening && !interimTranscript && !feedbackMessage && !error && !isSpeaking) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-5 transition-all duration-300">
      <div
        className={`rounded-3xl p-4 sm:p-5 transition-all duration-300 border shadow-md relative overflow-hidden ${
          error
            ? 'border-rose-300 bg-rose-50 text-rose-900 shadow-rose-100'
            : isListening
            ? 'border-emerald-400 ring-2 ring-emerald-400/20 bg-emerald-50/90 text-emerald-950 shadow-emerald-100'
            : isSpeaking
            ? 'border-sky-300 bg-sky-50 text-sky-950 shadow-sky-100'
            : 'border-slate-200 bg-white text-slate-900 shadow-slate-100'
        }`}
      >
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-200/70">
          <div className="flex items-center gap-2.5">
            {isListening ? (
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Listening Live</span>
              </div>
            ) : isSpeaking ? (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-sky-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span>Voice Response</span>
              </div>
            ) : error ? (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-600 text-white rounded-full text-xs font-bold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Notice</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Confirmed</span>
              </div>
            )}

            {/* Audio Waveform Bars */}
            {isListening && (
              <div className="flex items-center gap-1 h-6 px-2">
                <span className="w-1 bg-emerald-600 rounded-full eq-bar-1"></span>
                <span className="w-1 bg-emerald-500 rounded-full eq-bar-2"></span>
                <span className="w-1 bg-teal-600 rounded-full eq-bar-3"></span>
                <span className="w-1 bg-emerald-600 rounded-full eq-bar-4"></span>
                <span className="w-1 bg-emerald-500 rounded-full eq-bar-5"></span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI Voice NLP</span>
          </div>
        </div>

        {/* Live Audio Transcript Display */}
        <div className="mt-2.5">
          {error ? (
            <p className="text-sm font-semibold text-rose-800">{error}</p>
          ) : isListening ? (
            <div className="flex items-start gap-2">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                HEARD
              </span>
              <p className="text-base sm:text-lg font-medium text-emerald-950 tracking-wide min-h-[28px]">
                {interimTranscript ? (
                  <>
                    <span>"{interimTranscript}"</span>
                    <span className="inline-block w-1.5 h-4 ml-1 bg-emerald-600 animate-pulse"></span>
                  </>
                ) : (
                  <span className="text-slate-400 italic text-sm">
                    Listening to your voice... (e.g., "Bread add karo", "Add 2 packets milk", or "दो किलो सेब जोड़ो")
                  </span>
                )}
              </p>
            </div>
          ) : feedbackMessage ? (
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-900">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>{feedbackMessage}</span>
            </div>
          ) : finalTranscript ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                PROCESSED
              </span>
              <p className="text-sm text-slate-700 font-medium">"{finalTranscript}"</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

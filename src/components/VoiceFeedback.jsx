import React from 'react';
import { Mic, CheckCircle, AlertCircle, Volume2, Sparkles } from 'lucide-react';

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
    <div className="w-full max-w-2xl mx-auto px-4 my-2 transition-all duration-300">
      <div
        className={`rounded-2xl p-4 shadow-lg border backdrop-blur-md transition-all duration-300 ${
          error
            ? 'bg-rose-50/90 border-rose-200 text-rose-800'
            : isListening
            ? 'bg-emerald-50/95 border-emerald-300 ring-2 ring-emerald-400/30 text-emerald-950'
            : isSpeaking
            ? 'bg-sky-50/90 border-sky-200 text-sky-950'
            : 'bg-white/90 border-slate-200 text-slate-800'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Live Visualizer or State Icon */}
            {isListening ? (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-600 text-white rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Listening</span>
              </div>
            ) : isSpeaking ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-600 text-white rounded-full text-xs font-semibold">
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span>Speaking</span>
              </div>
            ) : error ? (
              <div className="p-1 bg-rose-100 text-rose-600 rounded-lg">
                <AlertCircle className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-1 bg-emerald-100 text-emerald-600 rounded-lg">
                <CheckCircle className="w-5 h-5" />
              </div>
            )}

            {/* Equalizer Bars */}
            {isListening && (
              <div className="flex items-center gap-1 h-6">
                <span className="w-1 bg-emerald-500 rounded-full animate-wave-1"></span>
                <span className="w-1 bg-emerald-500 rounded-full animate-wave-2"></span>
                <span className="w-1 bg-emerald-600 rounded-full animate-wave-3"></span>
                <span className="w-1 bg-emerald-500 rounded-full animate-wave-4"></span>
                <span className="w-1 bg-emerald-500 rounded-full animate-wave-5"></span>
              </div>
            )}
          </div>

          <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI Voice NLP</span>
          </div>
        </div>

        {/* Live Transcript / Feedback Message */}
        <div className="mt-2.5">
          {error ? (
            <p className="text-sm font-medium text-rose-700">{error}</p>
          ) : isListening ? (
            <p className="text-base text-emerald-900 font-medium italic min-h-[24px]">
              {interimTranscript || 'Speak your command... (e.g., "Add 2 bottles of milk")'}
            </p>
          ) : feedbackMessage ? (
            <p className="text-sm font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-emerald-600">✓</span> {feedbackMessage}
            </p>
          ) : finalTranscript ? (
            <p className="text-sm text-slate-700 font-medium">"{finalTranscript}"</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

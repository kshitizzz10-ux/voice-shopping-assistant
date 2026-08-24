import React from 'react';
import { SAMPLE_VOICE_COMMANDS } from '../utils/constants.js';
import { HelpCircle, X, Mic, Globe } from 'lucide-react';

export function VoiceHelpModal({ isOpen, onClose, onTryCommand }) {
  if (!isOpen) return null;

  const grouped = SAMPLE_VOICE_COMMANDS.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = [];
    acc[curr.category].push(curr.command);
    return acc;
  }, {});

  const multilingualExamples = [
    { lang: 'English / Hinglish', example: '"Bread add karo", "Add 2 packets Amul milk", "Add fish", "What is my total?"' },
    { lang: 'हिन्दी (Hindi)', example: '"दो पैकेट अमूल दूध जोड़ो", "दूध हटाओ", "पूरी लिस्ट खाली करो", "100 रुपये से कम टूथपेस्ट खोजो"' },
    { lang: 'Español (Spanish)', example: '"Añadir 2 litros de leche", "Buscar pasta", "Eliminar pan"' },
    { lang: 'Français (French)', example: '"Ajouter du lait", "Chercher café", "Supprimer le pain"' },
    { lang: 'Deutsch (German)', example: '"Milch hinzufügen", "Äpfel löschen", "Finde Tomaten"' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Voice Commands Guide</h2>
              <p className="text-xs text-slate-500">Everyday natural speech phrases you can speak</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {Object.entries(grouped).map(([category, commands]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {category}
              </h3>
              <div className="space-y-1.5">
                {commands.map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => {
                      if (onTryCommand) onTryCommand(cmd);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all flex items-center justify-between group"
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                      "{cmd}"
                    </span>
                    <span className="text-xs text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Try this →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Multilingual Section */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Multilingual Speech Examples
              </h3>
            </div>
            <div className="space-y-2">
              {multilingualExamples.map((item) => (
                <div
                  key={item.lang}
                  className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs"
                >
                  <p className="font-bold text-emerald-900">{item.lang}</p>
                  <p className="text-slate-600 mt-0.5 italic">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>💡 Tap any command to test it right away</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors shadow-xs"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

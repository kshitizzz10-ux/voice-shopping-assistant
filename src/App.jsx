import React, { useState, useCallback, useEffect } from 'react';
import { ShoppingProvider, useShopping } from './context/ShoppingContext';
import { Header } from './components/Header';
import { ShoppingList } from './components/ShoppingList';
import { SuggestionPanel } from './components/SuggestionPanel';
import { SearchModal } from './components/SearchBar';
import { VoiceHelpModal } from './components/VoiceHelpModal';
import { VoiceButton } from './components/VoiceButton';
import { VoiceFeedback } from './components/VoiceFeedback';
import { ToastContainer } from './components/Toast';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { processVoiceCommand } from './utils/commandProcessor';
import { Sparkles, Mic, Layers, ShoppingBag } from 'lucide-react';

function VoiceCartApp() {
  const {
    items,
    addItem,
    removeItemByName,
    updateItemQuantityByName,
    clearList,
    clearChecked,
    triggerSearch,
    language,
    speak,
    stopSpeaking,
    isSpeaking,
    searchState,
    closeSearch,
  } = useShopping();

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [suggestionTab, setSuggestionTab] = useState('history');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [mobileView, setMobileView] = useState('list'); // 'list' or 'suggestions'

  // Voice Command Dispatcher
  const handleCommandDetected = useCallback(
    (finalTranscript) => {
      if (!finalTranscript) return;

      const shoppingActions = {
        addItem,
        removeItemByName,
        updateItemQuantityByName,
        clearList,
        clearChecked,
        triggerSearch,
      };

      const result = processVoiceCommand(finalTranscript, language, shoppingActions);
      setFeedbackMessage(result.feedback);

      // Speak audio feedback if enabled
      speak(result.feedback, language);

      // Auto clear feedback message after 4s
      setTimeout(() => {
        setFeedbackMessage('');
      }, 4500);
    },
    [addItem, removeItemByName, updateItemQuantityByName, clearList, clearChecked, triggerSearch, language, speak]
  );

  const {
    isListening,
    transcript,
    interimTranscript,
    error: speechError,
    isSupported,
    toggleListening,
    startListening,
  } = useSpeechRecognition({
    lang: language,
    onCommandDetected: handleCommandDetected,
  });

  const handleSelectSubstitute = (itemName) => {
    setSuggestionTab('substitutes');
    setMobileView('suggestions');
  };

  const handleTryVoiceCommand = (cmdText) => {
    handleCommandDetected(cmdText);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50/20 text-slate-900 pb-32">
      {/* App Header */}
      <Header
        onOpenSearch={() => triggerSearch({ query: '' })}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Real-time Voice Feedback Banner */}
        <VoiceFeedback
          isListening={isListening}
          interimTranscript={interimTranscript}
          finalTranscript={transcript}
          feedbackMessage={feedbackMessage}
          error={speechError}
          isSpeaking={isSpeaking}
        />

        {/* Mobile Tab Switcher */}
        <div className="flex sm:hidden p-1 bg-slate-200/70 rounded-2xl mb-4 font-semibold text-xs">
          <button
            type="button"
            onClick={() => setMobileView('list')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mobileView === 'list' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shopping List ({items.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileView('suggestions')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mobileView === 'suggestions' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Suggestions</span>
          </button>
        </div>

        {/* Desktop 2-Column Grid / Mobile Conditional View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Shopping List Column */}
          <div className={`lg:col-span-8 ${mobileView === 'suggestions' ? 'hidden sm:block' : 'block'}`}>
            <ShoppingList
              onSelectSubstitute={handleSelectSubstitute}
              onOpenSearch={() => triggerSearch({ query: '' })}
              onOpenHelp={() => setIsHelpOpen(true)}
            />
          </div>

          {/* Smart Suggestions Column */}
          <div className={`lg:col-span-4 sticky top-20 ${mobileView === 'list' ? 'hidden sm:block' : 'block'}`}>
            <SuggestionPanel
              activeTab={suggestionTab}
              onTabChange={(t) => setSuggestionTab(t)}
            />
          </div>
        </div>
      </main>

      {/* Floating Bottom Voice Control Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-4 pointer-events-none flex flex-col items-center justify-center">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-slate-200/80 px-6 py-3 rounded-full shadow-2xl flex items-center gap-6">
          <VoiceButton
            isListening={isListening}
            onClick={toggleListening}
            disabled={!isSupported}
          />
        </div>
      </div>

      {/* Search and Filter Dialog */}
      <SearchModal
        isOpen={searchState.isOpen}
        onClose={closeSearch}
        onVoiceSearchClick={() => {
          closeSearch();
          startListening();
        }}
      />

      {/* Voice Help Modal */}
      <VoiceHelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onTryCommand={handleTryVoiceCommand}
      />

      {/* Toasts Container */}
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <ShoppingProvider>
      <VoiceCartApp />
    </ShoppingProvider>
  );
}

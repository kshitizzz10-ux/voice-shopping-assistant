import React, { useState, useCallback } from 'react';
import { ShoppingProvider, useShopping } from './context/ShoppingContext.jsx';
import { Header } from './components/Header.jsx';
import { ShoppingList } from './components/ShoppingList.jsx';
import { SuggestionPanel } from './components/SuggestionPanel.jsx';
import { SearchModal } from './components/SearchBar.jsx';
import { VoiceHelpModal } from './components/VoiceHelpModal.jsx';
import { VoiceButton } from './components/VoiceButton.jsx';
import { VoiceFeedback } from './components/VoiceFeedback.jsx';
import { ToastContainer } from './components/Toast.jsx';
import { useSpeechRecognition } from './hooks/useSpeechRecognition.js';
import { processVoiceCommand } from './utils/commandProcessor.js';
import { Sparkles, ShoppingBag } from 'lucide-react';

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

      // Auto clear feedback message after 4.5s
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

  const handleSelectSubstitute = () => {
    setSuggestionTab('substitutes');
    setMobileView('suggestions');
  };

  const handleTryVoiceCommand = (cmdText) => {
    handleCommandDetected(cmdText);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 pb-36 relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* App Header */}
      <Header
        onOpenSearch={() => triggerSearch({ query: '' })}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Main App Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
        {/* Real-time Voice HUD & Visualizer */}
        <VoiceFeedback
          isListening={isListening}
          interimTranscript={interimTranscript}
          finalTranscript={transcript}
          feedbackMessage={feedbackMessage}
          error={speechError}
          isSpeaking={isSpeaking}
        />

        {/* Mobile Tab Switcher */}
        <div className="flex sm:hidden p-1 bg-slate-900/90 rounded-2xl mb-4 font-semibold text-xs border border-slate-800">
          <button
            type="button"
            onClick={() => setMobileView('list')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mobileView === 'list' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shopping List ({items.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileView('suggestions')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mobileView === 'suggestions' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Suggestions</span>
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

      {/* Floating Holographic Voice Control Bar */}
      <div className="fixed bottom-4 inset-x-0 z-40 p-4 pointer-events-none flex flex-col items-center justify-center">
        <div className="pointer-events-auto glass-hud px-8 py-3 rounded-full shadow-2xl flex items-center gap-6 border border-emerald-500/40">
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

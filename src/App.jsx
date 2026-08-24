import React, { useState, useCallback } from 'react';
import { ShoppingProvider, useShopping } from './context/ShoppingContext.jsx';
import { Header } from './components/Header.jsx';
import { StoreAisles } from './components/StoreAisles.jsx';
import { ShoppingList } from './components/ShoppingList.jsx';
import { SuggestionPanel } from './components/SuggestionPanel.jsx';
import { SearchModal } from './components/SearchBar.jsx';
import { VoiceHelpModal } from './components/VoiceHelpModal.jsx';
import { VoiceButton } from './components/VoiceButton.jsx';
import { VoiceFeedback } from './components/VoiceFeedback.jsx';
import { ToastContainer } from './components/Toast.jsx';
import { useSpeechRecognition } from './hooks/useSpeechRecognition.js';
import { processVoiceCommand } from './utils/commandProcessor.js';
import { Sparkles, ShoppingBag, Store } from 'lucide-react';

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
  const [unavailableQuery, setUnavailableQuery] = useState(null);
  const [mobileView, setMobileView] = useState('list'); // 'aisles', 'list', or 'suggestions'

  // Voice Command Dispatcher with Smart LLM-style Semantic Context
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
        setUnavailableQuery,
      };

      const result = processVoiceCommand(finalTranscript, language, shoppingActions, items);
      setFeedbackMessage(result.feedback);

      // If user asked for an unavailable item, set alert
      if (result.intent === 'UNAVAILABLE_ITEM' && result.data?.unavailableItems) {
        setUnavailableQuery(result.data.unavailableItems.join(', '));
      } else if (result.success) {
        setUnavailableQuery(null);
      }

      // Speak audio feedback
      speak(result.feedback, language);

      // Auto clear feedback message after 5s
      setTimeout(() => {
        setFeedbackMessage('');
      }, 5000);
    },
    [addItem, removeItemByName, updateItemQuantityByName, clearList, clearChecked, triggerSearch, language, speak, items]
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-36 relative font-sans">
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

        {/* Available Store Products Aisles */}
        <StoreAisles
          unavailableQuery={unavailableQuery}
          onClearUnavailable={() => setUnavailableQuery(null)}
        />

        {/* Mobile Tab Switcher */}
        <div className="flex sm:hidden p-1 bg-white rounded-2xl mb-4 font-bold text-xs border border-slate-200 shadow-xs">
          <button
            type="button"
            onClick={() => setMobileView('list')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mobileView === 'list' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>My List ({items.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileView('suggestions')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mobileView === 'suggestions' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
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
              onVoiceCommand={handleTryVoiceCommand}
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

      {/* Floating Microphone Orb Bar */}
      <div className="fixed bottom-5 inset-x-0 z-40 p-4 pointer-events-none flex flex-col items-center justify-center">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl flex items-center gap-6 border-2 border-emerald-500/80">
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

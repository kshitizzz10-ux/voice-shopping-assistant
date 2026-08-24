import { useState, useEffect, useCallback, useRef } from 'react';

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const synthRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;

      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
  }, []);

  const speak = useCallback((text, langCode = 'en-US') => {
    if (!enabled || !synthRef.current || !text) return;

    try {
      // Cancel ongoing speech
      synthRef.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Find matching voice for the target language
      if (voices.length > 0) {
        const matchedVoice = voices.find((v) => v.lang.replace('_', '-').startsWith(langCode.substring(0, 2))) ||
          voices.find((v) => v.lang === langCode);
        if (matchedVoice) {
          utterance.voice = matchedVoice;
        }
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      synthRef.current.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
      setIsSpeaking(false);
    }
  }, [enabled, voices]);

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const toggleVoiceFeedback = useCallback(() => {
    setEnabled((prev) => !prev);
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    voiceFeedbackEnabled: enabled,
    toggleVoiceFeedback,
  };
}

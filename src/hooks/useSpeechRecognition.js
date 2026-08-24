import { useState, useEffect, useRef, useCallback } from 'react';

export function useSpeechRecognition({ lang = 'en-IN', onCommandDetected } = {}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState(null);
  const [isSupported, setIsSupported] = useState(true);

  const recognitionRef = useRef(null);
  const onCommandRef = useRef(onCommandDetected);
  const isExplicitStopRef = useRef(false);
  const silenceTimerRef = useRef(null);

  useEffect(() => {
    onCommandRef.current = onCommandDetected;
  }, [onCommandDetected]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setError('Speech recognition is not supported in this browser. Please use Google Chrome, Edge, or Safari.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = lang;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
      isExplicitStopRef.current = false;
    };

    recognition.onresult = (event) => {
      let finalStr = '';
      let interimStr = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i];
        if (result.isFinal) {
          finalStr += result[0].transcript;
        } else {
          interimStr += result[0].transcript;
        }
      }

      if (interimStr) {
        setInterimTranscript(interimStr);
      }

      const spokenText = (finalStr || interimStr).trim();

      if (spokenText) {
        // Reset debounce timer on speech activity
        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current);
        }

        silenceTimerRef.current = setTimeout(() => {
          if (spokenText) {
            setTranscript(spokenText);
            setInterimTranscript('');
            if (onCommandRef.current) {
              onCommandRef.current(spokenText);
            }
          }
        }, 1200);
      }
    };

    recognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please click the padlock icon in your browser URL bar to allow microphone.');
        setIsListening(false);
      } else if (event.error === 'no-speech') {
        // Continuous listening can have no-speech events; ignore
      } else if (event.error === 'network') {
        setError('Network error with speech recognition service.');
        setIsListening(false);
      } else {
        setError(`Speech error: ${event.error}`);
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      // Auto-restart continuous listening if not explicitly stopped by user
      if (!isExplicitStopRef.current && isListening) {
        try {
          recognition.start();
        } catch {
          setIsListening(false);
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      isExplicitStopRef.current = true;
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, [lang, isListening]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || !isSupported) return;
    try {
      setError(null);
      setTranscript('');
      setInterimTranscript('');
      isExplicitStopRef.current = false;
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      // Already running
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;
    try {
      isExplicitStopRef.current = true;
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      recognitionRef.current.stop();
      setIsListening(false);
    } catch {
      // Already stopped
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startListening,
    stopListening,
    toggleListening,
  };
}

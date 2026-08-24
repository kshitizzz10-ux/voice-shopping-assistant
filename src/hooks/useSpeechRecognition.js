import { useState, useEffect, useRef, useCallback } from 'react';

export function useSpeechRecognition({ lang = 'en-IN', onCommandDetected } = {}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState(null);
  const [isSupported, setIsSupported] = useState(true);

  const recognitionRef = useRef(null);
  const onCommandRef = useRef(onCommandDetected);
  const isListeningRef = useRef(false);
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
      isListeningRef.current = true;
      setIsListening(true);
      setError(null);
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

      const activeText = (finalStr || interimStr).trim();

      if (activeText) {
        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current);
        }

        // Auto-dispatch command after user finishes speaking phrase
        silenceTimerRef.current = setTimeout(() => {
          if (activeText && isListeningRef.current) {
            setTranscript(activeText);
            setInterimTranscript('');
            if (onCommandRef.current) {
              onCommandRef.current(activeText);
            }
          }
        }, 1100);
      }
    };

    recognition.onerror = (event) => {
      console.warn('Speech recognition event error:', event.error);
      if (event.error === 'not-allowed') {
        setError('Microphone access blocked. Please allow microphone in browser URL settings.');
        isListeningRef.current = false;
        setIsListening(false);
      } else if (event.error === 'no-speech') {
        // No speech detected in chunk; keep listening if user hasn't clicked stop
      } else if (event.error === 'network') {
        setError('Network error with speech recognition. Please check internet connection.');
        isListeningRef.current = false;
        setIsListening(false);
      } else if (event.error === 'aborted') {
        // Normal abort
      } else {
        setError(`Speech notice: ${event.error}`);
      }
    };

    recognition.onend = () => {
      // If user still wants to listen, auto restart
      if (isListeningRef.current) {
        try {
          recognition.start();
        } catch {
          isListeningRef.current = false;
          setIsListening(false);
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      isListeningRef.current = false;
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, [lang]); // MUST ONLY DEPEND ON [lang], NEVER [isListening]!

  const startListening = useCallback(() => {
    if (!recognitionRef.current || !isSupported) return;
    try {
      setError(null);
      setTranscript('');
      setInterimTranscript('');
      isListeningRef.current = true;
      setIsListening(true);
      recognitionRef.current.start();
    } catch (e) {
      console.log('Recognition already active or starting:', e);
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    isListeningRef.current = false;
    setIsListening(false);
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (isListeningRef.current) {
      stopListening();
    } else {
      startListening();
    }
  }, [startListening, stopListening]);

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

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
  const lastProcessedRef = useRef('');
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

      // If final transcript is available from browser
      if (finalStr.trim()) {
        const command = finalStr.trim();
        if (command && command !== lastProcessedRef.current) {
          lastProcessedRef.current = command;
          setTranscript(command);
          setInterimTranscript('');
          if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
          if (onCommandRef.current) {
            onCommandRef.current(command);
          }
        }
      } else if (interimStr.trim()) {
        // Fallback debounce in case browser delays isFinal
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = setTimeout(() => {
          const command = interimStr.trim();
          if (command && command !== lastProcessedRef.current && isListeningRef.current) {
            lastProcessedRef.current = command;
            setTranscript(command);
            setInterimTranscript('');
            if (onCommandRef.current) {
              onCommandRef.current(command);
            }
          }
        }, 1200);
      }
    };

    recognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        setError('Microphone access blocked. Click the lock icon in your browser URL bar to allow microphone.');
        isListeningRef.current = false;
        setIsListening(false);
      } else if (event.error === 'no-speech') {
        // Normal silence between sentences; keep listening
      } else if (event.error === 'network') {
        setError('Network connection error with speech recognition.');
        isListeningRef.current = false;
        setIsListening(false);
      } else if (event.error === 'aborted') {
        // Ignore normal abort
      } else {
        setError(`Speech error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      // Auto restart if user is in continuous listening mode
      if (isListeningRef.current) {
        try {
          recognition.start();
        } catch {
          // If browser throttles, retry in 300ms
          setTimeout(() => {
            if (isListeningRef.current) {
              try {
                recognition.start();
              } catch {
                isListeningRef.current = false;
                setIsListening(false);
              }
            }
          }, 300);
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
  }, [lang]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || !isSupported) return;
    try {
      setError(null);
      setTranscript('');
      setInterimTranscript('');
      lastProcessedRef.current = '';
      isListeningRef.current = true;
      setIsListening(true);
      recognitionRef.current.start();
    } catch {
      // already active
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

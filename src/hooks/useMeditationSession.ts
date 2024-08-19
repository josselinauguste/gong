import { useState, useCallback } from 'react';
import useSound from 'use-sound';
import bowlStart from '../assets/bowlStart.mp3';
import bowlStep from '../assets/bowlStep.mp3';
import { useRecurring } from './useRecurring';

export function useMeditationSession(stepDuration: number) {
  const [started, setStarted] = useState(false);
  const [playStartSound] = useSound(bowlStart);
  const [playStepSound] = useSound(bowlStep);

  const start = useCallback(() => {
    setStarted(true);
  }, [setStarted]);

  useRecurring(playStartSound, playStepSound, started ? stepDuration : undefined);

  return { startSession: start, sessionInProgress: started }
}


import classNames from 'classnames';
import { useMeditationSession } from './hooks/useMeditationSession';
import { useCallback, useMemo } from 'react';
import NoSleep from '@zakj/no-sleep';

const MINUTE = 60 * 1000;
const SESSION_DURATION = import.meta.env.VITE_SESSION_DURATION_IN_MINUTES * MINUTE;

function App() {
  const { startSession, sessionInProgress } = useMeditationSession(SESSION_DURATION);
  const noSleep = useMemo(() => new NoSleep(), []);

  const startMeditation = useCallback(() => {
    startSession();
    noSleep.enable();
  }, [startSession, noSleep]);

  return (
    <div
      className={classNames("w-full h-dvh", {
        "bg-orange-600": !sessionInProgress,
        "bg-black": sessionInProgress
      })}
      onClick={startMeditation}
    >
    </div>
  )
}

export default App

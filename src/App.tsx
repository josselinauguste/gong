import classNames from 'classnames';
import {useMeditationSession} from './hooks/useMeditationSession';

const MINUTE = 60 * 1000;
const SESSION_DURATION = import.meta.env.VITE_SESSION_DURATION_IN_MINUTES * MINUTE;

function App() {
  const {startSession, sessionInProgress} = useMeditationSession(SESSION_DURATION);

  return (
    <div
      className={classNames("w-full h-screen", {
        "bg-orange-600": !sessionInProgress,
        "bg-black": sessionInProgress
      })}
      onClick={startSession}
    >
    </div>
  )
}

export default App

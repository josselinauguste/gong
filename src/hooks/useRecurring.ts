import { useRef, useEffect } from 'react';

export function useRecurring(startCallback: () => void, callback: () => void, delay: number | undefined) {
  const tickRef = useRef<() => void>(() => ({}));

  function tick() {
    if (delay) {
      callback();
      setTimeout(tickRef.current, delay);
    }
  }

  useEffect(() => {
    tickRef.current = tick;
  });


  useEffect(() => {
    if (!delay) {
      return;
    }
    startCallback();
    setTimeout(tickRef.current, delay);
  }, [delay]);
}

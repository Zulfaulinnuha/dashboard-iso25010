import { useState, useEffect } from 'react';

/**
 * Animates a numeric value counting up from 0 to the target number.
 * @param {number|string} endValue The target value to count up to.
 * @param {number} duration The duration of the animation in milliseconds.
 * @returns {number|string} The animated current value.
 */
export function useCountUp(endValue, duration = 1000) {
  const [count, setCount] = useState(() => {
    const end = parseFloat(endValue);
    return isNaN(end) ? endValue : 0;
  });

  useEffect(() => {
    const end = parseFloat(endValue);
    if (isNaN(end) || end === 0) {
      return;
    }

    const isFloat = endValue.toString().includes('.') || (typeof endValue === 'number' && endValue % 1 !== 0);

    let startTimestamp = null;
    let timerId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * end;
      
      if (isFloat) {
        setCount(current.toFixed(2));
      } else {
        setCount(Math.floor(current));
      }
      
      if (progress < 1) {
        timerId = window.requestAnimationFrame(step);
      } else {
        setCount(isFloat ? end.toFixed(2) : end);
      }
    };

    timerId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(timerId);
  }, [endValue, duration]);

  return count;
}

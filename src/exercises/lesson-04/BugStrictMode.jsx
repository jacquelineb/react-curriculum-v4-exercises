// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*
  StrictMode helps us catch this bug by running the effect twice. This allows us to see that the
  useEffect is not properly clearing the timer before the effect is run again when re-mounted,
  causing the timer to increment the count by two instead of one. The bug is fixed by adding a
  cleanup function that clears the interval to the useEffect hook.
*/

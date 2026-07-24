//src/exercises/lesson-03/BugEffectLoop.jsx

/*
  BUG #1 — Effect Issue

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
/*
  The useEffect hook previously ran on every render because it didn't contain a dependency array as
  its second argrument. Passing an empty dependency array as the second argument will cause the
  useEffect to only run once when the component mounts, instead of every time the component
  renders/re-renders.
 */

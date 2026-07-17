// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/*
  One issue is that the line `count++` attempts to modify the state directly. It's then followed by the code `setCount(count)`.
  This is an issue because `setCount` might be working with a stale value of `count` and thus the count state might not be updated properly.
  The fix is to remove the `count++`, and instead of passing the `count` variable to `setCount`, pass an initializer function that returns
  current count incremented by 1.
*/

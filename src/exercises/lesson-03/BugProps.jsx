import { useState } from 'react';
// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState(name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/*
  Use state to store the message instead of a regular variable. This way, whenever the state/message
  changes, React will re-render and display the updated message. In `handleChange()`, we also need
  to use the `setMessage` function to update `message` state instead of modifying it directly.
*/

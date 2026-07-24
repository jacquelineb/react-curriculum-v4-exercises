import { useRef } from 'react';
// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  const inputRef = useRef();
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

/*
  To re-focus the input when the button is clicked, I used useRef to create a reference `inputRef`
  to the input DOM node. The `focusInput` callback is called whenever the button is clicked, so within
  this callback function I use inputRef to call the input node's `focus` method, which imperatively
  sets focus back to the input field.
*/

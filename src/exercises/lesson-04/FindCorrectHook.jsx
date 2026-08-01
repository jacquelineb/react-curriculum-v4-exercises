import { useRef } from 'react';
// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  let clickCount = 0;
  const clickCountBtn = useRef();

  function handleClick() {
    clickCount++;
    clickCountBtn.current.textContent = `${clickCount} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={clickCountBtn} onClick={handleClick}>
        0 Clicks
      </button>
    </div>
  );
}

/*
  Previously, although the clickCount button increments every time the button is clicked, the
  displayed value in the button does not reflect the changes because no re-rendering occurs whenever
  the button is clicked. Even if I were to re-render the component every time the button was clicked,
  clickCount still not display the desired value. This is because its value would be reset to 0
  every re-render, since it is stored in a local variable.

  To display the updated value whenever the button is clicked **without** triggering a re-render, I
  had to use useRef to keep a reference to the button DOM node. Inside the handleClick function, I
  then used this ref to update the textContent of the button with the updated clickCount value.
*/

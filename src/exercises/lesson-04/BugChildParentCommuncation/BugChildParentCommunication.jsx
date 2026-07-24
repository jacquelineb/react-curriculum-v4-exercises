//Do not change this component
//Update Parent and Child component so that the button increments the counter in Parent.

import Parent from './Parent';

export default function BugChildParentCommunication() {
  return <Parent />;
}

/*
  To allow the Child component's button to update the Parent's counter, I pass the `increment`
  function from Parent as a prop to the Child. I updated the Child component's declaration to accept
  the callback/prop. Now in the Child component, I can use the `increment` function as a callback to
  the button's onClick event.
*/

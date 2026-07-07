//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Jacqueline Barcena';
  const age = 33;
  const hobbies = ['playing video games', 'programming', 'sewing', 'reading'];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        Hello there! My name is {name}. I am {age} years old and reside on the
        west coast of the US. I&apos;m very excited to be enrolled in Code the
        Dream because I&apos;ve always wanted a career in Web or Software
        development. I like (trying) to learn new things and am currently
        getting into photography after finally buying my first camera last year.
      </p>
      <p> Student output will go here </p>
    </div>
  );
}

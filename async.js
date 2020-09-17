
// sync javaScript is executed line by line in a single thread js engine
// synchronous code is executed in sequence – 
// each statement waits for the previous statement to finish before executing.
const second = () => {
  // this is async function
  setTimeout(() => {
    console.log('This is Async, hi there!')
  }, 2000); 
}

const first = ()=> {
  console.log('Hi there!')
  second();
  console.log('The end');
}

first();

// async code which gets executed later, run in the background
// Asynchronous code doesn't have to wait – your program can continue to run

// Blocking refers to operations that block further execution until that operation finishes. 
// Non-blocking refers to code that doesn't block execution.

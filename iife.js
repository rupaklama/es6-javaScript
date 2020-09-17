// IIFE - immediately invoked function expressions

// ES5
// function game() {
//   let score = Math.floor(Math.random() * 10);
//   console.log(score >= 5);
// }

// game();

// using IIFE
// In js, whatever is inside () is not statement/declaration
// So, wrapping it with (), js will treat it as func expression
(function () {
  let score = Math.floor(Math.random() * 10);
  console.log(score >= 5);
}) () // invoke it here


// ES6 - block scope is for data privacy using {}
// don't have to invoke it right away like in ES5 with ()

{
  const a = 1;
  let b = 2;
  console.log(a + b);
}


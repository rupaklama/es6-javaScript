// Callback hell - Callback chaining one after another
// To solve this issue, Promises were introduced in ES6

// Promise is an Object that keeps track about whether a certain async event
// has happened already or not, 
// Promise returns a value in the future

// Creating Promise object the function, executor
// Executor func gets immediately call after creating a promise
// Executor func takes two args - resolve & reject, callback funcs
// to signal success or failure of the event
const getIDS = new Promise((resolve, reject) => {
  // async code
  setTimeout(() => {
    // if successful, return this data 
    resolve([123, 855, 357, 098])
    // reject('Error!')
  }, 1500);
});

// Promise is consume with Callback functions
// All promises inherits Then & Catch Methods
// then method allows us to add event handler for the case that Promise is fulfilled
// IDs arg contains resolve data
getIDS
.then(IDs => { 
  console.log(IDs)
})
// catch method allows us to add event handler incase Promise fails
.catch(error => {
  console.log(error)
})
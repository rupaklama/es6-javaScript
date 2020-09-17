// AJAX stands for Asynchronous JavaScript And XML
// basically, it allows us to communicate asynchronously to the remote server

// API stands for Application Programming Interface
// allows one application talk to another

// using modern web api - fetch
// web apis is available to us through the browser which are not part of javaScript

// fetch returns Promise

// Promise is an Object that keeps track about whether a certain async event
// has happened already or not,
// Promise returns a value in the future

// Promise is consume with Callback functions
// All promises inherits Then & Catch Methods
// .then method allows us to add event handler for the case that Promise is fulfilled
// .catch method allows us to add event handler incase Promise fails

const fetch = require("node-fetch");

// function getWeather() {
//   fetch(
//     'https://crossorigin.me/https://www.metaweather.com/api/location/2487956/'
//   )
//     // result variable holds the fetch data from (response.body) response object's body property
//     .then(result => {
//       console.log(result);
//       return result.json(); // parsing json to js object
//     })
//     // json method again returns a promise
//     // (response.data) response object's data property contains our fetch data
//     .then(result => {
//       console.log(data);
//     })
//     .catch(error => console.log(error));
// }

// getWeather()

// ES8 (es2017) - async/await got introduced to make easier to consume Promises
async function getWeatherAW() {

  try {
    const response = await fetch(
      'https://crossorigin.me/https://www.metaweather.com/api/location/2487956/'
    )
    console.log(response)

    // parse json to js object which
    // json method again returns a promise
    const data = await response.json()
    console.log(data);
    
  } catch (error) {
    console.log(error)
  }
  
}

getWeatherAW()
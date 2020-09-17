// rest parameter is a function parameter & use in function call
// A function's last parameter can be prefixed with ... 
// which will cause all remaining (user supplied) arguments to be placed 
// within a "standard" javascript array. Only the last parameter can be a "rest parameter".
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// Rest operator is opposite of Spread operator
// Spread operator takes an array and transforms it into a single values where
// Rest operator receives single values and transforms them into a single array

// ES5
function isFullAge5() {
  // little hack to convert to array
  var argsArr = Array.prototype.slice(arguments);
  argsArr.forEach(function(el) {
    console.log((2020 - el) >= 18);
  })
}

// isFullAge5(1990, 1999, 1985, 2016)

// ES6
// transform args into array & pass it into this function
function isFullAge6(...years) {
  // console.log(years)
  years.forEach( el => console.log((2020 - el) >= 18));

}

isFullAge6(1990, 1999, 1985, 2016, 1987)

// 
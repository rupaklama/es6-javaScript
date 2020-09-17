// let and const variables

// NOTE: variable declare with Var in ES5 is a function scope,
// variable declare with Const & Let in ES6 is a block scope

// ES5 - function scope
function driverLicence5(passedTest) {
  if (passedTest) {

    // console.log(firstName) // var - get undefined 
    var firstName = 'Rupak';
    var dob = 1985;
  }
  console.log(firstName + ' was born in ' + dob + ', now can drive a car!');
}

driverLicence5(true)

// ES6 - block scope is inside {}
function driverLicence6(passedTest) {

  // console.log(firstName); // let - get error
  let firstName;
  const dob = 1985;
  if (passedTest) {
    firstName = 'Rupak';
    
    
  }
  console.log(firstName + ' was born in ' + dob + ', now can drive a car!');
}

driverLicence6(true)

// A variable declared with var in a function scope can't be accessed outside that function scope coz
// of local scope.
// Variables declared with let & const inside a block scope are only accessible inside that scope, 
// making let the ideal solution to the for loop index variable scope problem.

// block scope
// i variables are not the same, both i variables are completely different 
let i = 23;

for( let i = 0; i < 5; i++) {
  console.log(i)
}

console.log(i)
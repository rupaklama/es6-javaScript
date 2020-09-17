// es5 - function constructor
// Constructor can be define with function expression or function declaration
// var Person5 = function() {} - function expression
function Person5(name, dob, job) {  // func declaration here
  this.name = name;
  this.dob = dob;
  this.job = job;
}

// prototype property of func constructor for adding props & methods
// Person5.prototype.calculateAge =  
// function() {
//   var age = new Date().getFullYear - this.dob;
//   console.log(age)
// }

// new instance of object 
// var rupak5 = new Person5('Rupak', 1985, 'developer');


// ES6 - with class keyword
// class declaration, synthetic sugar meaning easier to write
class Person6 {
  constructor (name, dob, job) {
    this.name = name;
    this.dob = dob;
    this.job = job;
  }
  // we can only add methods to class, not properties because inheriting props is not best practice
  // adding method
  calcAge() {
    const age = new Date().getFullYear() - this.dob;
    console.log(age)
  }

  // Another thing, we can add STATIC methods - simply attached to the class
  // which are not inherited by class instances / object created by class
  // use as a helper method
  static greeting() {
    console.log('hi there!')
  }
}

const rupak6 = new Person6('Rupak', 1985, 'developer');
console.log(rupak6)

Person6.greeting();

// NOTE:
// Hoisting is a variable/function can be used before it has been declared.
// Using a let or const variable before it is declared will result in a ReferenceError.
// Declarations using let and const are also not hoisted

// class definition are not hoisted, 
// first we need to implement a class and only later in our code,
// we c

// ES5 - A function declaration is a means to create a function, 
// which can be a constructor function, which is hoisted, 
// allowing it to be used earlier in the code then it appears.
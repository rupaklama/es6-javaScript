// Sub class - inheritance

// es5 - function constructor
// Constructor can be define with function expression or function declaration
// var Person5 = function() {} - function expression

// super class
function Person5(name, dob, job) {
  // func declaration here
  this.name = name;
  this.dob = dob;
  this.job = job;
}

// prototype property of func constructor for adding props & methods
Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.dob;
  console.log(age);
};

// sub class
var Athlete5 = function (name, dob, job, games, medals) {
  // first thing to do is call super class constructor with this keyword
  Person5.call(this, name, dob, job);
  this.games = games;
  this.medals = medals;
};

// now, to creat correct prototype chain, using Object.create()
// it manually allows us to set prototype of the object
// we want prototype of Athlete5 to be prototype of Person5 to connect both
Athlete5.prototype = Object.create(Person5.prototype);

// setting method for Athlete5
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};

// new instance of object
var rupakAthlete5 = new Athlete5(
  'Rupak',
  1985,
  'soccer player',
  'world cup',
  1
);
console.log(rupakAthlete5);

rupakAthlete5.calculateAge();
rupakAthlete5.wonMedal();

// ES6 - with class keyword
// class declaration, synthetic sugar meaning easier to write

// Super Class
class Person6 {
  constructor(name, dob, job) {
    this.name = name;
    this.dob = dob;
    this.job = job;
  }
  // we can only add methods to class, not properties because inheriting props is not best practice
  // adding method
  calcAge() {
    const age = new Date().getFullYear() - this.dob;
    console.log(age);
  }
}

// Sub Class - inheritance
class Athlete6 extends Person6 {
  constructor(name, dob, job, games, medals) {
    super(name, dob, job); // calling super class
    this.games = games;
    this.medals = medals;
  }
  // method for this class
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const rupakAthlete6 = new Athlete6('Rupak', 1985, 'soccer player', 'world cup', 1);

rupakAthlete6.wonMedal();
rupakAthlete6.calcAge();



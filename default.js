// default parameters are function's preset arguments with default values

// ES5

// function constructor 
// function LamaPerson(firstName, dob, lastName, nationality) {

//   // default values
//   lastName === undefined ? lastName = 'Lama': null;
//   nationality === undefined ? nationality = 'Nepali' : null;


//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = dob;
//   this.nationality = nationality;
// }

// // new object
// var rupak = new LamaPerson('Rupak', 1985 );
// console.log(rupak);


// ES6

function LamaPerson(firstName, dob, lastName='Rai', nationality='Nepali') {

  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.nationality = nationality;
}

// new object
var rupak = new LamaPerson('Rupak', 1985 );
console.log(rupak);

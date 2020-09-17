// arrow function do not have 'this' keyword
// arrow function only uses 'this' keyword of the function which they are written in,
// so we say, they have Lexical 'this' variable

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', function () {
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
        // here, 'this' will result in undefined coz 
        // in a regular callback function, not Arrow function, like here, 
        // 'this' keyword always points to the Global Object - window object
      alert(str);
    });
  },
};

// box5.clickMe()

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      let str =
        'This is box number ' + this.position + ' and it is ' + this.color;
        // now, we have arrow function with this in it's block scope
        // by using arrow func, we have access to 'this' keyword of object's method
        // Arrow function can directly access object's props & methods.
      alert(str);
    });
  },
};

// another example 
// box6.clickMe()

const box66 = {
  color: 'green',
  position: 1,
  // changing function keyword to Arrow will result - undefined coz
  // this method also now shares the 'Lexical this keyword' from its surrounding 
  // which is the global window object, same like in ES5
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      let str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};

box66.clickMe()

// NOTE: when declaring Object's method use Regular Function keyword,
// to access Object's method on callback, use Arrow function


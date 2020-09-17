// arrays

// const boxes = document.querySelectorAll('.box');

// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(el) {
//   el.style.backgroundColor = 'dodgerblue';
// })

// // ES6 with new method - from()
// // simply turns elements nodes into an array
// const boxesArr6 = Array.from(boxes); // class name
// boxesArr6.forEach(el => el.style.backgroundColor = 'red');

// // loop
// // NOTE: cannot use break & continue methods in forEach() & map()

// // ES5 
// for(var i = 0; i < boxesArr5.length; i++) {
//   if(boxesArr5[i].className === 'box blue') {
//     continue;
//     // break;
//   }

//   boxesArr5[i].textContent = 'I changed to Red!';
// }

// // ES6 - new loop, for/of
// // can use break & continue methods with for/of
// for (const el of boxesArr6) {
//   if (el.className.includes('blue')) {
//     continue;
//   }
//   el.textContent = 'I changed to Red!';
// }

// to find elements in an array
// ES5
var ages = [12, 17, 8, 99, 37, 35]
var fullAge = ages.map(function(el) {
  return el >= 18;
}) 
console.log(fullAge)

console.log(fullAge.indexOf(true))
console.log(ages[fullAge.indexOf(true)])

// ES6 - findIndex method is like map 
// to find index
console.log(ages.findIndex(el => el >= 18))

// to find element
console.log(ages.find(el => el >= 18))

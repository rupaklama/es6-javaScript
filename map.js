// map is an object, new key/value data structure in ES6 same as hash map
// We can use any primitive values, function & object as keys

const question = new Map();
// question
question.set('question', 'What is the official name of latest js version?'); // key/value

// answers
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
// correct answer
question.set('correct', 3);

question.set(true, 'Correct answer');
question.set(false, 'Wrong answer');

console.log(question)

// retrieve data
console.log(question.get('question'));

// size of object
console.log(question.size);

// delete key
// question.delete(2)
if (question.has(2)) {
  question.delete(2)
}

// to delete all
// question.clear();

console.log(question)

// map is iterable
// we can loop through them but no with Object
question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`))


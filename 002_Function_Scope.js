console.log(add(2, 3)); // Output: 5
function add(a, b) {
  return a + b;
}
// Arrow Function is not hoisted
// console.log(multiply(2, 3)); // Output: ReferenceError: Cannot access 'multiply' before initialization
// let multiply = function(a, b) {
//   return a * b;
// };

// Default paramter
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();         // Output: Hello, Guest! 
greet("Alice");  // Output: Hello, Alice! 

// Rest and Spread operatot

// Rest -> Rest Parameter allows functions to accept an indefinite number of arguments as an array
function myFunc(...args) {
    console.log(args);
}
myFunc(1, 2, 3, 4, 5);

// destructing object and array
const { a, ...rest } = { a: 1, b: 2, c: 3 };
const [first, ...resta] = [1, 2, 3, 4];

// Spread Operator -> used to expand an array or object into individual elements

const a1 = [1, 2, 3];
const a2 = [...a1, 4, 5];
a2[0] = 10;
console.log(a1);
console.log(a2);

// merging array
const aa1 = [1, 2];
const aa2 = [3, 4];
const merged = [...aa1, ...aa2];

const original = [10, 20, 30];
const clone = [...original]; //The spread operator creates a shallow copy of the original array.

// Scope (global, function, block)


// Immediately Invoked Function Expressions (IIFE) -> JavaScript functions that are executed immediately after they are defined
(function(){
    console.log("IIFE");
})();





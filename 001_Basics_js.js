// Basics

var a = "adarsh";
var a = "sneha"; // possible
console.log(a);

let b = "adarsh";
// let b = "sneha"; // not possible 
console.log(b);

const c = "adarsh";
// const c = "sneha"; // not possible 
// c = "sneha" // not possible 
console.log(c);

Type Conversion :  data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.
Ex. let s = "123";
    let n = Number(s);
    
Type Coercion :  data type to another by JavaScript during operations. This is also known as implicit type casting.

Ex. let n = 5;
    let s = "5";
    let res = n + s;  // JavaScript converts num to string
    // 55
    
    
The == loose equality operator. It compares two values for equality after performing type coercion, meaning it converts the values to the same type before comparing them.
The === strict equality operator. It checks for equality without type conversion, meaning both the value and the type must be exactly the same for the comparison to return true.

Truthy -> truthy values are values that are evaluated to be true 
  Non-zero numbers: 42, -1, 3.14
  Non-empty strings: "hello", "0", " "
  Objects and arrays: {}, []
  Functions: function() {}
  Dates: new Date()
  Symbols: Symbol()
  BigInt values other than 0n: 10n
Falsy -> falsy values are values that evaluate to false
  false
  0 (and -0)
  0n (BigInt zero)
  "" (empty string)
  null
  undefined
  NaN
  document.all (used for backward compatibility)

undefined -> Uninitialized Variables, Missing Function Return, Non-Existent Object.
null -> Indicate "No Value", Reset or Clear Variables





  
  

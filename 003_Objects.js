Shallow copy vs deep copy

// 1. Spread operator
const copy = { ...obj };   [shallow copy]

// 2. Object.assign
const copy = Object.assign({}, obj);  [shallow copy]

// 3. Array shallow copy
const arrCopy = [...arr];

Deep Copy
A deep copy creates a completely independent copy, including all nested objects.
Changes in the copied object do NOT affect the original.

1. structuredClone() 
const deepCopy = structuredClone(obj);
✔️ Truly deep copies nested objects
✔️ Handles Array, Object, Date, Map, Set
✔️ Handles circular references
✔️ No data loss
✔️ Native & fast
Limitations
❌ Cannot copy functions or DOM nodes (usually not needed anyway) or not even for arrow function [DOMException]


2. JSON Method 
const deepCopy = JSON.parse(JSON.stringify(obj));
✔️ Object has only plain data
✔️ No functions, no Dates, no Maps/Sets [dates are converted into string, function gets disappear 
✔️ No circular references
Problems 
❌ Removes functions 
❌ Drops undefined
❌ Converts Date to string
❌ Breaks on circular references

Example of JSON Methods
obj -> {
  '3': 'three',
  a: 1,
  b: 'str',
  arr: [ 1, 2, 3 ],
  fun: [Function: fun],
  date: 2026-02-05T20:11:56.410Z,
  map: Map(1) { 1 => 'adarsh' }
}
cloned using JSON method -> {
  '3': 'three',
  a: 1,
  b: 'str',
  arr: [ 1, 2, 3 ],
  date: '2026-02-05T20:11:56.410Z',
  map: {}
}
note : circular reference gives error while cloning

Object.freeze() -> Makes an object completely immutable, You cannot Add new properties, Delete existing properties, Modify existing values
Object.seal() -> Prevents adding or deleting properties, Allows modifying existing values

Example :
var obj ={
    a:1,
    b:"str",
    3:"three",
    arr:[1,2,3],
    fun:()=>{
        console.log("hello");
    },
    date: new Date(),
    map: new Map([[1,"adarsh"]])
}

Object.freeze(obj);
Object.seal(obj);
obj.b = "adarsh";
obj.name = "kamble";
console.log(obj);


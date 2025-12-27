Shallow copy vs deep copy

// 1. Spread operator
const copy = { ...obj };

// 2. Object.assign
const copy = Object.assign({}, obj);

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
❌ Cannot copy functions or DOM nodes (usually not needed anyway)


2. JSON Method 
const deepCopy = JSON.parse(JSON.stringify(obj));
✔️ Object has only plain data
✔️ No functions, no Dates, no Maps/Sets
✔️ No circular references
Problems 
❌ Removes functions
❌ Drops undefined
❌ Converts Date to string
❌ Breaks on circular references


Object.freeze() -> Makes an object completely immutable, You cannot Add new properties, Delete existing properties, Modify existing values

Object.seal() -> Prevents adding or deleting properties, Allows modifying existing values

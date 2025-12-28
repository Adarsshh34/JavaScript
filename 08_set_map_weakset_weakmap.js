// Map, set, weakset, weakmap

let obj = new Set();

// Map

let map = new Map([["name","Adarsh"],["height","5.8"]]);
console.log(map)
console.log(map.get('name'))
map.set('role',"SE")
map.delete('name')
console.log(map)

// WeakSet -> we cannot iterate in weakset

let ws = new WeakSet();
console.log(ws) // try this in console to see all prototype method

// WeakMap -> we cannot iterate in weakmap, no size() method

If they can’t be iterated, why were WeakMap and WeakSet created?
They exist to solve memory-management problems by allowing objects to be garbage-collected automatically, preventing memory leaks.
Attaching metadata to objects
  const cache = new Map();
  
  function process(obj) {
    cache.set(obj, "processed");
  }

Problem ❌
If obj is no longer used elsewhere
Map still holds a strong reference
Object is never garbage collected
➡️ Memory leak

✅ Solution: WeakMap

const cache = new WeakMap();
function process(obj) {
  cache.set(obj, "processed");
}

Why this works
WeakMap does not prevent GC
When obj is gone, its data is removed automatically
No manual cleanup needed

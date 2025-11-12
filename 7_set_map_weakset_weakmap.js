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

// WeakMap -> we cannot iterate in weakmap

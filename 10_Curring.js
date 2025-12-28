Curring function -> Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.

// curring function with closure
function Add(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}
// now to get last value we have to do 

let a = Add(1);
console.log(a);
let b = a(2);
console.log(b);
let c = b(3);
console.log(c);

// above thing we can do it in one line using curring

let ab = Add(1)(2)(3);
console.log(ab);

// Real life example of curring
var obj = {
    name:"Adarsh",
    age:25
};

function getInfo(obj){
    return function (ob){
        return obj[ob];
    }
}

let ad = getInfo(obj);
console.log(ad('name'));
console.log(ad('age'));

Using Curring we can do 
let ab = getInfo(obj)('name');
let ac = getInfo(obj)('age');

console.log(ab);
console.log(ac);    

// Infinite curring
// interviwer ask to find ans of add(1)(2)(3).....()

function addNum(a){
    return function(b){
        if(b) return addNum(a+b);
        else return a;
    }
}


console.log(addNum(1)(2)(3)(4)())

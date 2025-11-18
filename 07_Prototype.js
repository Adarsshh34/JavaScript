// ways to create obj

const obj = new Object({
    name:"Adarsh",
    getName:function(){
        console.log(this.name);
    },
    getRollno: function(){
        console.log(this.rollno);
    }
})

console.log(obj.hasOwnProperty('name'))

// const obj1 = new obj();

// const obj2 = {
//     name:"Adarsh"
// }

// Prototype : are the set of set of method/properties which is by default given by javascript to every object 
// method like: ..hasOwnProperty(), .toString ...etc

const obj2 = {
    rollno:2,
    // name:"Sneha",
    __proto__:obj // by doing this we can make obj properties and methods as obj2 prototype methods i.e it act as a by default method of obj
}

obj2.getName()
obj2.getRollno() 

// it will first check in object from which it is been called if not present then it will see in parentr obj i.e __proto__ objec

// Inheritance

const obj3 = {
    class:"BE",
    name:"Sneha",
    __proto__:obj2
}

console.log(obj3.name);


// to see all prototype method
// prototype is like a java class which can have set of methods and propperties
// use below things in console you will see all prototype methods

const ob = new Object();
console.log(ob);

const arr = new Array();
console.log(arr);


// Supppose we have write your own prototype method or we need to create from scratch

Array.prototype.show = function(){
    console.log("hi this method is made by me and it is prototype method")
}

const cities = ['mumbai'];
cities.show();

// creating prototype method which will convert array into object

Array.prototype.convertIntoObject = function(){
    let newobj = {};
    this.forEach((ele)=>{
        newobj[ele] = ele;
    })
    return newobj;
}
console.log(cities.convertIntoObject());

// Your own prototype

function myPrototype(name,roll){
    this.name = name;
    this.rollno = roll;
}

myPrototype.prototype = obj;

const myproto = new myPrototype('Adarsh',6);
console.log(myproto);
myproto.getName();
myproto.getRollno();

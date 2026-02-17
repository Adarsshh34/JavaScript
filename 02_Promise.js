A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation
Before Promises, we relied heavily on callbacks for async operations, which often led to 'callback hell'  i.e pyramid of doom
    - deeply nested code that was hard to read and maintain. 
    Promises provide a cleaner, more readable way to handle asynchronous operations using .then() and .catch()


const data = [
    {name:"Adarsh", prof:"SE"},
    {name:"sneha", prof:"mba"}
];

let getData =()=>{
    setTimeout(()=>{
        data.forEach((item,index)=>{
            console.log(index + ": "+item.name + " " + item.prof);
        })
    },1000)
}

let addData = (pname, pprof) =>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.push({name : pname, prof: pprof});
            let error = true;
            if(error){
                resolve();
            }else{
                reject("Something went wrong");
            }
  
        },2000);
    });
    
    
    
}

addData("raj","SF").then(getData).catch(err => console.log(err));

1️⃣ Promise.all() -> Resolves when ALL promises resolve, Rejects immediately if ANY promise rejects.
    const p1 = Promise.resolve(10);
    const p2 = Promise.resolve(20);
    const p3 = Promise.resolve(30);
    
    Promise.all([p1, p2, p3])  // it takes array of promises
      .then(result => console.log(result))
      .catch(err => console.error(err));

2️⃣ Promise.allSettled() -> Resolves when ALL promises get completed (either fullfilled or rejected).
    const p1 = Promise.resolve(10);
    const p2 = Promise.reject("Error");
    const p3 = Promise.resolve(30);
    
    Promise.allSettled([p1, p2, p3])
      .then(results => console.log(results));

3️⃣ Promise.race() -> Resolves when any one of the promise completed(resolve or rejected).
    const p1 = new Promise(res => setTimeout(res, 2000, "Slow"));
    const p2 = new Promise(res => setTimeout(res, 1000, "Fast"));
    
    Promise.race([p1, p2])
      .then(result => console.log(result));
    ANS : Fast
3️⃣ Promise.any() -> Resolves when any one of the promise completed(resolve).
    const p1 = Promise.resolve(10);
    const p2 = Promise.resolve(20);
    const p3 = Promise.resolve(30);

    similiar to race but here we will wait for first resolve

Promise Chaining : .then().then().then().catch()

# Ecommerce website example
const cart =['books', 'shoes', 'bottle'];

const promise = createCart(cart);

promise.then((cartid)=>{
    console.log("cart is created with id ",cartid);
    return cartid;
})
.then(function(cartid){
    return proceedtoPayment(cartid);
})
.then(function(cartid){
    console.log("payment gets successfull for cart id ",cartid);
})
.then(function(){
    return orderPlaced();
})
.then((msg)=>{
    console.log(msg);
})
.catch(function(err){
    console.log(err);
})

function createCart(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            reject("cart is rejected");
        }
        
        let cartid = 1234;
        setTimeout(function(){
            resolve(cartid);
        },3000);
    });
    return pr;
}

function validateCart(cart){
    return true;
}
function proceedtoPayment(cartid){
    let iscartReady = false;
    return new Promise(function(resolve,reject){
        if(!iscartReady){
            reject("failed while processing payments for cart ",cartid);
        }
        setTimeout(function(){
            resolve(cartid);
        },5000);
        
    });
}
function orderPlaced(){
    return new Promise(function(resolve, reject){
        
        setTimeout(function(){
            resolve("Your order is been placed");
        },2000);
    })
}





async/await is used for ASYNCHRONOUS operations, not synchronous ones.
    Async/await is a syntax in JavaScript that makes asynchronous code look and behave more like synchronous code. 
    It's built on top of Promises and makes them easier to work with.

async is a keyword which is used with functions and await keyword is used only inside 
    async function to handle promises.
-------------------------------------------------------------------------------------------------------------

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
async function start(){
    await addData("raj","SF");
    getData();
}
start();
----------------------------Namaste Javascript----------------------------------------------------------------------------------------------------------
// Async function will always return promise
async function getdata(){
    return "Adarsh"; // it will automatically wrap value to promise
}

const a = getdata();
// console.log(a);
a.then(function(ab){
    console.log(ab);
})

const pr = new Promise((resolve, reject)=>{
    resolve("promise is resolved");
})

async function fun(){
    return pr;
}
fun().then(val => console.log(val))

// Async with Await
// before async await
function getmydata(){
    pr.then((msg)=> console.log(msg))
}
getmydata();

// After async and await
async function getmydata2(){
    let ans = await pr; //can be used only inside async fun
    console.log(ans);
}
getmydata2();
// async make sure functions runs asynronously and await make sure that code inside function runs sync fashion



const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 1 is resolved");
    },5000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 2 is resolved");
    },5000);
})


async function fun2(){
    console.log("hello 1");
    
    const val1 = await p1;
    console.log(val1);
    
    console.log("world");
    
    const val2 = await p2;
    console.log(val2);
}
fun2();

case 1:
p1 - 10s
p2 - 5s
ans - sequence wise

case 2:
p1 - 5s
p2 - 10s
ans - sequence

case 3:
p1 - 5s
p2 - 5s
ans - sequence wise


Deep down of aysnc awai:
In case 1,2,3:
when fun2() goes into the call stack it execute first line i.e console.log("hello 1") later it sees that in the next line
    there is a await keyword with returning promise its timer is 10s it uses event loop and tracks time wait untill it get fullfilled
    now is fun2() is suspended and removed from call stack (not blocking main thread) when p1 timer gets over i.e promise is resolve/reject
    fun2() is bringed back to main call stack, now console.log(p1) and console.log("world") would be printed and code moved to next line
    now there is another promise, similary this promise is taken care by event loop and fun2() would be taken out from main call stack.
    once promise would be resolved it will be bring back to main call stack;


************************ interview question **********************
function fun1(){
    console.log("ab");
}
async function fun2(){
    console.log("one");
    let ans = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise is resolve");
        },5000);
    });
    console.log(ans);
    console.log("two");
    
}

fun2();
fun1();
===========================================================================================================================================================
# Event loop -> Event loop explains how JS handles async tasks even though it is single-threaded.
    The event loop continuously checks the call stack and task queues and decides when to push async callbacks back onto the call stack. (IMP)
    Event loop is scheduler that moves tasks to the call stack.
    Q: why need one call stack ? JS has only one call stack, long task block ui so event loop enables non-blocking async execution

Event Loop Rule 
When the call stack is empty:
1️⃣ Execute ALL microtasks
2️⃣ Execute ONE macrotask
3️⃣ Repeat forever

In JS Engine we have a single call stack -> which runs functions immediately
suppose we want to wait for something or wait for executing script it is not possible in JS call stack : browser will freeze itself
beacuse callstack does not have timer
Browser has JS Engine and broweser has everything like localstorage, timer, url, ui, bluetooth, geo locatin
-------------------------------
| Browser                     |                      to access all those things we need WebApis
|                             |                        - setTimeout
|   ------------              |                        - DOM API
|  |JS Engine  |              |                        - local storage
|   ------------              |                        - console
|-----------------------------|                        - location
                                        Web Api - wraps up all these power into window object and gave it to the JS Engine

Microtask queue holds    Macrotask queue holds
- promise callback         - Timers
- MutationObserver         - DOM Events
                           - Net callback





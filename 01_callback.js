Synchronous -> Code runs line by line, and each task blocks the next one until it finishes.
Asynchronous JS -> Long-running tasks are offloaded, allowing the main thread to continue.
    
JS itself is single-threaded, but async behavior is achieved using:
    Web APIs
    Event loop
    Callback queue / Microtask queue

Microtask queue (high priority) -> Microtasks are tasks that are executed immediately after the current call stack is empty and before any macrotask.
    ✔️  Promise.then()
    ✔️ Promise.catch()
    ✔️ Promise.finally()
    ✔️ queueMicrotask()
    ✔️ MutationObserver
Macrotask queue (low priority) -> Macrotasks are tasks scheduled to run after microtasks, usually for timers and events.
    ✔️ setTimeout
    ✔️ setInterval
    ✔️ setImmediate (Node.js)
    ✔️ DOM events (click, scroll)
    ✔️ I/O callbacks

A callback function is a function that is passed as an argument to another function 
and is executed at a later time, typically after some operation completes.
Example : forEach, setTimeout, map, filter
    
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

let addData = (pname, pprof, callback) =>{
    setTimeout(()=>{
        data.push({name : pname, prof: pprof});
        callback();
    },2000);
    
    
}

addData("raj","SF",getData);










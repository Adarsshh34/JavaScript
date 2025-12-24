async/await is used for ASYNCHRONOUS operations, not synchronous ones.
    Async/await is a syntax in JavaScript that makes asynchronous code look and behave more like synchronous code. 
    It's built on top of Promises and makes them easier to work with.

------------------------------------------------------------------------------------------------------------
// This is ASYNCHRONOUS (non-blocking)
async function fetchData() {
  const result = await fetch('/api/data'); // Waits, but doesn't block
  return result;
}

console.log('This runs immediately');
fetchData();
console.log('This also runs immediately, before fetch completes');
```

**Output:**
```
This runs immediately
This also runs immediately, before fetch completes
(then the fetch completes)


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









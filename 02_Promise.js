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

addData("raj","SF",getData).then(getData).catch(err => console.log(err));

1️⃣ Promise.all() -> Resolves when ALL promises resolve, Rejects immediately if ANY promise rejects.
    const p1 = Promise.resolve(10);
    const p2 = Promise.resolve(20);
    const p3 = Promise.resolve(30);
    
    Promise.all([p1, p2, p3])
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

Promise Chaining : .then().then().then().catch()






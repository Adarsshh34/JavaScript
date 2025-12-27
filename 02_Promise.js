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












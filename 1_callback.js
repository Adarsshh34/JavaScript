
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










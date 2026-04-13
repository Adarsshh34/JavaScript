# MAP
// polyfills
let arr = [1,2,3];
function mcb(value){
    return value+1;
}
let ans0 = arr.map(mcb);
console.log(ans0);

let ans1 = arr.map((ele)=> {
    return ele+1;
});
console.log(ans1);


Array.prototype.myMap = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        result.push(cb(this[i],i, this));
    }
    
    return result;
}

console.log("mnkahd");

let ans2 = arr.myMap((ele)=>{
    return ele*2;
})

console.log(ans2)

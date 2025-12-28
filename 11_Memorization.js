// memorization
// memorization is an optimization technique that can be use to reduce time consuming calculations by saving prevoius input to something called cache and returning result from it
let sum  = 0;
const cal =(n)=>{
    for(let i=0;i<n;i++){
        sum+=i;
    }
    return sum;
}

const memorize = (fun)=>{
    let cache ={}
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }
        else{
            let res = fun(n);
            cache[n] = res;
            return res;
        }
        
    }
}

// console.time()
// console.log(cal(50))
// console.timeEnd()

console.time()
let effe = memorize(cal);
console.log(effe(50));
console.timeEnd()

console.time()
console.log(effe(50));
console.timeEnd()

Memoization is a performance optimization technique that stores the results of function calls so repeated calls with the same inputs return cached results instead of recomputing.

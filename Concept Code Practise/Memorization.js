function memorize(fn){
    const cache = new Map();
    
    return function(...args){
        var key = JSON.stringify(args);
        // console.log("key",key);
        
        if(cache.has(key)){
            console.log("through cache");
            return cache.get(key);
        }
        // console.log(args);
        const result = fn.apply(this, args);
        cache.set(key,result);
        return result;
        
    }
}
function expensiveOperation(a, b){
    console.log("computing values......");
    return a+b;
}

const memorizefun = memorize(expensiveOperation);

console.log(memorizefun(1,2));
console.log(memorizefun(1,2));

//factorial example
function expensiveOperation2(n){ 
    if(n<=1) return 1;
    return n * expensiveOperation2(n-1);
}
const memorizefun2 = memorize(expensiveOperation2);

console.log(memorizefun2(5));
console.log(memorizefun2(5));

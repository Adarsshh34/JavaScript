
// closure
let add =(a)=>{              // a is lexical scope for return function
    console.log("Hello");
    let c = 4;          // lexcial scope for return function
    return function(b){
        console.log(a+b+c);
    }
}

let ad = add(2);
ad(6);

// jab ad(6) function call kiya tab a and b ka value retain raha
// dusre lang mai function end hone ke baad variable destroy hote hai
// js mai nahi hota hai usse bolte hai closure

// and 
// c and a ko access kar pana usse bolte hai lexical scope

//  2nd Example

let sum = (a,b,c)=>{
    
    
    
    return {
        gettwo: function(){
            return a+b;
        },
        getthree: function(){
            return a+b+c;
        }
    }
}

let ans = sum(1,2,3);

console.log(ans.gettwo())
console.log(ans.getthree())


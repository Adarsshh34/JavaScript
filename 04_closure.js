Closure -> A closure is a function that retains access to its outer function's variables, even after the outer function has finished executing.

Closure -> function along with its lexical scope bundle together to form a closure.

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

# Advantages of Closures
    Data Encapsulation (Privacy)
    Cleaner & Modular Code
# Disadvantages of Closures
    Higher Memory Usage - value is not garbage collected



// Data Encapuslation example- hiding count from other part of the code (advantages)
                                                 some other way - functional constructor
function counter(){                                  function ValCounter(){
    var count = 0;                                       var count = 0;
    return {                                             this.increment = function(){
        increment(){                                         count++;
            count++;                                         console.log(count);
        },                                               },
        getcount(){                                      this.decrement = function(){
            return count;                                    count--;
        },                                                    console.log(count);
        decrement(){                                     }
            count--;                                 }
        }                                            fun1.increment();
    }                                                fun1.increment();
}                                                    fun1.decrement();

var fun = counter();
fun.increment();
console.log(fun.getcount());
fun.increment();
console.log(fun.getcount());
fun.decrement();
console.log(fun.getcount());

# How closure works under the hood
JavaScript doesn’t “remember variables” — it remembers the lexical environment where the function was created.
    JS stores the reference of entire lexical envirnoment in which function was defined

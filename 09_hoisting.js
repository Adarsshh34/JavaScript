see video -> https://www.youtube.com/watch?v=Fnlnw8uY6jo
Article -> https://rahul319sinha.medium.com/javascript-hoisting-explained-why-let-and-const-arent-like-var-d6f87a66116d

Hoisting -> Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase.

console.log(x);
var x = 5;

greet();
function greet(){
    console.log("hello");
}

Reason for hoisting : Js compile the code in 2 phases 
    1. memory creation phase
    2. code execution phase
    
in first phase all the varible and function gets memory therefore x is coming as undefined and in case function whole function code is stored in memory
hoisting is not applied to array function because it is consider as variable and in first phase it is assigned with undefined.

Same hoisting is not applied to let and const:
in case of let and const, it is been hoisted but not in global context as var is stored it is stored in Temporal dead zone

Temporal dead zone : let and const varible are stored in temporal dead zone, it a place where let and const are stored until they are intialiazed with value

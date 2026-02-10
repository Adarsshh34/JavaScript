# Function Statement and Function Declaration
  function a(){
    console.log("hello a");
  }

# Function Expression
  var b = function(){
    console.log("hello b");
  }

# Anonymous Function

# Named Function Expression
var c = function xy(){
  console.log("hello");
}

c(); correct way to call
xy(); cannot called in this way

# Parameter and Arguments

function fun(a,b){  -> parameters
  console.log(a,b);
}
fun(2,3); -> arguments

# First Class Function or First Class Citizen 
    if functions are treated like any other value
    i.e assign to variable, pass as an argument to a function, returned from a function

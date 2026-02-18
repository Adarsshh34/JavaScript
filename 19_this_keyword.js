# this in global space
    this -> it will point to global object (window in browser) (global in node js)

# this inside a function (non strict mode)
    function fun(){
        console.log(this);
    }
    fun()
    this -> it will point to window object
this inside a function (strict mode)
    function fun(){
        console.log(this);
    }
    fun()
    this -> it will point to undefined

# why this behavious differently because - (this substitution)
    if value of "this" is undefined or null then "this" will replaced with global object only in non strict mode


# this value depends on how function is called (window) 
    fun() -> "this" will point to undefined
    window.fun() -> "this" will point to window object

# this inside a object's method
   const obj = {
       a:10,
        x: function(){
            console.log(this); -> Note: when you create function inside object it is called as method
        }
    }
    obj.x() -> value of "this" here is obj object

# this inside arrow function
    const obj = {
        a:10,
        x: ()=>{
            console.log(this); 
        }
    }
    obj.x() -> here "this" will point to its lexcial scope (i.e where it been called) in this case lexical scope would be global
# this inside nested arrow function
    const obj = {
        a:10,
        x: function(){
            var v = 10;
             const y = ()=>{
                var b = 50;
                console.log(this)  -> here "this" will point to enclosed lexical context
            }
            y();
        }
    }
    obj.x() 
# this inside DOM
here "this" refers to HTML Element

# this inide class and constructor

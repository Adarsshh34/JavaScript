// 1st Example

let emp1 ={
    name:"Adarsh",
    prof:"SE",
    age:24,
    getDetails: function(){
        console.log(this);
    }
}
emp1.getDetails();
let emp2 ={
    name:"Sneha",
    prof:"MBA",
    age:23
}


emp1.getDetails.call(emp2); // function borrowing


// now we can copy paste same getDetail function for all object we can use call here 

// 2nd method 
// in this we make a common method for all object
// getDetails is shared among both object using apply

let emp3 ={
    name:"Adarsh",
    prof:"SE",
    age:24,
    
}
function getDetails(){
    console.log(this);
}

let emp4 ={
    name:"Sneha",
    prof:"MBA",
    age:23
}

getDetails.call(emp3); 
getDetails.call(emp4); 


// Apply
apply()
getDetails.apply(emp3,['mumbai','india']); 
// Purpose: Very similar to call(), but you pass the arguments as an array (or array-like object).


// 3. bind()

// Purpose: Returns a new function with a permanently bound this value and optional preset arguments.
// It does not call the function immediately.

let ab = getDetails.bind(emp3,['mumbai','india']); 
ab()

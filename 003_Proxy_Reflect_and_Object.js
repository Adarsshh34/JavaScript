Proxt : Proxy is an object which intercepts another object and resists the fundamental operations on it.

  suppose we have object p1 and use do any thing into the object                   const p1={             --------
    add property                                                                      name:"adarsh"   -> | Proxy |  -> proxy-object
    delete property                                                                 }                     --------
    alter existing property                                                              
  if we don't want to give full control over object then we create proxy
  proxy act has middle-man while accessing that object
  (instead of giving raw object we give proxy object to user)

Reflect -> Reflect basically provide default behaviour.
  suppose i having some validation for set at last we are seting value as
  target[prop] = value  (this can be a buggy code, might miss some edge cases so instead)
  Reflect.set(target, prop, value)


const p1 ={
    fname:"Adarsh",
    lname:"Kamble",
    age:25
}

const p1Proxy = new Proxy(p1,{
    get(target, prop){    // target -> p1, prop -> fname,lname,age
        if(prop in target)
            // return target[prop];
            return Reflect.get(target, prop);
        else return "This property does not exists"
    },
    set(target, prop, value){
        if(!(prop in target)){
            console.log(`${prop} does not exist`);
            return false;
        }
        switch(prop){
            case 'fname':
            case 'lname':
                if(typeof value !== 'string' ) throw new Error(`${prop} must be a string`)
                break;
            case 'age':
                if(typeof value !== 'number' ) throw new Error(`${prop} must be a number`)
                if(value<= 0) throw new Error(`${prop} must be greater than zero`);
        }
        Reflect.set(target, prop, value);
    }
})

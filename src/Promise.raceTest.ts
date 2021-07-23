Promise.race([Promise.resolve(true),Promise.resolve('hello')])
.then(value=>console.log(value)) // True

Promise.race([Promise.resolve(true),Promise.reject(new Error('hello'))])
.then(value=>console.log(value))    //true
.catch(error=>console.log(error.message))   // not work

Promise.race([Promise.reject(new Error('error')),Promise.resolve(true)])
.then(value=>console.log(value))        //not work
.catch(error=>console.log(error.message))   //error

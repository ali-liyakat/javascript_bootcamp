//  Promises

let a =undefined;

// setTimeout(() => {
//     a = "hello"
// }, 3000);
// console.log(a)  // undefined becoz it takes time to execute

let promiseData  = new Promise((resolved, rejected) =>{
    setTimeout(() => {
        a = "hello"
        resolved("done")
    }, 3000);
})

promiseData.then( ()=>{
    console.log(a)
})


// global functions

isFinite() // number & null-> true ,, rest -> false

isNaN()  // true-> only for numbers

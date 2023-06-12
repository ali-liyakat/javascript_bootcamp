var a = 20;     // global scope

// let c = 20;     -> can't redeclare
// let c = 30;

if(true){
    let b = 30;     // block scope
    var a = 10;     // global scope
    console.log(a);
    console.log(b);
}
console.log(a)
// console.log(b)

    
// console.log(x)
// let x;  // error , no Hoisting


console.log(z)  // undefined, Hoisting
var z;


for(var i=0;i<10;i++){  // prints 10, ten times becoz its value will be 10 coz of global scope of var, and it will be 10.
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

for(let i=0;i<10;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

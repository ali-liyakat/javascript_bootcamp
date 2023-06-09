// var c = 300;        // global scope

let a = 500;
if(true){
    let a =30;
    const b = 40;       // block scope
    var c = 20;
    console.log("INNER:", a);
}
console.log(a);     // uses global variable a;
// console.log(b);
// console.log(c);


function one(){
    const user = "ali";

    function two(){
        const age = 22;
        console.log(user);  // child function can access variables of parent
    }
    // console.log(age);   // out of scope, age can't be accessed
    two()
}
one()


if (true) {
    const user = "ali";
    if (user === "ali") {
        const age = 22;
        console.log(user + age) //parent scope variable can be accessed in child scope.
    }
    // console.log(age);      // can't access block scope variable
}
// console.log(user);   // can't access user variable here

//  ************* Hoisting Concept *************

console.log(addOne(5)); // this is acceptable for function definition
function addOne(num){
    return num + 1;
}

console.log(addTwo(5)); // not acceptable for function expression.
const addTwo = function(num){
    return num + 2;
}

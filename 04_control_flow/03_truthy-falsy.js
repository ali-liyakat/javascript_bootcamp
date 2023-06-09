// Truthy and Falsy values

const usermail = "ali@123.com"
if (usermail) {
    console.log("user has mail")
} else{
    console.log("no email")
}

// Falsy values -> false,0,-0,BigInt 0n,null,undefined,NaN,"" 

// Truthy values -> "0","false"," ",[],{},function(){},

let myarr = []
if (myarr.length === 0) {
    console.log("array is empty")
}

const myobj = {}
if (Object.keys(myobj).length === 0) {
    console.log("object is empty")
}


// Nullish Coalescing Operator (??): null, undefined
// checks first defined value and returns it

let val1;
val1 = 5?? 10
val2 = null ?? 20
val3 = undefined ?? 30

console.log(val1)
console.log(val2)
console.log(val3)

//  Ternary operator
const price = 100;
price <=80 ? console.log("fair") : console.log("bad")
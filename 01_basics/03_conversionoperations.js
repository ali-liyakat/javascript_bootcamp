let score="33abc"

console.log(typeof score)
console.log(typeof(score))

let valInNumber=Number(score)
console.log(typeof(valInNumber))
console.log(valInNumber)

// "33"=> 33
// "33ab"=> NaN
// true=> 1, false=> 0
// null=> 0
// undefined=> NaN

let isLoggedIn="ali"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true
// 0=> false
// empty string=> false
// string=> true

let someNumber=22
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))
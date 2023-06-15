// SPREAD OPERATOR

let fruits = ['apple', 'banana', 'mango']
function printAll(...a){    // rest
    console.log(a)
}
printAll(fruits[0],fruits[1],fruits[2])
printAll(...fruits) // spread 

let names = ['ali','mee','her']
let ages = [22,23,24]
console.log(...names,...ages)   // spread operator to merge 2 arrays


let oldFruits = ['apple','mango','kiwi']
// let newFruits = oldFruits   // copies rference
let newFruits = [...oldFruits]   // does not copies rference, reference break
newFruits.push('banana')
console.log(newFruits)
console.log(oldFruits)
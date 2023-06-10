//    MAP()

const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.map( (num) => num + 10)  // returns new array

const newNums = myNums
                    .map( (num) => num * 10)    // chaining
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNums)
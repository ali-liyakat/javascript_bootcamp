//      FILTER()

const myNums = [1,2,3,4,5,6,7,8]
const newNums = myNums.filter( (num) => num>4)  // (implicit return) returns new array
console.log(newNums)

const nums = [1,2,3,4,5,6,7]
const elems = nums.filter( (num) => {   // explicitly retun needed for scope
    return num>3
})
console.log(elems)

const books = [
    {title:"1", genre:"science"},
    {title:"2", genre:"history"},
    {title:"3", genre:"fiction"},
    {title:"4", genre:"science"},
    {title:"5", genre:"history"},
];
const newbooks = books.filter( (bk) => bk.genre === "history")
console.log(newbooks)
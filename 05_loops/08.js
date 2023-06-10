//      REDUCE()
const myNums = [1,2,3]
const newnums = myNums.reduce( (acc,curr) => acc + curr, 0)
console.log(newnums)

const cart = [
    { name:"js", price: 99},
    { name:"py", price: 199},
    { name:"java", price: 299},
    { name:"Ds", price: 499},
];
const totalPrice = cart.reduce( (acc,pric) => acc + pric.price, 0)
console.log(totalPrice)
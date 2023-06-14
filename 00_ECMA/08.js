// Destructuring Array

let arr = ['apple', 'kiwi','mango']
let [f1,f2,f3] = arr;   // destructuring array: 
console.log(f1)
console.log(f2)
console.log(f3)

let arr1 = ['ali','amar','muneeb']
let [frnd1,,frnd2]= arr1;   // ,(skip value) will leave the element. We can use default value also

console.log(frnd1)
console.log(frnd2)


// destructuring object
let obj1 = {name: "ali", age:22, class: 'abc'}
let {age,name} = obj1;
console.log(age)
console.log(name)
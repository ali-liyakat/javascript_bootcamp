// Template literals

let myname = 'ali'
let age = 30;

function school(){
    return "RRCE";
}
console.log(" This is a video tutorial"+    // not possible in single line
 "for ECMA script");

console.log(`my name is ${myname} and my age is 
${age}. I study at ${school()}`)

let arr = [10,11,20,3,7,40]
let result = arr.find( (item) => {  // returns first matching element
    return item >30
})
console.log(result)

let index = arr.findIndex( (item) => item>10)   // retuns first matching index
console.log(index)

let obj = [
    {id:10, val:"a"},
    {id:20, val:"b"},
    {id:30, val:"c"},
    {id:40, val:"d"},
    {id:50, val:"e"},
];
let res = obj.find( (item) => item.id>20)   // retuns first object
console.log(res)
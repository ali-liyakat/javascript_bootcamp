//  Primitives -> call by value in memory 
// 7 types: -> number, string, boolean, null, undefined, symbol, bigInt

const score=90;
const myscore=80.5;

let islogged=false;
let name="ali";
const temp=null;        // null -> type Object
let email;
const id=Symbol('121');     // values can be same but they are not equal
const bigNumber = 7345837450235702394857n;


// Reference type(non-primitive)  -> Referenced by address
// Arrays, Objects, functions

const marks = [20,30,50,60];
let myObj = {
    name: "ali",
    age: 22
};

const myFunction = function(){
    console.log("hello");
}




//   ****************************  MEMORY  *****************************************************
//       Stack (primitive),     Heap(Non-primitive)

let myName="ali"
let anotherName=myName;     // creates a copy
anotherName="liyakat";

console.log(myName)
console.log(anotherName);



let user1={
    name: 'ali',
    age: 22
}

let user2=user1;

user2.age=23;               // changes are made in same reference memory.
console.log(user1.age);
console.log(user2.age);
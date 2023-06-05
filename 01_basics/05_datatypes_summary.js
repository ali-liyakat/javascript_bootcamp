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
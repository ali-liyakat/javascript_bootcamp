const user = {
    username: "ali",
    price: 99,

    message: function(){
        console.log(`${this.username}, welcome`); // this refers to current context. 
        console.log(this);  // gives current context
    }
}
// user.message()  // ali, welcome
// user.username = "liyakat";  // here the context changes.
// user.message()  // liyakat, welcome.
//console.log(this);  // in Node, it gives empty


// function chai(){
//     const user1 = "ali";    // context works only in objects,
//     console.log(this.user1);
// }
// chai()


const chai = () =>{
    const user = "ali";
    console.log(this.user); // undefined
}
chai()

// const add = (num1,num2) => { // for curly braces, return is must, explicit return
//     return num1 + num2;
// }
const add = (num1,num2) => (num1 + num2);   // return not needed, implicit return
console.log(add(2,3))


const display = () => ({user: "ali"});  // for object.
console.log(display())
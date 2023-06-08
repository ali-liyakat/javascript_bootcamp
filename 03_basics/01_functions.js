function add(a,b){      // function definition (parameters)
    return a+b;
}

console.log(add(2,3));      // function call (arguments)

function userLogged(user){
    return `${user} logged in`;
}
const msg = userLogged("ali");
console.log(msg);

function login(username = "ali"){   // default parameter.
    if(!username){      // username is undefined so it's false & !username=true.
        console.log("please enter username")
        return;
    }
    return `${username} just logged in`;
}
console.log(login("sam"));  // this argument will overide the default argument.


function calculatePrice(val1, val2,...num){    // rest operator
    return num;
}
console.log(calculatePrice(200,300,400,500,600));   // returns array of arguments



// passing objects in function.
const user1 = {
    userName: "ali",
    price: 299
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user1);    // we can create object here also


// passing arrays
const myArr = [200,400,600];
function secondVal(getarray){
    return getarray[1];
}
console.log(secondVal(myArr));  // we can pass array directly here.
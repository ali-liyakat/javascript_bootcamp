//  IF
const temp = 52;
if (temp < 50) {     // the condition shuld be true.
    console.log("temp is low");
} else{
    console.log("temp is high");    // executes if condition is false
}
// <,>,<=,>=,==,===,!=,!==   to use in condition

const balance = 1000;
// if(balance > 500){
//     console.log("Good");
//}
// short notation

if(balance > 500) console.log("Test");

let money = 1200;
if(money < 250){
    console.log("less than 250")
} else if(money < 700){
    console.log("less than 700")
}else if(money < 900){
    console.log("less than 900")
} else{
    console.log("less than 1200")
}

let email = true;
let google = true;
if(email && google){        // check multiple conditions
    console.log("Login allowed")
}

let login = true
let card = true
if(login || crad){      // check multiple conditions
    console.log("do shopping")
}
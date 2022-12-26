const accountId=7865;
let accountEmail="ali@mail.com";
var accountPassword="786565";
accountCity="Kashmir";  // allowed , but not preferd.
let accountState;  // if variable is not assigned its value is undefined.

/*
Dont prefer to use var
becoz of issue in block scope and functional scope. 
*/

// accountId=1234 ;    cant change const declared variable;

accountEmail="me@mail.com";
accountPassword="56789";
accountCity="Bengaluru";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);// prints data in tabular form
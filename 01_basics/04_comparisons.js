// comparison operators
//  (>, <,>=, <=, ==, !=) give boolean value as result.

console.log("2" > 1)        //true , conersion happens

console.log(null > 0);      //false
console.log(null ==0);      //false
console.log(null >=0);      //true          {conditional operators and equality operators behave differently in JS}

console.log(undefined==0);
console.log(undefined > 0);     // {always false}
console.log(undefined < 0);


// strict check  ===  checks data type also
console.log(2===2);     //true
console.log("2" ===2);  //false
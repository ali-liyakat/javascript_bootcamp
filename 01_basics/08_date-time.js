let myDate= new Date();     // date object
console.log(myDate.toString());// Wed Jun 07 2023 07:00:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // wed jun 07 2023
console.log(myDate.toLocaleString());       // 6/7/2023, time

        // month starts from 0
let createddate=new Date(2023,0,23);        // Monday Jan 23 2023
console.log(createddate.toDateString());
console.log(createddate.toLocaleString());


// ***********************  TIME STAMPS  ***************************

let myTime = Date.now();
console.log(myTime);    // gives in milliseconds
console.log(createddate.getTime());     // gives time in milliseconds


let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTime());

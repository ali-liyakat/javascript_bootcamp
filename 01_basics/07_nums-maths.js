const score=400;               
console.log(score);


const balance= new Number(200);     //number object
console.log(balance);

console.log(balance.toString());        //converts to string
console.log(balance.toFixed(3))         // 3 decimals

let money=112.889;
console.log(money.toPrecision(4));      // returns string of precise and round off vale

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));  // puts commas according to area given



//   **********************  MATHS   *************************************************
//  JS has inbuilt Maths library

console.log(Math.abs(-5));
console.log(Math.round(4.7));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));

// .min(), .max(), etc

console.log(Math.random());         //any number between 0 and 1;
console.log(Math.floor(Math.random() *10) + 1);

const min=10;
const max=100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);     // generate a random number between the range.


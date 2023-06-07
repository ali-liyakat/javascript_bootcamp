const arr = [1,2,3,4,5];    // array declaration

const arr2 =new Array(1,2,3,4,5);   // Another Declaration
console.log(arr[0]);    // access elements using indexes
console.log(arr.length);    // number of elements

arr.push(7);    // adds element at last
console.log(arr);
arr.pop();      //remove last element
console.log(arr);
arr.unshift(8);     //adds element at front
console.log(arr);
arr.shift();        //deletes front element
console.log(arr);

//arr.join()   -> joins array elements and returns a string

const newarr1 = (arr.slice(1,3)) // returns sub array, doesn't change the origional array, excludes last index.
console.log(newarr1);
console.log(arr);

const newArr2 = (arr.splice(1,3));  // from starting index delete number of elements, modifies origional array.
console.log(newArr2);
console.log(arr);

const heroes = ["thor","spiderman","antman"];
const dcheroes = ["superman","shaktiman"];
const combined = heroes.concat(dcheroes);   // returns new array with appending all elements.
console.log(combined);
const all = [...heroes,...dcheroes];    //spread operator.
console.log(all);

// arr.flat(depth); -> flattens the array elements.

console.log(Array.from("liyakat")); // conerts to array.

let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3)); // returns an array formed from values.
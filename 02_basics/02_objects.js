// singleton -> Object.create.

// object literals
const mysym = Symbol("key1");
const user = {
    name: "Ali",
    "full name": "liyakat ali",
    [mysym]: "myKey1",  // to use symbol as key, use brackets.
    age: 22,
    location: "kashmir",
    email: "ali@google.com"
};
console.log(user.name); // dot notation to access values.
console.log(user["email"]); // sq bracket notation, user for multi valu keys.
console.log(user["full name"]);
console.log(user[mysym]);

user.email = "ali@ms.com";  // to modify values
//Object.freeze(user);    // to freeze object, values can't be changed now.
user.email = "me@my.com";   // can't be modified, object is freezed.
console.log(user);

user.greeting = function(){
    console.log("hello user");
}
console.log(user.greeting); // [Function (anonymous)]
console.log(user.greeting());   // hello user

user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);    // refers to current object.
}
console.log(user.greeting2());


//  ****************** Object Constructor, singleton *****************
const fbUser = new Object();
fbUser.id = "123abc";
fbUser.name = "samm";
fbUser.age = 22;
console.log(fbUser);
console.log(Object.keys(fbUser));   //to access keys
console.log(Object.values(fbUser));   //to access values
console.log(Object.entries(fbUser));   //to access keys and values as arrays
console.log(fbUser.hasOwnProperty('name'));

const regUser = {
    email: "some@gmail.com",
    fullname: {
        userName: {
            firstname: 'john',
            lastname: "doe"
        }
    }
}
console.log(regUser.fullname.userName.firstname);

//  Merging Objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//const obj3 = {obj1,obj2};   // problematic
const obj3 = Object.assign({},obj1,obj2);
const obj4 = {...obj1, ...obj2}     // spread operator
console.log(obj4);
console.log(obj3);

const users = [         // Array of objects.
    {id:1, age:22},
    {id:2, age:20}
]
console.log(users[1].age);

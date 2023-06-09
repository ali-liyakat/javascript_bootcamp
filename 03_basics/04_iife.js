// Immediately Invoked Function Expression (IIFE)
// to immediately execute function and free from global scope pollution

(function hi(){
    console.log("hello");
}) ();  // ending is compulsory

(function msg(){            // named IIFE
    console.log("hi all")
})();

((user) => console.log(`namaste,${user}`))("ali")   // passing arguments
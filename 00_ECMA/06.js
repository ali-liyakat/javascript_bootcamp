//      Rest Operator

function fruits(a){     // displays only first argument
    console.log(a)
}
fruits('apple','banana','mango','kiwi')


function fruits2(...a){     // rest operator, returns array of all arguments
    console.log(a)
}
fruits2('apple','banana','mango','kiwi')
function add1(a,b){
    return a+b;
}
console.log(add1(10,20)) // 30


function add2(a,b=20){   // default parameters
    return a+b;
}
console.log(add2(10)) // 30

function val(){
    return 50;
}

function add3(a,b=val()){   // passing function as default parameter    
    return a+b;
}
console.log(add3(10))


function main(a, b=main()){ // call stack size exceeded
    return a+b;
}
main()
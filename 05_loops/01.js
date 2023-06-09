//      For loop
for (let index = 0; index < 10; index++) {
    // console.log(index)
}

for(let i=0; i<5; i++){
    let elem=i;
    if(elem==3){
        console.log("three")
    }
    console.log(i)
}

for(let i=0;i<5; i ++){
    console.log(`outer value is ${i}`)
    for(j=0;j<5;j++){
        console.log(`inner value is ${j} and outer value is ${i}`)
    }
}

const myArr = [10,20,30,40]
for(let i = 0; i < myArr.length; i++){
    const elem = myArr[i];
    console.log(elem)
}


// Break & Continue
for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("5 detected")
        break;              // break the control flow
    }
    console.log(`index is ${i}`)
}
for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("5 detected")
        continue;              // break the current iteration, jump to next iteration
    }
    console.log(`index is ${i}`)
}
//   FOR EACH LOOP

const code = ["c","cpp","java","js"]
code.forEach(function (item){   // callback function
    console.log(item)
})

code.forEach( (item) => console.log(item))  // arrow function

function print(item){   // explicit function
    console.log(item)
}
code.forEach(print)

code.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})
//  Higher order Loops

// for of loop

const arr = [1,2,3,4,5]
for(const val of arr){
    console.log(val)
}

const greeting = "hello all"
for (const greet of greeting) {
    console.log(greet)
}

const map = new Map()
map.set('IN', "india")
map.set('US', "usa")
map.set('FR', "france")
// console.log(map)

for (const [key, value] of map) {
    // console.log(key)
    console.log(key, '-',value)
}

// for of loop not used for objects.
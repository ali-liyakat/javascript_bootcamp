// FOR IN LOOP

const myObj = {
    js: "javascript",
    cpp: "C++",
    java: "java"
}
for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`)
}

const arr = ["c", "cpp","java", "js"]
for(const key in arr){
    console.log(arr[key])
}

// for in loop not used for Maps
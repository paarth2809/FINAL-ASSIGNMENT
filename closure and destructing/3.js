myArray=[1,2,3,4,5]
function add(){
    newArray=[...myArray,...arguments]
    console.log(newArray)
}

add(6,7,8,9)
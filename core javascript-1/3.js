// loops are concept in programming through which a set of lines can be executed repeatedly
// there are different types of loops like for loop,for each loop, while loop and do while loop
// loops are required to execute some set of instructions repeatedly

// syntax of for loop
// for(iterator,condition,incremental){
//     // lines of code
// }

for(i=1;i<=10;i++){
    console.log(i)
}

// synatx of for each loop
// for(iterator of data)
arr=[1,2,3,4,5]
for(i of arr) console.log(i)


// syntax of while
// iterator
// while(condition){
// incremental
// }

i=1
while(i<=10){
    console.log(i)
    i++
}



// syntax od do while
// do{
//     statements
//     incremental
// }
// while(condition)

i=1
do{
    console.log(i)
    i++
}
while(i<=10)

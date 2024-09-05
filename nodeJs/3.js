const fs=require('fs')
console.log("start")
fs.readFile('input.txt',(err,content)=>{
    if(err) return console.log(err)
    console.log("content is: "+content)
})
console.log("end")
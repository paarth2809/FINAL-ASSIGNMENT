const fs=require('fs')
console.log("start")
fs.writeFileSync('output.txt','hello how are you.......')
fs.appendFileSync('output.txt','append this content')
console.log("end")
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/') res.end("Hello")
})
server.listen(5000,()=>{
    console.log("server started")
})
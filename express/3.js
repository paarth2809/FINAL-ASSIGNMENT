const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Welcome to the main page!')
})

app.get('/dashboard',(req,res)=>{
    res.send("link to any html page")
})
app.listen(3000,()=>{
    console.log('server started')
})
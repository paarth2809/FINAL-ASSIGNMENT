const express=require('express')
const app=express()
const user={
    user1:{
        name: "abc",
        age: 19
    },
    user2:{
        name: "xyz",
        age: 22
    },
    user3:{
        name: "dsf",
        age: 14
    },
    user4:{
        name: "fgt",
        age: 19
    }
}

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/about',(req,res)=>{
    res.send({name:"paarth",age: 19,location: "mohali"})
})

app.get('/api/users',(req,res)=>{
    res.send(user)
})
app.listen(3000,()=>{
    console.log('server started')
})
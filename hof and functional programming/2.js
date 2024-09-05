function delayedMessage(message,time){
    setTimeout(()=>{
        console.log(message)
    },time)
}

delayedMessage("hello everyone",3000)
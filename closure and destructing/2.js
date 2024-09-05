function calculateTotal(obj){
    const{price,quantity}=obj
    console.log(price*quantity)
}

calculateTotal({price: 10,quantity: 4})
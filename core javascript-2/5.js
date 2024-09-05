const shoppingCart=['Milk','Coffee','Tea','Honey']

function addItemAtStart(item){
    ans=true
    for(i=0;i<shoppingCart.length;i++) if(shoppingCart[i]==item){
        ans=false;
        break
    }
    if(ans!=false) shoppingCart.unshift(item)
}

function addItemAtEnd(item){
    ans=true
    for(i=0;i<shoppingCart.length;i++) if(shoppingCart[i]==item){
        ans=false;
        break
    }
    if(ans!=false) shoppingCart.push(item)
}

function removeItem(item){
    for(i=0;i<shoppingCart.length;i++) if(shoppingCart[i]==item){
        shoppingCart.splice(i,1)
    }
}

function updateItem(item,updatedItem){
    for(i=0;i<shoppingCart.length;i++) if(shoppingCart[i]==item){
        shoppingCart[i]=updatedItem
    }
}

function listItems(){
    console.log(shoppingCart)
}
listItems()
addItemAtStart('Meat')
addItemAtEnd('Sugar')
listItems()
removeItem('Honey')
listItems()
updateItem('Tea','Green Tea')
listItems()
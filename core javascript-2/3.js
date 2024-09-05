function calculateTax(income){
    gst=18
    governmentTax=5
    return function(){
        return ((gst+governmentTax)*income)/100
    }
}

const tax=calculateTax(100000)
const taxPaid=tax()
console.log(`tax paid is: ${taxPaid}`)
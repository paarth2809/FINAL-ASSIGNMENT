function sumEvenNumbers(array){
    return array.reduce((sum,num)=>{
        if(num%2==0) return sum+num
        return sum
    },0)
}

console.log(sumEvenNumbers([1,2,3,4,5]))
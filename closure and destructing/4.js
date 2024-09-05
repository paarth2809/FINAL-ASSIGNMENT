function multiplyAndSum(...input){
    prod=input[0]*input[1]
    sum=0;
    for(i=2;i<input.length;i++) sum+=input[i]
    return prod+sum
}

console.log(multiplyAndSum(1,2,3,4,5))

// 1*2=2   ,  2+3+4+5=14
// output=14
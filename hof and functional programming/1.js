function calculate(a,b,fn){
    return fn(a,b)
}

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}

console.log(calculate(9,8,add))
console.log(calculate(9,6,sub))
console.log(calculate(9,8,mul))
console.log(calculate(24,8,div))
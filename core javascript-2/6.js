const ages=[19,22,19,24,20,25,26,24,25,24]

const n=ages.length
if(n%2!=0) console.log('median age: ',ages[n/2])
else console.log('median age: ',(ages[n/2]+ages[n/2-1])/2)
ages.sort
console.log('min age: ',ages[0])
console.log('max age: ',ages[n-1])

console.log('range is: ',ages[n-1]-ages[0])

avgAge=0
for(i=0;i<n;i++) avgAge+=ages[i]
avgAge/=n
console.log('average age is: ',avgAge)

console.log('min-average = ',Math.abs(ages[0]-avgAge))
console.log('max-average = ',Math.abs(ages[n-1]-avgAge))
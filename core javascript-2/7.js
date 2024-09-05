map=new Map()
map.set('age',19)
map.set('name','paarth')
map.set('experience','2 years')
map.set('salary',190000)
map.set('comapny','google')
map.set('education','BTECH')
map.set('location','mohali')

console.log(map)

if(map.has('name')) console.log('name key exist')
else console.log("map key doesn't exist")    

if(map.has('phone')) console.log('phone key exist')
else console.log("phone key doesn't exist")

console.log('value associated with key age is: ',map.get('age'))

console.log(map.entries())
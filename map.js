let info= new Map()
console.log(info)

info.set('firstName','abhijit')
info.set(31,'age')
info.set('city','pune')
info.set('marathi','lamguage')

console.log(info)

console.log(info.get(31))
console.log(info.get('firstName'))
console.log(info.get('city'))

console.log(info.size)

console.log(info.has('city'))
console.log(info.has(31))
console.log(info.has('roll'))

info.delete('marathi')
console.log(info)

info.clear()
console.log(info)

//another way to create a map

let fruits = new Map([
    ['apple',100],
    ['mango',40],
    ['banana',70],
    ['chiku',80]
])

for(let key of fruits.keys()){
    console.log(key)
}

for(let value of fruits.values()){
    console.log(value)
}

for(let [key,value] of fruits.entries()){
    console.log([key,value])
}
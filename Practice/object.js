let array = ["abhijit",'arnikar',45,66]

// retrive

console.log(array[1])
console.log(array[0])

// update
array[0]="vishwajeet"
console.log(array)

// add()
array.push('krushna')
console.log(array)
array.unshift('kaivaly')
console.log(array)

//delete()

array.pop()
console.log(array)
array.shift()
console.log(array)

//object()

let info = {
    firstName:"abhijit",
    lastName:"arnikar",
    age:30,
    rollNumber:14
}

//retrive

console.log(info.firstName)
console.log(info['firstName'])
// update

info.firstName='vishwajeet'
info['rollNumber']=25
console.log(info)

// add()

info.city="pune"
info['language']='marathi'
console.log(info)

//delete()

delete info.city
delete info['language']

console.log(info)

// Applying loop on object

for(let key in info){
    console.log(key)
}

for(let key in info){
    console.log(key,info[key])
}

for(let property in info){
    console.log(property)
}

for(let property in info){
    console.log(property,info[property])
}
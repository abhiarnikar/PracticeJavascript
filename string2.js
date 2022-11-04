//           0123456
let names = "abhijit"
// string stores the value by index

for(let i=0;i<names.length;i++){
    //console.log(i)
    console.log(names[i])
}

// reverse the string
let rev=""
for(let i=0;i<names.length;i++){
    rev = names[i]+rev
}
console.log(rev)

let rev2 = ""
for(let i=6;i>=0;i--){
    rev2 = rev2+names[i]
}
console.log(rev2)

let city = "nagpur pune mumbai"
let usercity = "chennai"

console.log(city.length)
console.log(city.toUpperCase())
let lower = city.toLowerCase()
console.log(lower)

let aa = city.includes('pune')
console.log(aa)
let bb= city.includes('Pune')
console.log(bb)

let zz = city.indexOf('mumbai')
console.log(zz)

if(city.indexOf(usercity)<0){
    console.log('city is not available')
}
else{
    console.log('city is available')
}

let a1 = " abhijit"
let a2 = a1.trimStart()
console.log(a2)

let a3 = "kaivaly  "
let a4 = a3.trimEnd()
console.log(a4)

let a5 = " krushna "
let a6 = a5.trim()
console.log(a6)

let country= "india"
let b1 = country.startsWith('in')
console.log(b1)
let b2 = country.endsWith('ia')
console.log(b2)

let city1 = "pu ne"
let rev1 = ""

for(let i=0;i<city1.length;i++){
    //console.log(city1[i])
    if(city1[i] !== " "){
        rev1 = rev1+city1[i]
    }
}
console.log(rev1)

let fn= "my name abhijit arnikar"

let cc = fn.split(" ")  // convert string to array
console.log(cc)

let dd= cc.join(" ") // convert array to string
console.log(dd)

let count= 0

for(let i=0;i<fn.length;i++){

    if(fn[i]== "a"||fn[i]== "e"||fn[i]== "i"||fn[i]== "o"||fn[i]== "u"){
        count= count+1
    }
}
console.log(count)


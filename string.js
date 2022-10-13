// let name = "abhijit"
// console.log(typeof name)

// let marks = 12
// console.log(typeof marks)

// let xyz = true
// console.log(typeof xyz)

// let aa = '455'
// console.log(typeof aa)
//         0 1 2 3 4 5 6

let Name = "abhijit  "

let aa = Name.length
console.log(aa)
console.log(Name.length)

let cc = Name.toUpperCase()
console.log(cc)

let qq= cc.toLowerCase()
console.log(qq)

let a = Name.includes('hi')
console.log(a)

let bb = Name.indexOf('i')
console.log(bb)

let ll = Name.indexOf('t')
console.log(ll)

// let a1 = Name.trim()
// console.log(a1)


let b1 = Name.trimStart()
console.log(b1)

let c1= Name.trimEnd()
console.log(c1)

console.log(Name.startsWith('ab'))
console.log(Name.startsWith('ba'))

let person = "vishwajeet"

for(let i=0;i<=person.length-1;i++){
    //console.log(i)
    console.log(person[i])
}

//reverse the array

// let rev =""

// for(let i=0;i<person.length;i++){
//     rev = person[i]+rev
// }
// console.log(rev)

let city = "Dharmpuri"
let rev=""
for(let i=0;i<city.length;i++){
    rev=city[i]+rev
}
console.log(rev)

let b= city.charAt(4)
console.log(b)

console.log(city.endsWith('ri'))
console.log(city.endsWith('pi'))

let city1 = "delhi"
let cities = "mumbai nashik delhi"

if(cities.indexOf(city1)<0){
    console.log('city is not available')
}
else{
    console.log('city is available')
}


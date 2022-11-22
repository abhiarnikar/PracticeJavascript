let fruits = ['apple','banana','papaya','chiku']

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

console.log(fruits.length)

let aa = fruits.push('orange')
console.log(aa)
console.log(fruits)

let bb= fruits.unshift('watermelon')
console.log(bb)
console.log(fruits)

let dd= fruits.pop()
console.log(dd)
console.log(fruits)

let cc = fruits.shift()
console.log(cc)
console.log(fruits)

let ww = fruits.includes('papaya')
console.log(ww)

let ss = fruits.join(' ')
console.log(ss)

let marks = [11,22,33,44,55]

let a1 = marks.map(function(el,index,array){
    return el*2
})
console.log(a1)

let b1 = marks.filter((el,index,array)=>{
    return el>30
})
console.log(b1)

let c1 = marks.reduce((acc,el,index,array)=>{
        return acc+el
},10)
console.log(c1)

let number = [44,65,85,14,36,55]

let m1 = number.map(function(el,index,arr){
    return el+10
})
console.log(m1)

let f1 = number.filter(function(el,index,arr){
    return el>50
})
console.log(f1)

let r1 = number.filter(function(el,index,arr){
         return el % 2==0
})
console.log(r1)

let arr = [11,22,33,66]

let r2 = arr.reduce(function(acc,el,index,arr){
     
      return el+acc
},0)

console.log(r2)

let names = ['abhijit','krushna','kaivaly','ram']

names.forEach(function(el,index,arr){
    console.log('welcome '+el)
})
//            0  1  2  3   4   5   6
let marks1 = [25,36,45,24,104,204,547]

let xx= marks1.find(function(el,index,arr){
    return el>100
})

console.log(xx)

let zz = marks1.findIndex(function(el,index,arr){
    return el>100
})

console.log(zz)

let vv= marks1.some(function(el,index,arr){
    return el>200
})
console.log(vv)

let mm = marks1.every(function(el,index,arr){
    return el>20
})
console.log(mm)

let mm1 = marks1.every(function(el,index,arr){
    return el>30
})
console.log(mm1)

// concat()

let arr1 = [11,22,33]
let arr2 =[44,55,66]

let pp = arr1.concat(arr2)
console.log(pp)

let hh = arr2.concat(arr1)
console.log(hh)

// reverse()

let countries = ['india','china','nepal','qatar']

let rev = countries.reverse()
console.log(rev)

// sort()

let ss1 = countries.sort()
console.log(ss1)
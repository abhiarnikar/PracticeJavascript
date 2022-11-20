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
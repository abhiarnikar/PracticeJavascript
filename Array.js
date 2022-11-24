let number = [11, 22, 33, 44, 55]

console.log(number[1])
console.log(number[3])

let names = ["abhijit", "vishwa", "ram", "kaivaly", "krushna"]

console.log(names[2])
let a = names.length
console.log(a)

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
    console.log(i)
}

// method push
// add the elements at the last of the array
// return new length of the array

let aa = names.push('devyani')
console.log(aa)
console.log(names)

// method unshift
// add the elements at the start of the array
// return the new length of the array

let bb = names.unshift('vaishnvi')
console.log(bb)
console.log(names)

// method pop
// remove the element from end of the array
// return that element

let cc = names.pop()
console.log(cc)
console.log(names)

// method shift
// remove the element from start of the array
// return that element

let dd = names.shift()
console.log(dd)
console.log(names)

//method--indexOf()
//action-search the for element
//return== return the index if element,else it will return -1

let qq = names.indexOf('krushna')
console.log(qq)

let ss = names.indexOf('devyani')
console.log(ss)

//method--includes()
//action-search the for element
//return== if the element is found returns true else return false

let pp = names.includes('abhijit')
console.log(pp)
let tt = names.includes('vaishnvi')
console.log(tt)

let country = ["India", "USA", "Japan", "China"]

//method-slice()
//action-divides the array based on index
//return-array
//    0      1      2       3
//["India","USA","Japan","China"]
//    -4     -3     -2      -1

//arrayName.slice(startPosition,Endposition(not inclusive))

let arrone = country.slice(2)
console.log(arrone)

let arrtwo = country.slice(1, 3)
console.log(arrtwo)

let arrThree = country.slice(0, 3)
console.log(arrThree)

let arrfour = country.slice(-3, -1)
console.log(arrfour)

let arrfive = country.slice(-4, 3)
console.log(arrfive)

let birthYear = [1990, 1991, 1992, 1994]

let calAge = []

for (let i = 0; i < birthYear.length; i++) {
    let age = 2022 - birthYear[i]
    calAge.push(age)
}

console.log(calAge)

//method-- map()
//action=works with every element of array
//return-new array

//el- current element
//index- index
//arr-[1990,1991,1992,1994]

let ff = birthYear.map(function (el, index, arr) {
    return 2022 - el
})
console.log(ff)

let numbers = [45, 65, 47, 65, 14]

let dd1 = numbers.map(function (el, index, arr) {
    return el + 10
})
console.log(dd1)

//method - filter
//filter-filter out elements based on condition
//return- new array

let numbers1 = [45, 65, 47, 58, 78, 66]

let above55 = []

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 55) {
        above55.push(numbers1[i])
    }
}
console.log(above55)

let ww = numbers1.filter(function (el, index, arr) {
    return el > 55
})
console.log(ww)

//method- reduce
//Adds up every element
//return single

let marks = [12, 36, 14]
let total = 0

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i]
}
console.log(total)

let zz = marks.reduce(function (acc, el, index, arr) {
    return acc + el
}, 18)
console.log(zz)

//method-forEach
//works with every element of array
//return-nothing

for (let i = 0; i < names.length; i++) {
    console.log("welcome " + names[i])
}

names.forEach(function (el, index, arr) {
    console.log("welcome " + el)
})

//method- every
//action- check the condition for each element
//return true if condition is satisfied for all elements else return false

let marks1 = [45, 69, 78, 36, 74]
let yy = marks1.every(function (el, index, arr) {
    return el > 30
})
console.log(yy)

let yx = marks1.every(function (el, index, arr) {
    return el > 40
})
console.log(yx)

//some
//action - check the condition for each element
//return true if condition is satisfied for only


let hh = marks1.some(function (el) {
    return el > 70
})
console.log(hh)

//findIndex

let pp1 = marks1.findIndex(function (el, index, arr) {
    return el > 70
})
console.log(pp1)

//find
let kk = marks1.find(function (el, index, arr) {
    return el > 70
})
console.log(kk)

//filter

let marks2 = [45, 68, 78, 69, 25, 75]

let bb1 = marks2.filter(function (el, index, arr) {
    return el > 60
})
console.log(bb1)

// reverse
let names1 = ["abhi", "vishwa", "krushna", "kaivaly"]
names1.reverse()
console.log(names1)

//sort()

names1.sort()
console.log(names1)

//concat

let a1 = [11,22,33]
let b1 = [44,55,66]

let abc = a1.concat(b1)
console.log(abc)
let bcd = b1.concat(a1)
console.log(bcd)

//join() Adds all the elements of an array into a string, separated by the specified separator string.

let info = ["abhijit","arnikar",7507853623]
let aaa = info.join(' ')
console.log(aaa)

//split() Split a string into substrings using the specified separator and return them as an array.
let info1 = "abhijit arnikar 7507853623"
let bbb = info1.split()
console.log(bbb)

//fill
//           0    1    2    3     4
let year = [1991,1992,1993,1994,1995]
let ddd = year.fill('a',1,3)
console.log(ddd)

//splice
//             0       1        2     3         4
let bikes = ["honda","dukati","hero","shine","scooty"]

let ll = bikes.splice(1,2,"splender","ismart")
console.log(bikes)
console.log(ll)

//arrname.splice(startindex,numberof to be deleted,"replace one","replace two")

let arr1 = [[21,25,14],[36,74,52]]
let arr2 = arr1.flat()
console.log(arr2)
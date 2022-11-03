// setting the default values for parameter

function sub(x=100,y=50){
    console.log(x-y)
}
sub()

// passing array as a parameter to function
// array as a parameter to function and array as return type 

let names = ["abhi","krushna","kaivaly","ram"]

function printNames([a,b,c,d]){
    console.log(b)
    console.log(d)
}
printNames(names)

let marks =[54,65,99,47,25,36,74]

function above50(arr){
    let aa= arr.filter(function(el){
        return el>50
    })
    return aa
}
let bb = above50(marks)
console.log(bb)

// object as parameter to function and object as return type

let student={
    firstName:"abhijit",
    lastName:"arnikar"
}

function addCity(obj){
    obj["city"]= "pune"
    return obj
}

let ab = addCity(student)
console.log(ab)

// function as a parameter to another function

let addition= function(a,b){
    return a+b
}

function add(a,b,fn){
    // let a=70
    // let b=50
    // let fn = function(a,b){
    //     return a+b
    // }
    let z= fn(a,b)
    return z
}
let cd = add(70,50,addition)
console.log(cd)
console.log(addition)

// function as a return type from another function

function mult(a,b){
    console.log(a*b)
    return function(){
        console.log('hello')
    }
}

let ss= mult(6,6)
console.log(ss)
ss()

// Function are called as first class function in javascript
// string as parameter to function and string as return type

function greet(word){
    console.log(`hello ${word}`)
    return `hello ${word}`
}
let q1 = greet('abhijit')
console.log(q1)

// number as parameter to function and number as return type 

function multiplication(j,k){
    return j*k
}
let jk = multiplication(5,5)
console.log(jk)
console.log(typeof jk)

// boolean as a parameter to function and boolean as return type

function canDrive(above18){
    if(above18){
        console.log('can drive')
        return true
    }
    else{
        console.log('can not drive')
        return false
    }
}

let a1 = canDrive(true)
console.log(a1)
let b1 = canDrive(false)
console.log(b1)
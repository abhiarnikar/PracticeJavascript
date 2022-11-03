//function declaration

function cal(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}
cal(25,5)

//function expression

let calculator= function(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x*y)
    console.log(x%y)
}
calculator(100,10)
// Arrow function

let calculator1 = (p,q)=>{
    console.log(p+q)
    console.log(p-q)
    console.log(p*q)
    console.log(p/q)
    console.log(p%q)

}

calculator1(400,25)

//function without parameter and without return type

function add(){
    console.log(10+10)
}
add()
add()

let mul=function(){
    console.log(6*6)
}
mul()
mul()

let add1=()=>{
    console.log(50+50)
}

add1()

// function with parameter and without return type

function add2(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
}
add2(100,10)

let mul1 = function(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
mul1(50,5)

let mul2 = (p,q)=>{
    console.log(p+q)
    console.log(p-q)
    console.log(p*q)
    console.log(p/q)
}
mul2(60,30)

//function with parameter and with return type

function add3(a,b){
    return a+b
}
let aa = add3(100,100)
console.log(aa)
console.log(aa/10)

let mul4 = function(p,q){
    return p*q
}
let bb= mul4(10,10)
console.log(bb)

let sub = (c,d)=>{
    return c-d
}
let zz = sub(60,30)
console.log(zz)
let info = {
    firstName:'abhijit',
    lastName:'arnikar',
    age:29,
    display(){
        console.log(this.firstName+this.lastName)
    }
}

let info1={
    firstName:'kaivaly',
    lastName:'arnikar',
    age:8
}

info.display()

let display1 = info.display

// Above function work behind the scene like below
// display1 = function(){
//     console.log(this.firstName+this.lastName)
// }

display1() // NaN

// above display1() funciton gives the value NAN (not a number)
// to overcome this problem we use 3 methods
// 1) Call 2)Bind 3) Apply

// settng the value for this keyword
// 1) bind()

let display2 = display1.bind(info1)

display2()

let PersonA = {
    firstName:"krushna",
    lastName:'arnikar'
}

let PersonB = {
    firstName:'abhijit',
    lastName:'arnikar'
}

let PersonC = {
    firstName:'kaivlay',
    lastName:'arnikar'
}

let displayC= function(){
    console.log(this.firstName)
}

let a1= displayC.bind(PersonA)
let a2= displayC.bind(PersonB)
let a3= displayC.bind(PersonC)

a1()
a2()
a3()

// 2) call

displayC.call(PersonA)
displayC.call(PersonB)
displayC.call(PersonC)

// 3) Apply

let info2 = {
    firstName:'devyani',
    lastName:'arnikar'
}

let displayD=function(word){
      console.log(`${word} ${this.firstName}`)
}

displayD.call(info2,'Good Morning')
displayD.apply(info2,['Hello'])

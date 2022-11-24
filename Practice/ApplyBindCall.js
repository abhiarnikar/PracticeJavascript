let info= {
    firstName:"abhijit",
    lastName:"arnikar",
    age:12,
    display:function(){
        console.log(this.firstName)
    }
}

let info1={
    firstName:"vishwajeet",
    lastName:"arnikar",
    age:10
}

info.display()

let display1 = info.display
// Above function work behind the scene like below
// display1 = function(){
//     console.log(this.firstName+this.lastName)
// }

display1()

// above display1() funciton gives the value NAN (not a number)
// to overcome this problem we use 3 methods
// 1) Call 2)Bind 3) Apply

// settng the value for this keyword
// 1) bind()



let display2 = display1.bind(info1)
display2()

let PersonA={
    firstName:"kaivaly",
    lastName:"arnikar"
}
let PersonB={
    firstName:"krushna",
    lastName:"arnikar"
}
let PersonC={
    firstName:"ram",
    lastName:"arnikar"
}

let displayA =function(){
    console.log(this.firstName)
}

let a1 = displayA.bind(PersonA)
let b1 = displayA.bind(PersonB)
let c1 = displayA.bind(PersonC)

a1()
b1()
c1()

console.log('**************')

// 2) call

displayA.call(PersonA)
displayA.call(PersonB)
displayA.call(PersonC)

//3) Apply

let Person = {
    firstName:"devyani",
    lastName:"arnikar"
}

let displayD = function(word){
    console.log(`${word} ${this.firstName}`)
}

displayD.call(Person,"Hello")
displayD.apply(Person,['Good Morning'])

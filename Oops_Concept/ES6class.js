// class Person {
//     firstName="abhijit"
//     lastName="arnikar"
//     age=30
//     display(){
//         console.log(this.firstName+this.lastName)
//     }

// }

// let abhi = new Person()
// let vishwa = new Person()
// console.log(abhi)
// console.log(vishwa)
// abhi.display()
// vishwa.display()

//update
// vishwa.firstName="vishwajeet"
// vishwa["lastName"]="Arnikar"
// vishwa.age=29

// console.log(vishwa)
// vishwa.display()

// console.log(abhi)

// ES6 class using constructor

class info {

    constructor(fn,ln,ag){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
    }

    display(){
        console.log(this.firstName+" "+this.age)
    }
}

let krushna = new info("krushna",'anrikar',4)
let kaivaly = new info('kaivaly','arnikar',7)

console.log(krushna)
krushna.display()
console.log(kaivaly)
kaivaly.display()

//using get and set function

class Person1{

    setFirstname(fn){
        this.firstName=fn
    }

    setLastname(ln){
        this.lastName=ln
    }

    setAge(ag){
        this.age=ag
    }

    
    getFirstname(){
        console.log(this.firstName)
    }

    getLastname(){
        console.log(this.lastName)
    }

    getAge(){
        console.log(this.age)
    }
}

let ram = new Person1()

console.log(ram)

ram.setFirstname('Ram')
ram.setLastname('arnikar')
ram.setAge(2)

console.log(ram)

ram.getFirstname()
ram.getLastname()
ram.getAge()

// get and set as a method

class Person2 {

    set setFirstname(fn){
        this.firstName=fn
    }

    set setLastname(ln){
        this.lastName=ln
    }

    set setAge(ag){
        this.age=ag
    }

    get getAge(){
        return this.age
    }

    get getFirstname(){
        return this.firstName
    }

    get getLastname(){
        return this.lastName
    }
}

let dev = new Person2()

console.log(dev)

dev.setFirstname="devayni"
dev.setLastname="arnikar"
dev.setAge=24

console.log(dev)

console.log(dev.getAge)
console.log(dev.getFirstname)
console.log(dev.getLastname)
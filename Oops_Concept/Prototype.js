function Person(firstName,lastName){
       
    this.firstName=firstName
    this.lastName=lastName
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)
    // }
}

let abhi = new Person("abhijit","arnikar")
console.log(abhi)

let vishwa = new Person('Vishwajeet',"arnikar")
console.log(vishwa)

// every object has __proto__ == Parent.Proptoype

console.log(abhi.__proto__ == Person.prototype)

Person.prototype.display=function(){
    console.log(this.firstName+this.lastName)
}

abhi.display()
vishwa.display()

Person.prototype.language = "Marathi"

console.log(abhi.language)
console.log(vishwa["language"])

console.log(abhi instanceof Person)
console.log(vishwa instanceof Person)

console.log(abhi.hasOwnProperty('firstName'))
console.log(abhi.hasOwnProperty('lastName'))
console.log(abhi.hasOwnProperty('language'))

// Above 37 console is false because language is not its own property of abhi or vishwa
// this is Person prototype property and it inherits in the abhi and vishwa

let names = ['abhi','vishwa','ram']

console.log(names instanceof Array)
names.push('krushna')
console.log(names)

console.log(names.__proto__ == Array.prototype)

Array.prototype.greet=function(){
    console.log('hello')
}

names.greet()

class Person1{
      
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
        // this.display=function(){
        //     console.log(this.firstName+this.lastName)
        // }
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
    
}

let krushna = new Person1("Krushna","arnikar")

console.log(krushna)
krushna.display()
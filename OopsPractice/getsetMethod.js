class info {
    constructor(fn, ln, skl) {
        this.firstName = fn
        this.lastName = ln
        this.skills = skl
    }
    display() {
        console.log(this.skills)
    }
}

let abhi = new info('abhijit', 'arnikar', ['java', 'python'])
console.log(abhi)
abhi.display()

// Setting the value using method

class Person {

    setFullname(fn) {
        this.fullName = fn
    }

    getFullname() {
        return this.fullName
    }

    setCity(ct) {
        this.city = ct
    }

    getCity() {
        return this.city
    }
}

let krushna = new Person()
console.log(krushna)
krushna.setFullname('krushna arnikar')
krushna.setCity('pune')

console.log(krushna.getFullname())
console.log(krushna.getCity())
console.log(krushna)


// Setting the value using function

class Student {
    set Fname(fn) {
        this.fullName = fn
    }

    get Fname() {
        return this.fullName
    }

    set Age(ag){
        this.age=ag
    }

    get Age(){
        return this.age
    }
}

let kaivaly = new Student()
console.log(kaivaly)

kaivaly.Fname='kaivaly'
kaivaly.Age=8

console.log(kaivaly)

console.log(kaivaly.Fname)
console.log(kaivaly.Age)
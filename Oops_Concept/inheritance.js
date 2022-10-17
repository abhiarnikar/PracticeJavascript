// program1
class student{
    firstName="abhijit"
    lastName="arnikar"
    age=27
    display(){
        console.log(this.firstName+this.lastName)
    }
}

let abhi = new student()
console.log(abhi.firstName)
console.log(abhi.lastName)
console.log(abhi.age)
abhi.display()

class teacher extends student{
    salary=1000
    displaysalary(){
       console.log(this.salary)
    }
}

let abhijit = new teacher()

console.log(abhijit.salary)
console.log(abhijit.firstName)
console.log(abhijit.lastName)
console.log(abhijit.age)
abhijit.display()
abhijit.displaysalary()


class Professor extends teacher{
    specail="mathematics"
    displayspecial(){
        console.log(this.specail)
    }
}

let abhijit1 = new Professor()

console.log(abhijit1.specail)
console.log(abhijit1.firstName)
console.log(abhijit1.lastName)
console.log(abhijit1.age)
abhijit1.display()
abhijit1.displaysalary()
abhijit1.displayspecial()

// program 2


class student1{

    constructor(fn,ln,ag){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
}

class teacher1 extends student1{

    constructor(fn,ln,ag,sal){
        super(fn,ln,ag)
        this.salary=sal
    }

    displaysalary(){
        console.log(this.salary)
    }
}

class Professor1 extends teacher1{

    constructor(fn,ln,ag,sal,spec){
        super(fn,ln,ag,sal)
        this.specail=spec
    }
    displayspecial(){
        console.log(this.specail)
    }
}


let krushna = new Professor1("Krushna","arnikar",4,10000,"maths")

console.log(krushna.firstName)
console.log(krushna.lastName)
console.log(krushna.age)
console.log(krushna.salary)
console.log(krushna.specail)

krushna.displaysalary()
krushna.display()
krushna.displayspecial()
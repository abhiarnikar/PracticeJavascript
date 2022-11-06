// object create methods

// 1)object literal

let info = {
    firstName:"abhijit",
    lastName:"arnikar",
    age:30,
    city:"pune",
    display:function(){
        console.log(this.firstName+" "+this.city)
    }
}
console.log(info)
info.display()

// 2)function constructor

function person(fn,ln,ag,ct){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.city=ct
    this.display=function(){
        console.log(this.city+" "+this.age)
    }
}

let abhi = new person("abhijit",'arnikar',30,'mumbai')
console.log(abhi)
abhi.display()

let devyani = new person('Devyani','arnikar',27,'pune')
console.log(devyani)
devyani.display()

devyani.language="marathi"
console.log(devyani)
console.log(abhi)

// same as above

let vehicle = function(cl,tp){
    this.color=cl
    this.type=tp
    this.display=function(){
        console.log(this.color)
    }
}

let honda = new vehicle('black','shine')
console.log(honda)
honda.display()

// 3) 

class student{
    constructor(fn,ln,ct,ag){
        this.firstName=fn
        this.lastName=ln
        this.city=ct
        this.age=ag
        this.display=function(){
            console.log(this.firstName)
        }
       
    }
    
}

let krushna = new student('krushna','arnikar','pune',4)
console.log(krushna)
krushna.display()

let ram = new student('Ram','arnikar','mumbai',8)
console.log(ram)
ram.display()

// same as above

let info1 = class{
       constructor(fn,ln,skl){
        this.firstName=fn
        this.lastName=ln
        this.skills=skl
        this.display=function(){
            console.log(this.skills)
        }
    }
}

let kaivaly = new info1('kaivaly','arnikar',['python','java'])
console.log(kaivaly)
kaivaly.display()

// 4) Object.create()

let personA = {
    init:function(fn,ln,ag){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.display=function(){
            console.log(this.lastName)
        }
    }
}

let vishwa = Object.create(personA)
vishwa.init('vishwajeet','arnikar',29)
console.log(vishwa)
vishwa.display()


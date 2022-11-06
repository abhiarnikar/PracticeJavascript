function Person(fn,ln,skl){
       this.firstName=fn
       this.lastName=ln
       this.skills=skl
    //    this.display=function(){
    //     console.log(this.skills)
    //    }
}

let abhi = new Person('abhijit','arnikar',['javascript','cypress'])
console.log(abhi)
let dev =  new Person('devyani','arnikar',['java','css'])
console.log(dev)

Person.prototype.display=function(){
    console.log(this.skills)
}

console.log(abhi.__proto__==Person.prototype)
console.log(dev.__proto__==Person.prototype)

abhi.display()
dev.display()

Person.prototype.city="pune"
console.log(abhi.city)
console.log(dev.city)

console.log(abhi.hasOwnProperty('city'))
console.log(abhi.hasOwnProperty('firstName'))

function vehicle(cl,ty){
    this.color=cl
    this.type=ty
}

let honda = new vehicle('white','shine')
console.log(honda)

vehicle.prototype.display=function(){
    console.log(this.color)
}

honda.display()

console.log(honda.__proto__==vehicle.prototype)
class grandfather{
    firstName="narayan"
    lastName="arnikar"
    display(){
        console.log(this.firstName+this.lastName)
    }
}

class father extends grandfather{
    FfirstName="ashok"
    displayFather(){
        console.log(this.FfirstName+this.firstName+this.lastName)
    }
}

class son extends father{
    SfirstName="abhijit"
    displaySon(){
        console.log(this.SfirstName+this.FfirstName+this.lastName)
    }
}

let abhi = new son()
console.log(abhi)

console.log(abhi.firstName)
console.log(abhi.lastName)
console.log(abhi.FfirstName)
console.log(abhi.SfirstName)

abhi.display()
abhi.displayFather()
abhi.displaySon()

let ashok = new father()
console.log(ashok.firstName)
console.log(ashok.lastName)
console.log(ashok.FfirstName)
ashok.display()
ashok.displayFather()

let narayan = new grandfather()
narayan.display()
console.log(narayan.firstName)
console.log(narayan.lastName)

class Student{

    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    display(){
        console.log(this.firstName)
    }
}

class info extends Student{

}

let krushna= new info('krushna','arnikar')
console.log(krushna)
console.log(krushna.firstName)
console.log(krushna.lastName)
krushna.display()

class Grandfather{
    constructor(gfn,gln){
        this.firstName=gfn
        this.lastName=gln
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
}

class Father extends Grandfather{

    constructor(gfn,gln,Ffn){
        super(gfn,gln)
        this.FfirstName=Ffn
    }
    displayFname(){
        console.log(this.FfirstName+this.firstName+this.lastName)
    }
}

class Son extends Father{
    constructor(gfn,gln,Ffn,Sfn){
        super(gfn,gln,Ffn)
        this.SfirstName=Sfn
    }
    displaySname(){
        console.log(this.SfirstName+this.FfirstName+this.lastName)
    }
}

let kaivaly = new Son('ashok','arnikar','abhijit','kaivaly')

kaivaly.display()
kaivaly.displayFname()
kaivaly.displaySname()

class FatherA{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayA(){
        console.log(this.firstName+this.lastName)
    }
}

class SonA extends FatherA{
    constructor(fn,ln,Sa){
        super(fn,ln)
        this.SfirstName=Sa
    }

    displaySA(){
        console.log(this.SfirstName+this.firstName+this.lastName)
    }
}
class SonB extends FatherA{
    constructor(fn,ln,Sb){
        super(fn,ln)
        this.SfirstName=Sb
    }

    displaySB(){
        console.log(this.SfirstName+this.firstName+this.lastName)
    }
}

let kaivalyA = new SonA('abhijit','arnikar','kaivaly')

kaivalyA.displayA()
kaivalyA.displaySA()

let krushnaB = new SonB('abhijit','arnikar','krushna')

krushnaB.displayA()
krushnaB.displaySB()
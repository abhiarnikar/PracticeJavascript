// mutlilevel inheritance

class grandFather{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
}

class Parent extends grandFather{

    constructor(fn,ln,pfn){
        super(fn,ln)
        this.pfirstName=pfn
    }

    displayPname(){
        console.log(this.pfirstName+this.firstName+this.lastName)
    }
}

class Son extends Parent{

    constructor(fn,ln,pfn,sfn){
        super(fn,ln,pfn)
        this.sfirstName=sfn
    }

    displaySname(){
        console.log(this.sfirstName+this.pfirstName+this.lastName)
    }
}

let abhi = new Son("Narayan","Arnikar","Ashok","Abhijit")

console.log(abhi.firstName)
console.log(abhi.lastName)
console.log(abhi.pfirstName)
console.log(abhi.sfirstName)

abhi.display()
abhi.displayPname()
abhi.displaySname()

class father{

    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }

    displayfname(){
        console.log(this.firstName+this.lastName)
    }
}

class SonA extends father{

    constructor(fn,ln,safn){
        super(fn,ln)
        this.safirstName=safn
    }

    displaySonA(){
        console.log(this.safirstName+this.firstName+this.lastName)
    }
}

class SonB extends father{

    constructor(fn,ln,sbfn){
        super(fn,ln)
        this.sbfirstName=sbfn
    }

    displaySonB(){
        console.log(this.sbfirstName+this.firstName+this.lastName)
    }
}

let kaivaly = new SonA('Abhijit','Arnikar','kaivaly')

kaivaly.displaySonA()

let krushna = new SonB('Abhijit','Arnikar','Krushna')

krushna.displaySonB()
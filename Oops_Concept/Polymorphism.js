//Polymorphism

class Addition{

    add(x,y){
        console.log(x+y)
    }

    add(x,y,z){
        console.log(x+y+z)
    }

    add(x,y,z,a){
        console.log(x+y+z+a)
    }
}

let aa = new Addition()
aa.add(3,5) //NaN
aa.add(14,25,65) //NaN
aa.add(11,2,33,45) // 91

// Method overloading
//same class,same method Name,different signature

class Addition1{

    Addition1(a,b,c,d){

        if(a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }

        else if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }

        else if(a != undefined && b != undefined){
            console.log(a+b)
        }
    }
}

let xx = new Addition1()
xx.Addition1(14,65)
xx.Addition1(45,14,36)
xx.Addition1(14,36,52)

// Method overriding
// Different class, same method,same signature

class RBI{

    loan(){
        console.log('i am loan from RBI bank')
    }

    save(){
        console.log('i am save from RBI bank')
    }
}

class SBI extends RBI{

    loan(){
        console.log('i am loan from SBI')
        super.loan()
    }

    save(){
        console.log('i am save from SBI')
        super.save()
    }
}

let pune = new SBI()

pune.save()
pune.loan()

//static keyword

class Person{
    static country = "India"

    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }

    display(){
        console.log(this.firstName+this.lastName)
    }
    static displayCountryname(){
        console.log(Person.country)
    }
}

console.log(Person.country)
Person.displayCountryname()

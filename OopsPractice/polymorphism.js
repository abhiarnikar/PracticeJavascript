// polymorphism
// method overloading
// same class, same method name,different signature

class addition{

    add(a,b){
        console.log(a+b)
    }

    add(a,b,c){
        console.log(a+b+c)
    }

    add(a,b,c,d){
        console.log(a+b+c+d)
    }
}

let a = new addition()
a.add(2,3)
a.add(5,6,7)
a.add(1,4,5,6)

class additionA{
     
    add(a,b,c,d){

        if(a != undefined && b != undefined && c != undefined && d != undefined ){
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

let p = new additionA()
p.add(2,6)
p.add(5,6,10)
p.add(10,14,25)

// method overriding
// different class, same method name,same signature

class RBI{

    loan(){
        console.log('the loan percantage is 10')
    }
    
    save(){
        console.log('the save percantage is 5')
    }
}

class SBI extends RBI{

    loanS(){
        console.log('the loan percantage is SBI')
        super.loan()
    }

    saveS(){
        console.log('the save percantage is SBI')
        super.save()
    }
}
class BOI extends RBI{

    loanB(){
        console.log('the loan percantage is BOI')
        super.loan()
    }

    saveB(){
        console.log('the save percantage is BOI')
        super.save()
    }
}

let pune = new SBI()
pune.loanS()
pune.saveS()
pune.loan()

let mumbai = new BOI()
mumbai.loanB()
mumbai.saveB()
mumbai.save()
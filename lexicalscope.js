function info(){
    firstName="abhijit",
    lastName="arnikar",
    console.log(this.firstName+this.lastName)

    function info1(){
        console.log(this.firstName+this.lastName)
    }
    info1()
}
info()

//lexical scope

function addition(){
    let a=10
    let b=5
    console.log(a+b)

    function additionA(){
        let c=5
        let d=6
        console.log(a+b+c+d)
        function additionB(){
            console.log(a+b)
            console.log(c+d)
        }
        additionB()
    }
    additionA()
}
addition()

// actual difference between arrow function and function expression/function declaration

var firstName="kaivaly"
var lastName="arnikar"

let student={
     
     firstName:"krushna",
     lastName:"arnikar",

     display:function(){
        console.log(this.firstName+" "+this.lastName)

        function display1(){
            console.log(this.firstName+" "+this.lastName) //
        }
        display1()
     }

}
student.display()

let student1={
     
    firstName:"krushna",
    lastName:"arnikar",

    display:function(){
       console.log(this.firstName+" "+this.lastName)

       let display1=()=>{
           console.log(this.firstName+" "+this.lastName) //
       }
       display1()
    }

}
student1.display()

let student2={
     
    firstName:"krushna",
    lastName:"arnikar",

    display:()=>{
       console.log(this.firstName+" "+this.lastName)

       function display1(){
           console.log(this.firstName+" "+this.lastName) //
       }
       display1()
    }

}
student2.display()

//cloure
// closure is function along with its lexical environment


function init(){
    var name="abhijit"

    function displayName(){
        console.log(name)
    }
    name="kaivaly"
    return displayName
}

let a= init()
a()

function subtration(){
    let a=10
    let b=5

    return function(){
        console.log(a-b)
    }
}
let a2 = subtration()
a2()

function multification(a,b){

    // let a = 10
    // let b = 3
   //console.log(a*b)
    return function(){
        console.log(a*b)
    }
}

let A2 = multification(12,10)
A2()
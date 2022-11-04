let student = "abhi"
let students = ["vishwa","ram","krushna","kaivaly"]

let aa= [student,...students]
console.log(aa)
let bb= [...students,student]
console.log(bb)

let arrOne =[1,2,3,4]
let arrTwo = [5,6,7,8]

let abc = arrTwo.reduce(function(acc,el){
    return acc.concat(el)
},arrOne)
console.log(abc)

let obj1 = {
    firstname:"arnikar",
    age:30
}

let obj2 = {
    lastName:"arnikar",
    city:"pune"
}

let info = {...obj1,...obj2}
console.log(info)

let person = {
    firstName:"kaivaly",
    lastName:"arnikar",
    city:"pune",
    age:7
}

function info1({firstName,...personA}){
    console.log(firstName)
    console.log(personA)
}
info1(person)
let x = [25,36,45,78]
let y = x
console.log(y)
y[2]=50
console.log(x)
console.log(y)

let numbers = [14,96,65,45]

function add(arr){
    arr[2]=100
    console.log(arr)
}
//console.log(numbers)
add(numbers)
console.log(numbers)

let person={
    firstName:"abhijit",
    lastName:"arnikar"
}
function changeName(obj){
    obj.firstName="krushna"
    return obj
}
changeName(person)
console.log(person)

let nums = [45,65,36]

function printarray(arr,fn){
    let newArray = []
    for(let i=0;i<arr.length;i++){
        let newElement = fn(arr[i])
        newArray.push(newElement)
    }
    return newArray

}

let mult5 = function(el){
    return el*5
}

let aa= printarray(nums,mult5)
console.log(aa)

let birthYear = function(el){
    return 2022-el
}

let bb= printarray(nums,birthYear)
console.log(bb)

let add100 = function(el){
    return el+100
}
let cc= printarray(nums,add100)
console.log(cc)

let info = "my name abhijit arnikarss"
let abc = info.split(" ")
console.log(abc)

let word = abc.reduce(function(acc,el){
    if(acc.length<el.length){
        return el
    }
    else{
        return acc
    }
}," ")
console.log(word)
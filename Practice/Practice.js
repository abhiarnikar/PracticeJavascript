
function word(str){
    let rev=''
    for(let i=0;i<str.length;i++){
        rev= str[i]+rev
    }
    console.log(rev)
}
word('abhijit')
word('sachin')


let info = "my name abhijit arnikar"

let aa = info.split(' ').reverse().join(' ')
console.log(aa)

function word1(str){
    let palindrome= str.split().reverse().join()
    console.log(str===palindrome)
}
word1('madam')
word1('reviver')

let word2= "devyanisfsdgsfg"
let count =[]

for(let i=0;i<word2.length;i++){
    if(count[word2[i]]){
        count[word2[i]]=count[word2[i]]+1
    }
    else{
        count[word2[i]]=1
    }
}
console.log(count)

let person ={
    firstName:"abhijit",
    lastName:"arnikar",
    city:"pune",
    rollNo:14
}

console.log(person.firstName)
console.log(person['lastName'])
console.log(person.city)
console.log(person['rollNo'])
person.firstName='vishwa'
console.log(person)
//             0           1          2         3       4
let names = ['abhijit','vishwajeet','sachin','sehwag','viru']

let a1 = names.slice(1,3)
console.log(a1)
let b1 = names.splice(0,2)
console.log(b1)

let pro = new Promise((resolve, reject) => {
    let a =10
    let b =5
    if(a>b){
        resolve('true')
    }
    else{
        reject('false')
    }
}).then(function(str){
    console.log('comparision is correct',str)
},function(str){
    console.log('comparision is wrong',str)
})

let pro1 = new Promise((resolve, reject) => {
    let a =10
    let b =5
    if(a<b){
        resolve('true')
    }
    else{
        reject('false')
    }
}).then(function(str){
    console.log('comparision is correct',str)
},function(str){
    console.log('comparision is wrong',str)
})

function add(){
    setTimeout(function(){
        console.log('hello')
    },2000)

    setTimeout(function(){
        console.log('by')
    },1000)
}
add()
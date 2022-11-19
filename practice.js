// //convert the string into array
// let a = "my name is abhijit"
// console.log(a)
// let aa=  a.split(" ")
// console.log(aa)

// //reverse the array
// aa.reverse()
// console.log(aa)

// //convert the array into string

// let cc = aa.toString();
// console.log(cc)

// let dd = aa.join(' ')
// console.log(dd)

// // reverse the string 

// let names = "devyani abhijit"
// let rev =""

// for(let i=0;i<names.length;i++){
//     rev= names[i]+rev
// }
// console.log(rev)

// let upper = names.toUpperCase()
// console.log(upper)

// let lower = upper.toLowerCase()
// console.log(lower)

// let names1 = (str)=>{

//     let palindrome= str.split().reverse().join()
//     console.log(str===palindrome)
// }
// names1('madam')
// names1('reviver')


// name1= 'abhijit'

// let rev1 = ''

// for(let i=0;i<name1.length;i++){
//     rev1 = name1[i]+rev1

// }

// console.log(rev1)

let a = 'devyani'
let rev = ''

for(let i=0;i<a.length;i++){
   rev= a[i]+rev
}
console.log(rev)

let info = 'i live in dharmpuri'

let word = info.split(" ")
console.log(word)

let cc = word.reverse()
console.log(cc)

let dd = cc.join(" ")
console.log(dd)

function abhi(str){
    let palindrome = str.split().reverse().join()
    console.log(palindrome === str)
}
abhi('madam')
abhi('reviver')

// let pro = new Promise((resolve, reject) => {
//     let a =10
//     let b = 5
//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// })
// .then(function(str){
//     console.log('comparision is correct',str)
// },function(str){
//     console.log('comparision is wrong',str)
// })

// let pro1 = new Promise((resolve, reject) => {
//     let a =10
//     let b = 5
//     if(a==b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// })
// .then(function(str){
//     console.log('comparision is correct',str)
// },function(str){
//     console.log('comparision is wrong',str)
// })

// let pro2 = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 10

//     if(a !== b){
//         reject('false')
       
//     }

//     else{

//         resolve('True')
//     }
// })

// pro2.then(function(str){  // This is Resolve function
//     console.log("cmparision is correct",str)
// },function(str){      // This is reject function
//     console.log('comparision is wrong',str)
// })

class person{
    constructor(fn,ln,skl){
        this.firstName= fn
        this.lastName=ln
        this.skills=skl
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
}

let krushna = new person('krushna','arnikar',['python','css'])
console.log(krushna)

let name = "dev123yani"

let rev1 = ''
for(let i=0;i<name.length;i++){
    if(name[i]==String){
        rev1=name[i]+rev1
    }
    else{
        rev1=name[i]
    }
}
console.log(rev1)
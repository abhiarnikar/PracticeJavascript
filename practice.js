//convert the string into array
let a = "my name is abhijit"
console.log(a)
let aa=  a.split(" ")
console.log(aa)

//reverse the array
aa.reverse()
console.log(aa)

//convert the array into string

let cc = aa.toString();
console.log(cc)

let dd = aa.join(' ')
console.log(dd)

// reverse the string 

let names = "devyani abhijit"
let rev =""

for(let i=0;i<names.length;i++){
    rev= names[i]+rev
}
console.log(rev)

let upper = names.toUpperCase()
console.log(upper)

let lower = upper.toLowerCase()
console.log(lower)

let names1 = (str)=>{

    let palindrome= str.split().reverse().join()
    console.log(str===palindrome)
}
names1('madam')
names1('reviver')


name1= 'abhijit'

let rev1 = ''

for(let i=0;i<name1.length;i++){
    rev1 = name1[i]+rev1

}

console.log(rev1)
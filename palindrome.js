// palindrome (method 1)

let word = (str)=>{
    let ispalindrome = str.split().reverse().join()
    console.log(str===ispalindrome)
}
word("madam")
word('reviver')

// method 2

function names(str){
    let rev = ''
    for(x of str){
        rev = x+rev
    }
    console.log(str===rev)
}
names('madam')
names('aba')

// let aaa = "i am study cypress"

// let bb = aaa.split(" ").reverse().join(" ")
// console.log(bb)

let Name = (str)=>{

    let palindrome = str.split().reverse().join()
    console.log(str===palindrome)
}

Name('madam')
// let a = Math.random()
// console.log(a) // output 0-0.99

// let b= Math.random()*7
// console.log(b) // 0-6.99

// let c = Math.floor(Math.random()*8)
// console.log(c) // 0-7

// let d = Math.floor(Math.random()*9)+1
// console.log(d) //1-9

// let e = Math.floor(Math.random()*10)+2
// console.log(e) //2-11

let randomNumber = Math.floor(Math.random() * 7) + 1
console.log(randomNumber) // 1-7



let userinput = Number(prompt('please guess the number between 1 to 7'))

if (randomNumber == userinput) {
    console.log('your guess is correct')
}

else{
    console.log('your guess is incorrect')
}
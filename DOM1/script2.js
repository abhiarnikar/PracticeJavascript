let Button = document.querySelector('#ChangeColor')
let inputA = document.querySelector('input')
let heading =document.querySelector('h1')

console.log(Button)
console.log(inputA)
console.log(heading)

Button.addEventListener('click',function() {
    let colorText = inputA.value
    heading.style.color=colorText
    inputA.value=""
})
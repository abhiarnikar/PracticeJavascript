let buttonA = document.querySelector('button')

let Name= document.querySelector('#one')
let heading = document.querySelector('h1')

buttonA.addEventListener('dblclick',function(){
    Name.textContent="kaivaly"
    heading.style.color="red"
})
//<h1 id="one" class="two" name="three">Heading One</h1>

let tagname = document.querySelector('h1')
let id = document.querySelector('#one')
let byclass = document.querySelector('.two')
let comman = document.querySelector('h1[name="three"]')

console.log(tagname)
console.log(id)
console.log(byclass)
console.log(comman)

tagname.addEventListener('dblclick',function(){
    tagname.style.color="yellow"
})
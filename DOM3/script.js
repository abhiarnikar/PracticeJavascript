{/* <h1>Welcome</h1>
    <p id="name">Abhijit</p>
    <h3 id="one" class="two">HeadingOne</h3>
    <ul>
        <li class="fruit">Apple</li>
        <li class="fruit">Mango</li>
        <li class="fruit">Chiku</li>
        <li class="fruit">Banana</li>
    </ul> */}

let HeadingOne = document.querySelector('h1')
let Name = document.querySelector('#name')
let listFirstelement = document.querySelector('.fruit')
let alllielement = document.querySelectorAll('fruit') // nodeList

console.log(HeadingOne)
console.log(Name)
console.log(listFirstelement)
console.log(alllielement)

//Retrieve Elements

let Name2 = document.getElementById('name')
let allli = document.getElementsByClassName('fruit') //html collection
let byName= document.getElementsByName('A') //nodelist
let byTagname = document.getElementsByTagName('li') //html collection

console.log(Name2)
console.log(allli)
console.log(byName)
console.log(byTagname)

// allLi ---- html collection
// allLiELements - node list
// working with style and attribute
// <h3 id="one" class="two" >HeadingThree</h3>

// class , id , name

let headingThree = document.querySelector('h3')
console.log(headingThree.classList)

headingThree.classList.add('X','Y')
headingThree.classList.remove('X')
headingThree.classList.toggle('X') //Add
headingThree.classList.toggle('X') // remove

headingThree.setAttribute('Y','new')

let p = headingThree.getAttribute('Y')
console.log(p)
// index.html  ==> html hypertext markup language
// style.css   ==> cascading style sheet
// script.js   ==> javascript

// attach style file to html page
// attach script file to html page

// client --- html    css   javascript 

//html --- text
//css  ---- design 
//js   ----- change soemthing on user action javascript

//<p id="Highway" class="solapur" name="Dharmpuri">village</p>

// by tagname

let aa = document.querySelector('p')
console.log(aa)

// by id

let bb = document.querySelector('#Highway')
console.log(bb)

// by class

let cc= document.querySelector('.solapur')
console.log(cc)

//by comman formula

let dd = document.querySelector('p[class="solapur"]')
console.log(dd)

let hh = document.querySelector('h1')

document.querySelector('h1').addEventListener('dblclick',function(){
            hh.style.color="red"
})
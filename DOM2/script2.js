let Button = document.querySelector('#Addbutton')
let ulList = document.querySelector('ul')
let Input = document.querySelector('input')

Button.addEventListener('click',function(){
    let text= Input.value
    let NewElement= document.createElement('ul')
    NewElement.textContent=text
    CreateButton(NewElement)
    ulList.appendChild(NewElement)
    Input.value=""
})


// <button class="Remove">Remove</button>
// <button class="Up">Up</button>
// <button class="down">Down</button>

ulList.addEventListener('click',function(){
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)

    if(event.target.tagName ==="BUTTON"){
        if(event.target.className == "remove"){
           let li = event.target.parentElement
           let ul = li.parentElement
           ul.removeChild(li)
        }

        else if(event.target.className === "up"){
           let li = event.target.parentElement
           let ul= li.parentElement
           let previ = li.previousElementSibling
           if(previ){
               ul.insertBefore(li,previ) 
           }
        }
        else if(event.target.className === "down"){
           let li = event.target.parentElement
           let ul= li.parentElement
           let nextLi = li.nextElementSibling
           if(nextLi){
               ul.insertBefore(nextLi,li) 
           }
        }
   }
})

function CreateButton(li){
     
   let remove = document.createElement('button') //<button></button>
   remove.textContent="Remove"//<button>Remove</button>
   remove.className="remove" // <button class = "remove">Remove</button>
   li.appendChild(remove)
    
   let up = document.createElement('button') //<button></button>
   up.textContent="Up"
   up.className="up"
   li.appendChild(up)

   let down = document.createElement('button') //<button></button>
   down.textContent="Down"
   down.className="down"
   li.appendChild(down)

}


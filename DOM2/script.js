let Button = document.querySelector('button')
let Input = document.querySelector('input')
let ulList= document.querySelector('ul')

Button.addEventListener('click',function(){
      let text = Input.value
      let newList = document.createElement('ul')
      newList.textContent=text
      ulList.appendChild(newList)
      Input.value=""

})
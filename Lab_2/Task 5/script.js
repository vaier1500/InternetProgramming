const body = document.querySelector('body')
body.style.fontFamily = 'Arial'

const userName = document.querySelector('#name')
userName.innerText += 'Vadym'

const userLastname = document.querySelector('#lastname')
userLastname.innerText += 'Kondra'

const userHometown = document.querySelector('#hometown')
userHometown.innerText += 'Fastiv'

const infoCard = document.querySelector('ul')
const fields = infoCard.querySelectorAll('li')
fields.forEach(field =>{
    field.classList += 'my-list-item'
})
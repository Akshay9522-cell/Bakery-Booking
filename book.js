

const bookBtn=document.getElementById('btn')

bookBtn.addEventListener('click',myBook)

function myBook(){

    
const name=document.getElementById('firstname').value
const last=document.getElementById('lastname').value
const email=document.getElementById('email').value
const number=document.getElementById('number').value

  localStorage.setItem('name',name)
  localStorage.setItem('last',last)
  localStorage.setItem('email',email)
  localStorage.setItem('number',number)
    alert('Your treat is booked')
}

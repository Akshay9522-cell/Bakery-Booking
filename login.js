const name=document.getElementById('name').value
const nmbr=document.getElementById('number').value
const email=document.getElementById('email').value

const login=document.getElementById('loginbtn')

login.addEventListener('click',myLogin)

function myLogin(){
const name=document.getElementById('name').value
const nmbr=document.getElementById('number').value
const email=document.getElementById('email').value

  localStorage.setItem("name",name)
  localStorage.setItem("numbr",nmbr)
  localStorage.setItem("email",email)
  alert('data save')
}
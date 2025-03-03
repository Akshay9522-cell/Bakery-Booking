
const login=document.getElementById('loginbtn')

login.addEventListener('click',myLogin)

const anchor = document.createElement('a');

anchor.target = '_blank';
document.body.appendChild(anchor);

function myLogin(){
 
const email=document.getElementById('email').value

 
  if(email==localStorage.getItem('email')){
    anchor.href = '/menu.html';
    
  }


alert('data save')
 
  
}
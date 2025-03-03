
const regisBtn=document.getElementById('regis')

regisBtn.addEventListener('click',myRegis)

function myRegis(){
    
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const pass=document.getElementById('pass').value

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("pass",pass)

    
}
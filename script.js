
const show=document.getElementById('show')
const click=document.getElementById('click')

const phone=document.getElementById('phn')
const email=document.getElementById('eml')
const website=document.getElementById('web')

click.addEventListener('click',Bakery)

async function Bakery() {
     
    let api="http://localhost:2000/bakery"
    let response=await fetch(api)

    let data= await response.json()

    console.log(data.products[0])

  phone.innerHTML=data.products[0]
//   email.innerHTML=data.contact.email
//   website.innerHTML=data.contact.website
   


}
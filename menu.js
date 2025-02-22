const happe=document.getElementById('happe')
const appe=document.getElementById('appe')

const appebtn=document.getElementById('appebtn')


appebtn.addEventListener('click',myAppe)

async function myAppe(){
    alert('hii akki')

    let api='http://localhost:3000/appetizers'

    let res=await fetch(api)
    let data=await res.json()

    console.log(data)

    let table=`<table id='table'>
    <tr>
    <th>id</th>
    <th>name</th>
    <th>price</th>
    <th>description</th>
    <th>Book</th>
    </tr>`

data.map((e)=>{
table+= `<tr>
     <td>${e.id}</td>
     <td>${e.name}</td>
     <td>${e.price}</td>
     <td>${e.description}</td>
     <td><a href="" > <img src="/images/book.jpg" width="30" height="30" ></a></td>

</tr>`
})
table+="</table>"
appe.innerHTML=table
happe.innerHTML="!Now lets Choose your delicious appetizers"
appebtn.style.display="none"

}


const course=document.getElementById('mainCourse')

const btn=document.getElementById('mainbtn')


btn.addEventListener('click',myCourse)

async function myCourse(){
       
    let api='http://localhost:3000/main_courses'

    let res=await fetch(api)
    let data=await res.json()

    console.log(data)

    let table=`<table id='table'>
    <tr>
    <th>id</th>
    <th>name</th>
    <th>price</th>
    <th>description</th>
    <th>Book</th>
    </tr>`

data.map((e)=>{
table+= `<tr>
     <td>${e.id}</td>
     <td>${e.name}</td>
     <td>${e.price}</td>
     <td>${e.description}</td>
     <td><a href="" > <img src="/images/book.jpg" width="30" height="30" ></a></td>

</tr>`
})
table+="</table>"
course.innerHTML=table

}

   //deserts

const dsrt=document.getElementById('desserts')

const btndsrt=document.getElementById('dsrtbtn')


btndsrt.addEventListener('click',myDesserts)

async function myDesserts(){
    alert('hii akki')

    let api='http://localhost:3000/desserts'

    let res=await fetch(api)
    let data=await res.json()

    console.log(data)

    let table=`<table id='table'>
    <tr>
    <th>id</th>
    <th>name</th>
    <th>price</th>
    <th>description</th>
    <th>Book</th>
    </tr>`

data.map((e)=>{
table+= `<tr>
     <td>${e.id}</td>
     <td>${e.name}</td>
     <td>${e.price}</td>
     <td>${e.description}</td>
     <td><a href="" > <img src="/images/book.jpg" width="30" height="30" ></a></td>

</tr>`
})
table+="</table>"
dsrt.innerHTML=table

}
//const click=document.getElementById('click')

const show=document.getElementById('show')

//click.addEventListener('click',myData)
const cardContainer = document.getElementById('card-container');



 async function myData(){

    let api="http://localhost:2000/products"

    let res=await fetch(api)

    let data=await res.json()
    console.log(data)
 
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
         <img src="${item.image}"  style="width:150px;height:150px; border-radius: 8px;">
          <h1>${item.name}</h1>
       <h3> Price</h3>:<h2>${item.price}</h2>
          <p>${item.description}</p>
        
      `;
      cardContainer.appendChild(card);
  });


   //  let table=`<table id='table'>
   //             <tr>
   //             <th>id</th>
   //             <th>name</th>
   //             <th>price</th>
   //             <th>description</th>
   //             <th>Book</th>
   //             </tr>`

   //    data.map((e)=>{
   //       table+= `<tr>
   //              <td>${e.id}</td>
   //              <td>${e.name}</td>
   //              <td>${e.price}</td>
   //              <td>${e.description}</td>
   //              <td><a href="" > <img src="/images/book.jpg" width="30" height="30" ></a></td>
         
   //       </tr>`
   //    })
   //    table+="</table>"
   //    show.innerHTML=table
}
myData()

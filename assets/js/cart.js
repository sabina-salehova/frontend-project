$(document).ready(function(){

   $('.most-products-all2').slick({
     prevArrow: '<i class="fas fa-chevron-left slickPrev1"></i>',
     nextArrow: '<i class="fas fa-chevron-right slickNext1"></i>',
   
        dots: false,
        infinite: false,
        speed: 350,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
 
     //   $('.products-all-slick').slick({
     //     slidesToShow: 3,
     //     slidesToScroll: 1,
     //     autoplay: true,
     //     autoplaySpeed: 2000,
     //   });
 });


/* ----------------------- basket -------------------------- */

function ShowAlert(){
  let basket=JSON.parse(localStorage.getItem('basket'));
  if(basket.length===0)
  {
      document.getElementById('alert').classList.remove('d-none');
      document.getElementById('table').classList.add('d-none');
      document.getElementById('result').classList.add('d-none');

  }
  else
  {
      document.getElementById('alert').classList.add('d-none');
      document.getElementById('table').classList.remove('d-none');
      document.getElementById('result').classList.remove('d-none');


      let list='';

      basket.forEach(item => {
          list+=`
          <tr>
              <td>${item.id}</td>
              <td>
                  <img src="${item.img}" class="card-img-top"  alt="">
              </td>
              <td>${item.name}</td>
              <td>
                  <input type="number" value="${item.count}">
              </td>
              <td>${item.price} AZN</td>
              <td>
                  <button onclick="deleteItem(${item.id})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
              </td>
          </tr>
          `;
      })

      document.getElementById('tbody').innerHTML=list;
  }
}
ShowAlert();


function deleteItem(item_id){
  let basket=JSON.parse(localStorage.getItem('basket'));
  let new_basket= basket.filter(item => item.id != item_id);
  localStorage.setItem('basket', JSON.stringify(new_basket)); 
  calc(); 
  ShowAlert();    
}


function calc(){
  let basket=JSON.parse(localStorage.getItem('basket'));
  let generalCount=0;
  let generalPay=0;
  for (const item of basket) {
    generalCount+=Number(item.count);
    generalPay+=Number(item.price);
  }
  document.getElementById('gCount').innerText=generalCount;
  document.getElementById('gPay').innerText=generalPay;
}

let inputs=document.querySelectorAll('input');
for (const item of inputs) { 
  item.addEventListener('change',function(e){
      e.preventDefault();
      let basket=JSON.parse(localStorage.getItem('basket'));
      let prod_id=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      console.log(prod_id);
      let existProd=basket.find(item=>item.id===prod_id);        
      console.log(item.value);
      existProd.price=Number(existProd.price/existProd.count);
      console.log(existProd.price);      
      existProd.price=Number(item.value*existProd.price);
      existProd.count=Number(item.value);
      localStorage.setItem('basket',JSON.stringify(basket));

      calc();
  })
  
}

calc(); 





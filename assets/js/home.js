/* ----------------------- Slider -------------------------- */

let myslider=[
    'https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/05/slider_img02-500x399.png',
    'https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/05/slider_img02-500x399.png'
]

let myTexts=[
    'Smart TV Bracelet',
    'Smart Wacth Bracelet'
]


let currentSlider=0;
let text=document.getElementById('text-h2');

if (text !== null) {
  text.innerText=myTexts[currentSlider];

  let img=document.querySelector('#slider .rigth img');
  img.src=myslider[currentSlider];

  let next=document.querySelector('#slider .next');
  let prev=document.querySelector('#slider  .prev');

  function autoPlay(){
      currentSlider++;
      
      if(currentSlider>myslider.length-1)
      currentSlider=0;

      img.src=myslider[currentSlider];
      text.innerText=myTexts[currentSlider];
  }

  next.addEventListener('click', autoPlay);

  prev.addEventListener('click', function(){
      currentSlider--;
      
      if(currentSlider<0)
      currentSlider=myslider.length-1;

      img.src=myslider[currentSlider];
      text.innerText=myTexts[currentSlider];
  });

  setInterval(()=>{
  autoPlay();
  }, 3000)
}



/* ----------------------- Slick Slider -------------------------- */

$(document).ready(function(){

 $('.products-all').slick({
  prevArrow: '<i class="fas fa-chevron-left slickPrev1"></i>',
  nextArrow: '<i class="fas fa-chevron-right slickNext1"></i>',

     dots: false,
     infinite: false,
     speed: 350,
     slidesToShow: 3,
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

   $('.most-products-all').slick({
    prevArrow: '<i class="fas fa-chevron-left slickPrev1"></i>',
    nextArrow: '<i class="fas fa-chevron-right slickNext1"></i>',
  
       dots: false,
       infinite: false,
       speed: 350,
       slidesToShow: 4,
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

/*--------------------------------- for basket --------------------------------- */

let basket = JSON.parse(localStorage.getItem("basket"));

if (basket == null) {
    localStorage.setItem("basket", JSON.stringify([]));
    basket = [];
}

let buttons = document.querySelectorAll('.btn');

function updateBasketCount() {
  let basketCount = document.querySelector("span#count");
  let products = JSON.parse(localStorage.getItem("basket"));
  basketCount.innerText = products.length;
}
 

for (const item of buttons) {
    console.log('hamisini goturdu');
    item.addEventListener('click',function(e){
        e.preventDefault();

        let prod_id=e.target.parentElement.parentElement.parentElement.parentElement.id;
        let prod_img=e.target.parentElement.parentElement.previousElementSibling.children[0].src;
        let prod_name=e.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].innerText;
        let prod_price=e.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0].innerText;
        
        let existProd=basket.find(item=>item.id===prod_id);
        
        if(existProd===undefined)
        {
            basket.push({
                id: prod_id,
                name: prod_name,
                img: prod_img,
                price: prod_price,
                count: 1
            });
        }
        localStorage.setItem('basket',JSON.stringify(basket));

        updateBasketCount();
        
    })

}

updateBasketCount();
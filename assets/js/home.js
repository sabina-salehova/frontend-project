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
text.innerText=myTexts[currentSlider];

let img=document.querySelector('#slider .rigth img');
img.src=myslider[currentSlider];

let next=document.querySelector('#slider .next');
let prev=document.querySelector('#slider  .prev');

function autoPlay(){
    console.log(next);
    currentSlider++;
    
    if(currentSlider>myslider.length-1)
    currentSlider=0;

    img.src=myslider[currentSlider];
    text.innerText=myTexts[currentSlider];
}

next.addEventListener('click', autoPlay);

prev.addEventListener('click', function(){
    console.log('prev');
    currentSlider--;
    
    if(currentSlider<0)
    currentSlider=myslider.length-1;

    img.src=myslider[currentSlider];
    text.innerText=myTexts[currentSlider];
});

setInterval(()=>{
 autoPlay();
}, 3000)


/* ----------------------- Slick Slider -------------------------- */

$(document).ready(function(){
 $('.products-all-slickdd').slick({
     dots: false,
     infinite: false,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
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
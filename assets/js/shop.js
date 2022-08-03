$(document).ready(function(){

    $('.slick-slider33').slick({
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





   
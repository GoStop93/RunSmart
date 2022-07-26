'use strict';

// slik-slider

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left_solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right_solid.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//       });
//   });

//tiny-slider

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click',  function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click',  function () {
    slider.goTo('next');    
});













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
    nav: false,
    speed: 1200,
});

document.querySelector('.prev').addEventListener('click',  function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click',  function () {
    slider.goTo('next');    
});


// tabs on jquery

$(document).ready(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content')
          .removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active'); 
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal
    
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

});

// modal js

// const consultationBtn = document.querySelectorAll('[data-modal=consultation]'),
//       orderBtn = document.querySelectorAll('.button_buy'),
//       closeBtn = document.querySelectorAll('.modal__close'),
//       windowConsultation = document.querySelector('#consultation'),
//       windowOrder = document.querySelector('#order'),
//       overlay = document.querySelector('.overlay');

// function openOverlay () {
//     overlay.classList.add('overlay_active');
// }

// function closeOverlay () {
//     overlay.classList.remove('overlay_active');
// }

// function closemodalWindow () {
//     windowConsultation.classList.remove('modal_active');
//     windowOrder.classList.remove('modal_active');
// }

// function openWindowConsultation () {
//     windowConsultation.classList.add('modal_active');
//     openOverlay();
// }

// function openWindowOrder () {
//     windowOrder.classList.add('modal_active');
//     openOverlay();
// }


// orderBtn.forEach(item  => {
//     item.addEventListener('click', () => {
//         openWindowOrder();
//     });
// });

// consultationBtn.forEach(item => {
//     item.addEventListener('click', () => {
//         openWindowConsultation();
//     });
// });

// closeBtn.forEach(item => {
//     item.addEventListener('click', () => {
//         closeOverlay();
//         closemodalWindow();
//     });
// });

// document.addEventListener('keydown', (e) => {
//     if (e.code === 'Escape' && windowConsultation.classList
//     .contains('modal_active') || windowOrder.classList.contains('modal_active')) {
//         closemodalWindow();
//         closeOverlay();
//     }
// });

























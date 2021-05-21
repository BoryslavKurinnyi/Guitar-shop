$(document).ready(function(){
  $('.my-carousel').slick({
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToShow: 3, //количество товаров в линии
    autoplay: true, //автопереключение
    autoplaySpeed: 1000, //скорость автопереключения(мс)
    prevArrow:`<button type="button" class="slick-prev">Попереднє</button>`,
    nextArrow:`<button type="button" class="slick-next">Наступне</button>`
  });
});
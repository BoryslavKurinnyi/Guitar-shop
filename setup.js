$(document).ready(function(){
  $('.my-carousel').slick({
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToShow: 3, //количество товаров в линии
    autoplay: true, //автопереключение
    autoplaySpeed: 1000, //скорость автопереключения(мс)
    dots:true,
    arrows:false,

  });
});
const modal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

//// SIDE MENU
$('.sidemenu').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.main-area').toggleClass('main-area_active');
})

//// Закрывать меню на ESC
$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    $('.menu').removeClass('menu_active');
    $('.main-area').removeClass('main-area_active');
 }
});

//// Убрать menu_disabled через секунду после загрузки страницы
setTimeout(function(){
  $('.menu').removeClass('menu_disabled');
}, 1000);


//// ACCORDION
document.querySelectorAll('.accordion__btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('accordion__btn--active')
  })
})
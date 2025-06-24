$(document).on("click", ".new-header__blue-burger", function () {
  $(this).toggleClass("active");
  $(".new-menu").slideToggle();
});

$('.open-new-menu').on('click', function() {
  $(".new-menu").slideToggle(600);
})

$('.new-menu__close').on('click', function() {
  $(".new-menu").slideToggle(600);
})


window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    $(".new-header__top").slideUp(500);
  } else {
    $(".new-header__top").slideDown(500);
  }
});

if (window.matchMedia("(max-width: 480px)").matches) {
  $('.footer-nav__title').on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.footer-nav__items').slideToggle();
  });
}

$('.servicesModal-hover__title').on('click', function() {
  $(this).toggleClass('active');
  $(this).next('.servicesModal-hover__hidden').slideToggle();
})
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

$(document).on("click", ".new-header__search", function (e) {
  e.stopPropagation();
  var $input = $(this).siblings(".new-header__search-input");
  if (!$input.hasClass("active")) {
    $input.show(0, function () {
      setTimeout(() => $input.addClass("active").focus(), 10);
    });
    $(".new-search-items").slideToggle(400);
  } else {
    $input.removeClass("active");
    setTimeout(() => $input.hide(), 400);
    $(".new-search-items").slideToggle(400);
  }
});

// Скрытие при клике вне поля поиска
$(document).on("click", function (e) {
  var $input = $(".new-header__search-input");
  if (
    $input.hasClass("active") &&
    !$(e.target).is(".new-header__search-input")
  ) {
    $input.removeClass("active");
    setTimeout(() => $input.hide(), 400);
    $(".new-search-items").slideToggle(400);
  }
});

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
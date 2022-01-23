$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      360: {
        items: 2,
        nav: false,
        margin: 100,
      },
      768: {
        items: 2,
        nav: true,
        margin: 10,
      },
      1024: {
        items: 3,
        nav: true,
      },
    },
  });
});
// for burger
const navbor = () => {
  const burger = document.querySelector(".header__burger");
  const Close = document.querySelector(".header__close");
  const nav = document.querySelector(".header__menu");
  const navLinks = document.querySelectorAll(".header__menu div");
  // togle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  Close.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
navbor();

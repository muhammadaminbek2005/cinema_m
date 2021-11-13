$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:3,
    loop: true,
    center:true,
    nav: true,
    dots:false,
  });
});

const navbor = () => {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__menu');
  const navLinks = document.querySelectorAll(".header__menu div")
  // togle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
  })
}
navbor ();

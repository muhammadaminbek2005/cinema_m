$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoHeight:true,
    center: true,
    items:2,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1 ,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

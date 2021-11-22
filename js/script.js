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
        margin:100,
      },
      768: {
        items: 2,
        nav: true,
        margin:10,
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
// for table
let films = [
  {
    time: "10:00",
    name: "Человек-паук",
    genre: "Фантастика, боевик, приключения",
  },
  {
    time: "12:00",
    name: "Собачья жизнь 2",
    genre: "Фэнтэзи, драма, комедия",
  },
  {
    time: "14:00",
    name: "История игрушек 4",
    genre: "Мультфильм, фэнтэзи, комедия",
  },
  {
    time: "16:00",
    name: "Люди в чёрном: Интэрнэшнл",
    genre: "Фантастика, боевик, комедия",
  },
];

let tableBody = document.getElementById("t_body");

for (i = 0; i < films.length; i++) {
  tableBody.innerHTML += `
<tr class="table__color">
<td class="checktable">
    <i>
        <svg width="11" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                fill="white" />
        </svg>
    </i>
</td>
<td>${films[i].time}</td>
<td>${films[i].name}</td>
<td>${films[i].genre}</td>
</tr>
`;
}

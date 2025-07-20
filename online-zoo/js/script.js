// new Swiper('.testimonials-swiper', {
// scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true
// },
// spaseBetween: 32,
// slidesPerGroup: 4,
// slidesPerView: 'auto',
// });
// input-another-amount.onclick = function() {

// }

// window.onscroll = function() {myFunction();};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// const body = document.querySelector("body");
// const InputBtn = document.querySelector('.input-btn-text__input');
// const ImgSocials = document.querySelector(".socials__img");
// const LinkSocials = document.querySelector(".socials__link");


// if (InputBtn) {
//     InputBtn.addEventListener.for("click", () => {
//         console.log('good');
//       InputBtn.classList.toggle("show");
//     });
//   }

//   if (LinkSocials) {
//     LinkSocials.addEventListener("mouseover", () => {
//         ImgSocials.classList.add("show");
//     });
//   }

//   if (LinkSocials) {
//     LinkSocials.addEventListener("mouseout", () => {
//         ImgSocials.classList.remove("show");
//     });
//   }


  //BurgerMenu
  const burgerBtn = document.querySelector('.burger-btn');
  const closeBurgerMenu = document.querySelector('.burger-menu__close-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const popupWrapper = document.querySelector('.popup__wrapper');



  if (burgerBtn || burgerMenu) {
    burgerBtn.addEventListener('click', showBurgerMenu);

    closeBurgerMenu.addEventListener('click', hideBurgerMenu);
    popupWrapper.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('popup__wrapper')) {
        hideBurgerMenu();
      }
    });
  }

  function hideBurgerMenu() {
    burgerBtn.classList.remove('active');
    popupWrapper.classList.remove('show');
    burgerMenu.classList.remove('show');
  }
  function showBurgerMenu() {
    burgerBtn.classList.add('active');
    popupWrapper.classList.add('show');
    burgerMenu.classList.add('show');
  }
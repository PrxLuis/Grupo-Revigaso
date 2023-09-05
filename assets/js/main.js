const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.querySelector(".navigation");
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 5,
  effect:"coverflow",
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifer: 1,
      slideShadows: false
  },
  pagination: {
      el: ".swiper-pagination"
  }
});

const swiper2 = new Swiper('.swiper-projects', {
  spaceBetween: 25,
  effect:"coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 350,
      modifer: 1,
      slideShadows: false
  },
  pagination: {
      el: ".swiper-pagination"
  }
});

//SCROLL REVEAL
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});
sr.reveal(`h1`,{origin: 'left', reveal: 500})
sr.reveal(`.llamaContainer`,{origin:'right'})
sr.reveal(`.conoceBtn, .agendarBtn-container`)
// windows.addEventListener("scroll",scrollActive);

//SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById("scroll-up");
  if(this.scrollY>=70) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp)
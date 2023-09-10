const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
  if(window.innerWidth < 1024) {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  }
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  if(window.innerWidth < 1024) {
    //const navMenu = document.querySelector(".navigation");
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  }
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

var wDestop;
function onWindowResize() {
   wDestop = window.innerWidth <= 1024 ? true : false;
  // console.log("el valor es "+wDestop);
}
window.addEventListener('resize', onWindowResize);
onWindowResize();

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 5,
  effect:"coverflow",
  loop: false,
  grabCursor: true,
  centeredSlides: wDestop,
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
  loop: false,
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
sr.reveal(`.flama-desktop`)

sr.reveal(`.mision__container, .services-section .subtitle h2`, {origin: "left", reveal: 500})
sr.reveal(`.vision__container, .projects-section .subtitle h2`, {origin: "right"})
sr.reveal(`.mision-img, .vision-img`)
sr.reveal(`.swiper-container .swiper-slide`, {origin: "top", reveal: 500})
// windows.addEventListener("scroll",scrollActive);

//SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById("scroll-up");
  if(this.scrollY>=70) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp)
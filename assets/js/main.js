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
}
window.addEventListener('resize', onWindowResize);
onWindowResize();

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
      slideShadows: true
  },
  pagination: {
      el: ".swiper-pagination"
  }
});

//SCROLL REVEAL
// ScrollReveal().reveal('.anexo-description, .conoceBtn, .agendarBtn-container', { delay: 500, distance: '50px', duration: 600, easing: 'ease-in', opacity: 0, origin: 'bottom', rotate: { x:20, z:20}, scale: 5, cleanup: false, useDelay: 'once' });
ScrollReveal().reveal('.anexo-description, .action, .swiper-pagination', { distance: '50px', origin: 'bottom', duration: 2000})
ScrollReveal().reveal('.flama-revigaso, .logo-container', { scale: 1, duration: 2500})
ScrollReveal().reveal('.left-t-sr', {distance: '100px', origin: 'top', duration: 1000, easing: 'ease-in'})
ScrollReveal().reveal('.right-t-sr, .titulo-rmf', {distance: '100px', origin: 'left', duration: 1000, easing: 'ease-in'})

ScrollReveal().reveal('.m-v-box', {duration: 200, interval: 500, easing: 'ease-in'})
ScrollReveal().reveal('.service-anexo', {duration: 200, interval: 500, easing: 'ease-in'})
ScrollReveal().reveal('.swiper-wrapper', {duration: 200, interval: 500, easing: 'ease-in'})
ScrollReveal().reveal('.sr-h', {duration: 200, interval: 500, easing: 'ease-in'})
ScrollReveal().reveal('.reason-container', {duration: 200, interval: 500, easing: 'ease-in'})
ScrollReveal().reveal('.box-container', {duration: 200, interval: 500, easing: 'ease-in'})

// interval: 600
/* const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
}); */
/* sr.reveal(`h1`,{origin: 'left', reveal: 500})
sr.reveal(`.llamaContainer`,{origin:'right'})
sr.reveal(`.conoceBtn, .agendarBtn-container`)
sr.reveal(`.flama-desktop`) */
// windows.addEventListener("scroll",scrollActive);

//SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById("scroll-up");
  if(this.scrollY>=70) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp)

//BOTON WHATSAPP
function sendWhats(){
  const showWhats = document.getElementById("send-whatsapp");
  if(this.scrollY>=70) showWhats.classList.add("show-whats");
  else showWhats.classList.remove("show-whats");
}
window.addEventListener("scroll", sendWhats)
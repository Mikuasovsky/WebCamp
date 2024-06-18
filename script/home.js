const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
});


gsap.registerPlugin(ScrollTrigger)

gsap.from('.anm', {
  duration: 0.6,
  opacity:0,
  y: -150,
  stagger:0.2
})
;
gsap.from('.main_btn', {
  duration: 0.8,
  opacity:0,
  y: -150,
});

gsap.from('.anm2', {
  scrollTrigger:'.anm2',
  duration: 1,
  opacity:1,
  x: -150,
  stagger:0.12
});
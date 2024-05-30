/*=============== SHOW MENU ===============*/

// Get elements from the DOM
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu when navToggle is clicked
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

// Hide menu when navClose is clicked
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when a nav__link is clicked
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Initialize Swiper for watches carousel
const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },
        next: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

// GSAP animations
gsap.from('.home__images', 1.5, {opacity: 0, y: 150, delay: .1});
gsap.from('.home__data', 1.8, {opacity: 0, x: -100, delay: .8});
gsap.from('.home__info', 1.8, {opacity: 0, x: -100, delay: 1});

gsap.from('.faq-box', 1.5, {opacity: 0, y: 150, delay: .1});
gsap.from('.faq-image', 1.8, {opacity: 0, x: -100, delay: .8});
gsap.from('.header1', 1.8, {opacity: 0, x: -100, delay: 1});

gsap.from('.form', 1.5, {opacity: 0, y: 150, delay: .1});
gsap.from('.title', 1.8, {opacity: 0, x: -100, delay: .8});

gsap.from('.big-box', 1.5, {opacity: 0, y: 150, delay: .1});
gsap.from('.big-box2', 1.8, {opacity: 0, x: -100, delay: .8});

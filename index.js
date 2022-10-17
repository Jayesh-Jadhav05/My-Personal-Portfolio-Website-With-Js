ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });

 ScrollReveal().reveal('.main-point, .common-heading,.skills', { delay: 100, origin: 'left'});
 ScrollReveal().reveal('.section .imgs, .btn,.static-txt', { delay: 100, origin: 'bottom'});
 ScrollReveal().reveal('.second-heading, .social-media-icons,', { delay: 100, origin: 'right'});
 ScrollReveal().reveal('.contact-form, .common-para, .footer-links,', { delay: 100, origin: 'top'});


//  Responsive navigation bar 

const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.head');


const toggalbtn = () =>{
    nav_header.classList.toggle('active');
};
mobile_nav.addEventListener('click',() => toggalbtn());
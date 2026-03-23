let menuIcon = document.querySelector('#menu-icon');
let mobileNav = document.querySelector('.mobile-nav');
let overlay = document.querySelector('.menu-overlay');
let closeBtn = document.querySelector('.nav-close');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('open');
    mobileNav.classList.toggle('open');
    overlay.classList.toggle('show');
};

overlay.onclick = () => {
    menuIcon.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay.classList.remove('show');
};

closeBtn.onclick = () => {
    menuIcon.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay.classList.remove('show');
};
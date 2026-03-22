let menuIcon = document.querySelector('#menu-icon');
let navabar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navabar.classList.toggle('active');
}

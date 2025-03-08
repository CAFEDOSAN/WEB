const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('responsive');
});
const menumobile = document.querySelector('.menu-mobile');
const navLink = document.querySelector('.nav-link');

    menumobile.addEventListener('click', () => {
    navLink.classList.toggle('active');
});
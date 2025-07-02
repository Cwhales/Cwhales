const toggleButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
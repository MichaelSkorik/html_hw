document.addEventListener('DOMContentLoaded', () => {
    const menuActive = document.querySelector('.menu-active');
    const burger = document.querySelector('.menu-icon');

    function toggleMenu() {
        menuActive.classList.toggle('hidden');
    }

    burger.addEventListener('click', toggleMenu);
});
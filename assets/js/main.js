//bos shadow scroll script
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


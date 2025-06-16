//box shadow scroll script
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


//Float hover script
document.querySelectorAll('.float-hover').forEach((el) => {
    const bg = el.querySelector('.bg');
  
    el.addEventListener('mouseenter', () => {
      bg.style.transformOrigin = 'bottom center';
      bg.style.transform = 'scaleY(1)';
    });
  
    el.addEventListener('mouseleave', () => {
      bg.style.transformOrigin = 'top center';
      bg.style.transform = 'scaleY(0)';
    });
  });
  


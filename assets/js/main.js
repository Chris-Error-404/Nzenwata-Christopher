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
  

  //Aos remove delay for mobile script
/*   if (window.innerWidth < 768) {
    document.querySelectorAll('.aos-delay').forEach(el => {
      el.removeAttribute('data-aos-delay');
    });
  }
 */

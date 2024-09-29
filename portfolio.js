window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const intersectionCallback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    }
  }
  
  const observer = new IntersectionObserver(intersectionCallback);
  
  const items = document.querySelectorAll('.home-profile-text a, .home-profile-picture, .home-aboutme-text a, .home-aboutme-picture, .experience-block');
  for (const item of items) {
    observer.observe(item);
  }
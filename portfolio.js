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
  
  const items = document.querySelectorAll('.fontopia-description, .fontopia-title, .fontopia-achievement, .fontopia-logo-block, .portofolio-achievement, .portfolio-subtitle, .portfolio-title, .education-profile-date, .education-profile-subtitle, .education-profile-title, .education-progress-line, .home-profile-text a, .home-profile-picture, .home-aboutme-text a, .home-aboutme-picture, .experience-block, .home-skills-title, .home-skills-subtitle, .home-skills-content, .home-education-title, .fa-graduation-cap');
  for (const item of items) {
    observer.observe(item);
  }

const typingSpeed = 100;
const pauseDuration = 3000;
const fadeDuration = 1000;

function typeText(element, text, callback) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            callback();
        }
    }, typingSpeed);
}

function typeTextBackward(element, text, callback) {
    let index = text.length;
    const interval = setInterval(() => {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1);
            index--;
        } else {
            clearInterval(interval);
            callback();
        }
    }, typingSpeed);
}

function fadeOutText(element, callback) {
    element.classList.add('fade-out');
    setTimeout(() => {
        element.classList.remove('fade-out');
        element.textContent = '';
        callback();
    }, fadeDuration);
}

function startAnimation() {
    const nameElement = document.getElementById('name');
    const roleElement = document.getElementById('role');

    typeText(nameElement, 'Felix Kuandi', () => {
        setTimeout(() => {
            typeTextBackward(nameElement, 'Felix Kuandi', () => {
                typeText(roleElement, 'An Entrepreneur', () => {
                    setTimeout(() => {
                        typeTextBackward(roleElement, 'An Entrepreneur', startAnimation);
                    }, pauseDuration);
                });
            });
        }, pauseDuration);
    });
}

window.onload = startAnimation;

document.querySelectorAll('nav.action-button a, .footer-action-button a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.textContent.toLowerCase();
        const targetSection = document.querySelector(sectionMap[targetId]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

const sectionMap = {
    'home': '.home-profile',
    'about': '.home-aboutme',
    'portfolio': '.home-portfolio',
    'skills': '.home-skills',
    'project': '.home-portfolio',
};
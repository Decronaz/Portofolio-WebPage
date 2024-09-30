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
  
  const items = document.querySelectorAll('.home-profile-text a, .home-profile-picture, .home-aboutme-text a, .home-aboutme-picture, .experience-block, .home-skills-title, .home-skills-subtitle, .home-skills-content');
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

// Add smooth scrolling for navigation links
document.querySelectorAll('nav.action-button a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.textContent.toLowerCase(); // Get the target section id
        const targetSection = document.querySelector(`.${targetId}`); // Select the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the section
        }
    });
});

// Update target section IDs
// Change this line to map the links to the correct sections
const sectionMap = {
    'home': '.home-profile',
    'about': '.home-aboutme',
    'skills': '.home-skills',
};

// Update the event listener to use the sectionMap
document.querySelectorAll('nav.action-button a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.textContent.toLowerCase(); // Get the target section id
        const targetSection = document.querySelector(sectionMap[targetId]); // Select the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the section
        }
    });
});
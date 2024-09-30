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

const typingSpeed = 100; // Speed of typing
const pauseDuration = 3000; // Duration to pause before fading
const fadeDuration = 1000; // Duration of fade out

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
    let index = text.length; // Start from the full length
    const interval = setInterval(() => {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1); // Remove the last character
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
        element.textContent = ''; // Clear text after fading
        callback();
    }, fadeDuration);
}

function startAnimation() {
    const nameElement = document.getElementById('name');
    const roleElement = document.getElementById('role');

    typeText(nameElement, 'Felix Kuandi', () => {
        setTimeout(() => { // Display for 3 seconds
            typeTextBackward(nameElement, 'Felix Kuandi', () => {
                typeText(roleElement, 'An Entrepreneur', () => {
                    setTimeout(() => { // Display for 3 seconds
                        typeTextBackward(roleElement, 'An Entrepreneur', startAnimation); // Loop back to the start
                    }, pauseDuration); // 3 seconds pause before fading out
                });
            });
        }, pauseDuration); // 3 seconds display after typing
    });
}

window.onload = startAnimation; // Start animation on page load
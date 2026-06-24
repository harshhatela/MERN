/* ================= MOBILE MENU ================= */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu on mobile link click
const navLinks = document.querySelectorAll('.nav-link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/* ================= CHANGE BACKGROUND HEADER ================= */
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* ================= DARK LIGHT THEME ================= */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun'; // When dark theme is active, show sun icon

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove'](iconTheme);
    // If not sun, it must be moon
    if(selectedIcon !== 'fa-sun') {
        themeButton.classList.add('fa-moon');
        themeButton.classList.remove('fa-sun');
    }
}

// Toggle theme manually
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    
    // Toggle icon
    if(themeButton.classList.contains('fa-sun')) {
        themeButton.classList.remove('fa-sun');
        themeButton.classList.add('fa-moon');
    } else {
        themeButton.classList.remove('fa-moon');
        themeButton.classList.add('fa-sun');
    }

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* ================= SCROLL SECTIONS ACTIVE LINK ================= */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if(sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ================= SHOW SCROLL UP ================= */
const scrollUp = () => {
    const scrollUpElement = document.getElementById('scroll-up');
    if (window.scrollY >= 350) scrollUpElement.classList.add('show-scroll');
    else scrollUpElement.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* ================= SCROLL REVEAL ANIMATION ================= */
const reveals = document.querySelectorAll('.reveal');

const revealElements = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealElements);
// Trigger once on load
revealElements();

/* ================= FORM VALIDATION ================= */
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    formSuccess.classList.remove('show');

    // Validate Name (min 3 chars)
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate Subject
    if (subjectInput.value.trim() === '') {
        subjectError.textContent = 'Subject is required';
        isValid = false;
    }

    // Validate Message (min 10 chars)
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        isValid = false;
    }

    // If valid, show success and reset form
    if (isValid) {
        formSuccess.classList.add('show');
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
    }
});

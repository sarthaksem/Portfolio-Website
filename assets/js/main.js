/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header')
                            : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

// Hide the message initially
contactMessage.style.display = 'none';

const sendEmail = async (e) => {
    e.preventDefault();

    try {
        await emailjs.sendForm('service_efv98mo', 'template_58ii1nl', '#contact-form', 'x2Ekp6Y1URbtTeQN2');
        
        // Show success message
        contactMessage.textContent = 'Message sent successfully ✅';
        contactMessage.style.color = 'green';
        contactMessage.style.display = 'block';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.style.display = 'none';
        }, 5000);

        // Clear input fields
        contactForm.reset();
    } catch (error) {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
        contactMessage.style.color = 'red';
        contactMessage.style.display = 'block';
    }
};


contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' });
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, { origin: 'left' });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });

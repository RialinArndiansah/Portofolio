// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Scroll Progress Bar and Sticky Header
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';

    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-theme') {
        themeIcon.textContent = '☀️';
    }
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('light-theme');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light-theme');
    }
});

// Form Validation (only if form exists)
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (subjectInput.value.trim() === '') {
            document.getElementById('subjectError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('subjectError').style.display = 'none';
        }

        if (messageInput.value.trim() === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('messageError').style.display = 'none';
        }

        if (isValid) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            document.getElementById('nameError').style.display = 'none';
        }
    });

    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value.trim())) {
            document.getElementById('emailError').style.display = 'none';
        }
    });

    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim() !== '') {
            document.getElementById('subjectError').style.display = 'none';
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() !== '') {
            document.getElementById('messageError').style.display = 'none';
        }
    });
}

// Certificate Lightbox Functions
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('certificateLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightbox.classList.add('active');
    lightboxImage.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('certificateLightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('certificateLightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});
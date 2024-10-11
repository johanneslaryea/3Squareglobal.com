// Mobile Menu Toggle

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');   

    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');   

      hamburger.setAttribute('aria-expanded',   
 false);
    });
  });
}

// Smooth Scrolling for Anchor Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target   
 = document.querySelector(anchor.getAttribute('href'));
    if (target)   
 {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic Header

const header = document.querySelector('.header');

if (header) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const newTop = scrollTop > lastScrollTop ? '-80px' : '0';
  header.style.top = newTop;
  lastScrollTop = scrollTop;
}

window.addEventListener('scroll', updateHeaderOnScroll);
let lastScrollTop = 0; // Initialize lastScrollTop


// Dark Mode Toggle

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
}

darkModeToggle.addEventListener('change', toggleDarkMode);

// Check for Saved Dark Mode Preference

const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'enabled') {
  darkModeToggle.checked = true;
  body.classList.add('dark-mode');
}

// FAQ

function toggleFAQ(card) {
  const question = card.querySelector('.faq-question');
  const answer = card.querySelector('.faq-answer');
  const icon = card.querySelector('.faq-icon');

  question.addEventListener('click', () => {
    answer.classList.toggle('show');
    icon.classList.toggle('rotate');
  });
}

const faqCards = document.querySelectorAll('.faq-card');
faqCards.forEach(toggleFAQ);

// Lightbox for Gallery Images

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(item) {
  lightbox.style.display = "block";
  lightboxImg.src = item.src;
}

const galleryItems = document.querySelectorAll(".gallery-item img");
galleryItems.forEach(item => item.addEventListener("click", () => openLightbox(item)));

document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Contact Form Validation

const contactForm = document.getElementById("contact-form");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = contactForm.name;
  const emailInput = contactForm.email;
  const messageInput = contactForm.message;

  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    alert("Please fill in all required fields.");
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }
});

  // Submit


  // Animated counters
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Run the animation when the section is in view
const achievementsSection = document.getElementById('our-achievements');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(achievementsSection);



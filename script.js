let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

ScrollReveal().reveal('.skills-column', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 200 });

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Developer'], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active-modal');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active-modal');
}

window.onclick = function(event) {
    if (event.target.classList.contains('service-modal')) {
        event.target.classList.remove('active-modal');
    }
}

// --- EMAIL JS INTEGRATION (Corrected) ---
const contactForm = document.getElementById('contactForm');

if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // This is crucial to stop refresh

        const submitBtn = this.querySelector('input[type="submit"]');
        const originalBtnText = submitBtn.value;
        submitBtn.value = "Sending...";

        // Using your specific IDs
        emailjs.sendForm('service_ehvy92s', 'template_ceugq42', this)
            .then(function() {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset(); 
                submitBtn.value = originalBtnText; 
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.log('FAILED...', error);
                submitBtn.value = originalBtnText;
            });
    });
}

// --- AUTO RELOAD ON RESIZE ---
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        location.reload();
    }, 400); 
});
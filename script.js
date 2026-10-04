const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function() {

    alert("Thank you! Your message is being sent.");

});
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    mobileNavLinks.classList.toggle("active");
});
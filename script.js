const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

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
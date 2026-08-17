const button = document.getElementById("clickButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "🔥 You clicked the button! Thanks for visiting!";
});
/* =========================
   Scroll Reveal Animation
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-card, .skill-card, .project-card, .contact-card"
);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    revealObserver.observe(element);
});

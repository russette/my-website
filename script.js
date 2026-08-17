/* =====================================================
   RUSSETTE PORTFOLIO — JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       SCROLL REVEAL ANIMATIONS
       ================================================= */

    const revealElements = document.querySelectorAll(
        ".section-title, .about-card, .project-card, .contact-card"
    );

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =================================================
       PROJECT CARD STAGGER EFFECT
       ================================================= */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 100}ms`;

    });


    /* =================================================
       ACTIVE NAVIGATION
       ================================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =================================================
       NAVBAR SCROLL EFFECT
       ================================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.25)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* =================================================
       BACK TO TOP
       ================================================= */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =================================================
       HERO BUTTON EFFECT
       ================================================= */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0)";

        });

    });


    /* =================================================
       PROJECT CARD MOUSE EFFECT
       ================================================= */

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* =================================================
       CURRENT YEAR
       ================================================= */

    const footerText = document.querySelector("footer p");

    if (footerText) {

        footerText.innerHTML =
            `© ${new Date().getFullYear()} Russette. Built with HTML, CSS & JavaScript.`;

    }


    /* =================================================
       CONSOLE MESSAGE
       ================================================= */

    console.log(
        "🚀 Welcome to Russette's portfolio!"
    );

});
/* =================================================
   MOBILE MENU
   ================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}

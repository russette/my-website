// =====================================================
// RUSSETTE PORTFOLIO JAVASCRIPT
// =====================================================


// ================= MOBILE MENU =================

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


    // Close menu when a link is clicked

    const links =
        navLinks.querySelectorAll("a");

    links.forEach(link => {

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



// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-card, .skill-card, .project-card, .contact-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



// ================= ACTIVE NAVIGATION =================

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute(
                            "id"
                        );


                    navItems.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },
        {
            threshold: 0.45
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



// ================= CURRENT YEAR =================

const yearElement =
    document.querySelector(
        "footer p"
    );


if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Russette. Built with HTML, CSS & JavaScript.`;

}



// ================= CONSOLE MESSAGE =================

console.log(
    "🚀 Welcome to Russette's portfolio!"
);

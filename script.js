// =========================================
// RUSSETTE PORTFOLIO — MAIN JAVASCRIPT
// =========================================


// =========================================
// MOBILE MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.textContent = isOpen ? "✕" : "☰";

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    // Close mobile menu when a navigation link is clicked

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navItems.forEach(link => {

                        link.classList.remove("active");

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },
        {
            rootMargin: "-40% 0px -50% 0px"
        }
    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {

            return;

        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================================
// SKILL BAR ANIMATION
// =========================================

const skillBars =
    document.querySelectorAll(".skill-progress");

if ("IntersectionObserver" in window) {

    const skillObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.3
        }
    );


    skillBars.forEach(bar => {

        skillObserver.observe(bar);

    });

} else {

    skillBars.forEach(bar => {

        bar.classList.add("animate");

    });

}


// =========================================
// BACK TO TOP
// =========================================

const backToTop =
    document.querySelector(".back-to-top");

if (backToTop) {

    backToTop.addEventListener("click", event => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const header =
    document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


// =========================================
// CONSOLE MESSAGE
// =========================================

console.log(
    "%c🚀 Russette Portfolio",
    "color:#a78bfa;font-size:20px;font-weight:bold;"
);

console.log(
    "%cBuilt with HTML, CSS & JavaScript.",
    "color:#77778b;font-size:12px;"
);

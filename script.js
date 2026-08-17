```javascript
/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.textContent = isOpen ? "✕" : "☰";

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );
    });


    // Close menu after clicking a link

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   SKILL PROGRESS BARS
========================= */

const skillCards =
    document.querySelectorAll(".skill-card");

const skillObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const progressBars =
                        entry.target.querySelectorAll(
                            ".skill-progress"
                        );

                    progressBars.forEach(bar => {

                        const width =
                            bar.getAttribute("data-width");

                        bar.style.width = width;

                    });

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.25
        }
    );


skillCards.forEach(card => {

    skillObserver.observe(card);

});
```

```javascript
// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close menu");
        } else {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        }

    });


    // Close menu when a link is clicked

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

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


// =========================
// SKILL BAR ANIMATION
// =========================

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animationPlayState = "running";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.3
    }
);


skillBars.forEach(bar => {

    bar.style.animationPlayState = "paused";

    skillObserver.observe(bar);

});
```

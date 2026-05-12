/* ================= PORTFOLIO SCRIPT.JS ================= */

/* Console check */
console.log("Portfolio website loaded successfully!");

/* ================= SMOOTH SCROLL NAVIGATION ================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ================= ACTIVE NAV LINK ON SCROLL ================= */

window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");

                let activeLink = document.querySelector(
                    ".nav-links a[href*=" + id + "]"
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            });
        }
    });
});


/* ================= TYPING EFFECT (HERO SECTION) ================= */

const textArray = [
    "Final year Mechatronics Engineering Student",
    "Embedded Systems developer",
    "CAD designer",
    "Web Developer",
    
];

let index = 0;
let charIndex = 0;
let currentText = "";

function typeEffect() {
    if (charIndex < textArray[index].length) {
        currentText += textArray[index].charAt(charIndex);
        document.getElementById("typing").innerText = currentText;
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, -1);
        document.getElementById("typing").innerText = currentText;
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

/* Start typing animation */
typeEffect();

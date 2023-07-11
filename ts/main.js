"use strict";
// variables
const navBtn = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
// navbar toggler
navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
});
// links to section
navLinks.forEach(link => {
    goToSection(link);
});
function goToSection(e) {
    e.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        const section = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        let position = section.offsetTop - navHeight;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
    });
}

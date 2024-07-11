"use strict";
// variables
const navBtn = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
// navbar toggler
navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger-open");
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
        const headerHeight = header.getBoundingClientRect().height;
        let position = section.offsetTop - headerHeight;
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
        nav.classList.remove("nav-active");
        burger.classList.remove("burger-open");
    });
}
const closeNavbar = (e) => {
    if (!navBtn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("nav-active");
        burger.classList.remove("burger-open");
    }
};
document.addEventListener("click", closeNavbar);

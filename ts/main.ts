// variables
const navBtn = document.querySelector(".burger") as HTMLDivElement;
const nav = document.querySelector("nav") as HTMLElement;
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("header") as HTMLElement;
const burger = document.querySelector(".burger") as HTMLDivElement;

// navbar toggler
navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger-open")
});

// links to section
navLinks.forEach(link => {
    goToSection(link);
});

function goToSection(e: Element) {
    e.addEventListener("click", (e: any) => {
        e.preventDefault();
        const id: string = e.target.getAttribute("href").slice(1);
        const section: any = document.getElementById(id);
        const headerHeight: number = header.getBoundingClientRect().height;
        let position = section.offsetTop - headerHeight;
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
        nav.classList.remove("nav-active")
        burger.classList.remove("burger-open")
    });
}

const closeNavbar = (e: Event) => {
    if (!navBtn.contains(e.target as Node) && !nav.contains(e.target as Node)) {
        nav.classList.remove("nav-active")
        burger.classList.remove("burger-open")
    }
}

document.addEventListener("click", closeNavbar)
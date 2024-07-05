// variables
const navBtn = document.querySelector(".burger") as HTMLDivElement;
const nav = document.querySelector("nav") as HTMLElement;
const navLinks = document.querySelectorAll(".nav-link");

// navbar toggler
navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
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
        const navHeight: number = nav.getBoundingClientRect().height;
        let position = section.offsetTop - navHeight;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
    });
}

const closeNavbar = (e: Event) => {
    if (!navBtn.contains(e.target as Node) && !nav.contains(e.target as Node)) {
        nav.classList.remove("nav-active")
    }
}

document.addEventListener("click", closeNavbar)
// Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => document.body.classList.toggle("dark-mode");

// Back to top button
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backTop.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});

// Navbar hide / show on scroll
let lastScroll = 0;
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let current = window.scrollY;
    nav.style.top = current > lastScroll ? "-80px" : "0";
    lastScroll = current;
});

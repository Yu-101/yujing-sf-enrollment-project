// BACK TO TOP
let topBtn = document.getElementById("topBtn");
window.onscroll = () => {
topBtn.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
};
function topFunction() { document.documentElement.scrollTop = 0; }


// SLIDER
let slideIndex = 0;
function showSlides() {
let slides = document.getElementsByClassName("slide-img");
for (let s of slides) s.style.display = "none";
slideIndex = (slideIndex % slides.length) + 1;
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2500);
}
showSlides();


// THEME TOGGLE
const themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = () => {
document.body.classList.toggle("dark-mode");
};


// Back to top button
let topBtn = document.getElementById("topBtn");
window.onscroll = () => {
if (document.documentElement.scrollTop > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
};
function topFunction() {
document.documentElement.scrollTop = 0;
}


// Gallery slider
let slideIndex = 0;
function showSlides() {
let slides = document.getElementsByClassName("slide-img");
for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
slideIndex++;
if (slideIndex > slides.length) slideIndex = 1;
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2500);
}
showSlides();

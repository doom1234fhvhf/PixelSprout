/* 
   Simple Slider Component
 */

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(0);
  setInterval(nextSlide, 5000);
}

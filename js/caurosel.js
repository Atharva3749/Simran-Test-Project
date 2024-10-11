const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('#carousel > div');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

// Function to change slide
function changeSlide(newIndex) {
  index = newIndex;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Event listeners for manual controls
next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  changeSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  changeSlide(index);
});

// Auto-scroll function
setInterval(() => {
  index = (index + 1) % slides.length;
  changeSlide(index);
}, 5000);  // 3 seconds interval

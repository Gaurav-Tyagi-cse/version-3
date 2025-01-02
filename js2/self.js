const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = 3; // Total number of slides
const slideInterval = 3000; // Interval for autoplay in milliseconds

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set up autoplay
let autoplay = setInterval(nextSlide, slideInterval);

// Add event listeners for manual navigation
nextBtn.addEventListener('click', () => {
  clearInterval(autoplay); // Stop autoplay on manual navigation
  nextSlide();
  autoplay = setInterval(nextSlide, slideInterval); // Restart autoplay
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoplay); // Stop autoplay on manual navigation
  prevSlide();
  autoplay = setInterval(nextSlide, slideInterval); // Restart autoplay
});



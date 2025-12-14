/* --- JS UPDATE: Add Dropdown Logic --- */

// Existing AOS Init
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: false
});

// Existing Hamburger Logic
const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        hamburger.classList.add('open');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    } else {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// --- NEW: Dropdown Toggle Logic ---
const dropdowns = document.querySelectorAll('.has-dropdown');

dropdowns.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent immediate navigation if href is #
        
        // Close other open dropdowns (optional, creates accordion effect)
        dropdowns.forEach(other => {
            if (other !== dropdown) {
                other.classList.remove('active');
            }
        });

        // Toggle current
        dropdown.classList.toggle('active');
    });
});

// Existing Search Logic
const searchBtn = document.getElementById('search-btn');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.blur();
    }
});

document.addEventListener('click', (e) => {
    // Modified to ensure we don't close if clicking inside the input itself
    if (!searchContainer.contains(e.target) && !searchBtn.contains(e.target)) {
        searchContainer.classList.remove('active');
    }
});

// --- Testimonial Slider Logic ---
let slideIndex = 1;
showSlides(slideIndex);

// Auto-play (Optional - remove if not wanted)
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000); // Change slide every 3 seconds

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove('active');
    }
    
    // Remove active status from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate dot
    slides[slideIndex-1].style.display = "flex";  
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].className += " active";
}
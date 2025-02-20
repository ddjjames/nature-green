
//JavaScript for Sidebar Toggle

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
});





//infinity loops scrooling for the left and right imgs
document.addEventListener("DOMContentLoaded", function () {
    // Infinite Scroll Duplication
    const sliderLeft = document.getElementById("slider-left");
    const sliderRight = document.getElementById("slider-right");
    sliderLeft.innerHTML += sliderLeft.innerHTML;
    sliderRight.innerHTML += sliderRight.innerHTML;

    // Gallery Modal Logic
    const images = document.querySelectorAll(".gallery-img");
    const galleryModal = document.getElementById("galleryModal");
    const galleryImage = document.getElementById("galleryImage");
    const closeModal = document.getElementById("closeModal");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const seeMoreBtn = document.getElementById("seeMoreBtn");

    let currentImageIndex = 0;
    let imageSources = Array.from(images).map(img => img.src);

    function showImage(index) {
        if (index < 0) index = imageSources.length - 1;
        if (index >= imageSources.length) index = 0;
        currentImageIndex = index;
        galleryImage.src = imageSources[currentImageIndex];
    }

    // Open Modal on "See More" Click
    seeMoreBtn.addEventListener("click", function () {
        galleryModal.classList.remove("hidden");
        showImage(0); // Show first image initially
    });

    // Close Modal
    closeModal.addEventListener("click", function () {
        galleryModal.classList.add("hidden");
    });

    // Navigate Left
    prevBtn.addEventListener("click", function () {
        showImage(currentImageIndex - 1);
    });

    // Navigate Right
    nextBtn.addEventListener("click", function () {
        showImage(currentImageIndex + 1);
    });

    // Close modal on outside click
    galleryModal.addEventListener("click", function (event) {
        if (event.target === galleryModal) {
            galleryModal.classList.add("hidden");
        }
    });

    // Close on Escape Key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            galleryModal.classList.add("hidden");
        }
    });
});



//pause the slide when the mouse point on a slider left or right 

document.addEventListener("DOMContentLoaded", function () {
    const sliderLeft = document.getElementById("slider-left");
    const sliderRight = document.getElementById("slider-right");

    function pauseAnimation(element) {
        element.style.animationPlayState = "paused";
    }

    function resumeAnimation(element) {
        element.style.animationPlayState = "running";
    }

    // Pause slider when hovering
    sliderLeft.addEventListener("mouseenter", () => pauseAnimation(sliderLeft));
    sliderRight.addEventListener("mouseenter", () => pauseAnimation(sliderRight));

    // Resume slider when mouse leaves
    sliderLeft.addEventListener("mouseleave", () => resumeAnimation(sliderLeft));
    sliderRight.addEventListener("mouseleave", () => resumeAnimation(sliderRight));
});

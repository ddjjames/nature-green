
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






document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href='#landscaping']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#landscaping-section").scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href='#contact']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#contact").scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});








//js for holding email data

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing page

        // Collect data from form
        const formData = {
            name: document.getElementById("name").value,
            number: document.getElementById("number").value,
            service: document.getElementById("service").value,
            notes: document.getElementById("notes").value,
        };

        // Send email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(() => {
                alert("Inquiry sent successfully!");
                document.getElementById("contactForm").reset(); // Clear form
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to send inquiry.");
            });
    });
});









//script for the plant page animation to change image every 5s 


document.addEventListener("DOMContentLoaded", () => {
    let images = document.querySelectorAll(".slideshow img");
    let index = 0;

    function changeImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});







//js  for the imgs effects
const images = document.querySelectorAll(".img");
const firstImage = document.getElementById("img1");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        images.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.classList.add("collapsed");
                otherImg.classList.remove("expanded");
            }
        });
        img.classList.add("expanded");
        img.classList.remove("collapsed");
    });
});

document.querySelector(".image-container").addEventListener("mouseleave", () => {
    images.forEach(img => {
        img.classList.remove("expanded", "collapsed");
    });
    firstImage.classList.add("expanded");
});
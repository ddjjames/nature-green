
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




document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-img");
    const galleryModal = document.getElementById("galleryModal");
    const galleryImage = document.getElementById("galleryImage");
    const imageLabel = document.getElementById("imageLabel");
    const closeModal = document.getElementById("closeModal");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const seeMoreBtn = document.getElementById("seeMoreBtn");

    let currentImageIndex = 0;
    const imageSources = Array.from(images).map(img => img.src);
    const imageLabels = ["Banana", "Banana", "Banana", "Croton", "Mulderberry", "Cacti", "Cacti", "Cacti", "Bridal Bouquet", "Pothos Plant", "Agave", "ZZ Plant", "Coconut",
    "Potted Plants", "Potted Plants", "Breadfruit", "Breadfruit", "Croton", "Croton", "Bougainvillea", "Bougainvillea", "Bougainvillea", "Bougainvillea", "Bougainvillea", "Palm", "Christmas Palm"
    ,"Fan Palm", "Areca Palm","Potted Bougainvillea", "Cherry Lime" ];

    function showImage(index) {
        if (index < 0) index = imageSources.length - 1;
        if (index >= imageSources.length) index = 0;
        currentImageIndex = index;
        galleryImage.src = imageSources[currentImageIndex];
        imageLabel.textContent = imageLabels[currentImageIndex];
    }

    // Restore Infinite Scroll Duplication
    const sliderLeft = document.getElementById("slider-left");
    const sliderRight = document.getElementById("slider-right");
    
    // Ensure the slider content is duplicated for smooth scrolling
    sliderLeft.innerHTML += sliderLeft.innerHTML;
    sliderRight.innerHTML += sliderRight.innerHTML;

    let isTransitioning = false;

    function moveSlider(slider, direction) {
        if (isTransitioning) return;
        isTransitioning = true;

        // Apply the transition effect
        slider.style.transition = 'transform 1s ease-in-out';
        let currentTransform = parseFloat(getComputedStyle(slider).transform.split(',')[4]) || 0;
        slider.style.transform = `translateX(${currentTransform + direction}px)`;

        // After the transition is complete, reset the position for smooth restart
        setTimeout(() => {
            if (currentTransform < -slider.offsetWidth) {
                slider.style.transition = 'none';  // Disable transition for instant reset
                slider.style.transform = `translateX(0)`;  // Reset to start
                setTimeout(() => {
                    slider.style.transition = 'transform 1s ease-in-out';  // Re-enable transition
                }, 50); // Small delay before allowing transition again
            }
            isTransitioning = false;
        }, 1000);  // Match the transition duration
    }

    // Button clicks to see more or move between images
    seeMoreBtn.addEventListener("click", function () {
        galleryModal.classList.remove("hidden");
        showImage(0);
    });

    closeModal.addEventListener("click", function () {
        galleryModal.classList.add("hidden");
    });

    prevBtn.addEventListener("click", function () {
        showImage(currentImageIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
        showImage(currentImageIndex + 1);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            galleryModal.classList.add("hidden");
        }
    });

    // Start automatic scrolling
    setInterval(() => {
        //moveSlider(sliderLeft, -300); // Move left slider to the left
        //moveSlider(sliderRight, -300); // Move right slider to the left
    }, 1000);  // Change image every 3 seconds
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





//js to scrool down when click on the landscaping link
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




//js to scrool down when click on the contact link
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




//js to scrool down when click on the plant link
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href='#plants']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#plants").scrollIntoView({
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



///JS FOR BUTTON SCROOLING ALL THE WAY UP

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.innerHeight + window.scrollY;

        // Show button when user reaches the bottom
        if (scrollPosition >= scrollHeight - 50) {
            backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});

// ===============================
// POPUP CONTACT FORM
// ===============================

// Open the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close the contact form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Close the contact form when clicking outside of it
document.addEventListener("click", function(event) {
    const form = document.getElementById("myForm");

    if (
        form &&
        form.style.display === "block" &&
        !event.target.closest(".form-popup") &&
        !event.target.closest(".Pop_Up_Button") &&
        !event.target.closest(".contact")
    ) {
        closeForm();
    }
});


// ===============================
// SLIDESHOW
// ===============================

let slideIndex = 1;

// Show the first slide when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

// Next / previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Stop the function if no slides exist
    if (slides.length === 0) {
        return;
    }

    // Loop back to first slide after the last slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Loop to last slide if user goes before first slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Highlight current dot
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}


// ===============================
// CONTACT FORM VALIDATION
// ===============================

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".form-container");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                event.preventDefault();
                alert("Please fill out your name, email, and message before submitting.");
            } else {
                alert("Thank you! Your message has been submitted.");
            }
        });
    }
});
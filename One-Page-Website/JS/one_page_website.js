// Lightbox Modal Image Gallery

const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("lightboxImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const galleryImages = document.querySelectorAll(".gallery-img");

let currentImageIndex = 0;

// Open lightbox when an image is clicked
galleryImages.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentImageIndex = index;
        openLightbox();
    });
});

// Function to open lightbox
function openLightbox() {
    modal.style.display = "flex";
    modalImg.src = galleryImages[currentImageIndex].getAttribute("data-full");
    captionText.innerHTML = galleryImages[currentImageIndex].alt;
}

// Function to close lightbox
function closeLightbox() {
    modal.style.display = "none";
}

// Function to show next image
function showNextImage() {
    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    openLightbox();
}

// Function to show previous image
function showPrevImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    openLightbox();
}

// Event listeners
closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

// Close modal when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeLightbox();
    }
});

// Keyboard controls
document.addEventListener("keydown", function(event) {
    if (modal.style.display === "block") {
        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowRight") {
            showNextImage();
        } else if (event.key === "ArrowLeft") {
            showPrevImage();
        }
    }
});
let currentImageIndex = 0;
const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
]


function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox-img").src = images[index];
    document.getElementById("lightbox-container").style.display = "flex";
}
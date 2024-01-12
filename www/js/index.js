let currentImageIndex = 0;
const images = [
    "./img/attaqueDeMstr1.png",
    "./img/attaqueDeMstr2.png",
    "./img/attaqueDeMstr3.png",
    "./img/attaqueDeMstr4.png"
];
const currentImageElement = document.getElementById("currentImage");

function updateImage() {
    currentImageElement.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    console.log(currentImageIndex);
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function zoom(element) {
    element.classList.toggle("fullsize");
}
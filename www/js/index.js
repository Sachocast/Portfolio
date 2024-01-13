let currentImageIndex = 0;
const imagesAttMstr = [
    "./img/attaqueDeMstr1.png",
    "./img/attaqueDeMstr2.png",
    "./img/attaqueDeMstr3.png",
    "./img/attaqueDeMstr4.png"
];
const imagesPkmn = [
    "./img/pkmn1.png",
    "./img/pkmn2.png",
    "./img/pkmn3.png"
]
var currentImageElement = 0;

function updateImage(idDiv) {
    switch(idDiv){
        case 'attMstr':
            currentImageElement.src = imagesAttMstr[currentImageIndex];
            break;
        case 'pkmn' :
            currentImageElement.src = imagesPkmn[currentImageIndex];
    }
}
    

function nextImage(idDiv) {
    removeCurrentImageId();
    addCurrentImageId(idDiv);
    currentImageElement = document.getElementById("currentImage");
    switch(idDiv){
        case 'attMstr':
            currentImageIndex = (currentImageIndex + 1) % imagesAttMstr.length;
            break;
        case 'pkmn' :
            currentImageIndex = (currentImageIndex + 1) % imagesPkmn.length;
    }
    updateImage(idDiv);
}

function prevImage(idDiv) {
    removeCurrentImageId();
    addCurrentImageId(idDiv);
    currentImageElement = document.getElementById("currentImage");
    switch(idDiv){
        case 'attMstr':
            currentImageIndex = (currentImageIndex + 1) % imagesAttMstr.length;
            break;
        case 'pkmn' :
            currentImageIndex = (currentImageIndex + 1) % imagesPkmn.length;
    }
    updateImage(idDiv);
}

function removeCurrentImageId() {
    const images = document.querySelectorAll('.slider-image');

    images.forEach((image) => {
        image.removeAttribute('id');
    });
}

function addCurrentImageId(idDiv) {
    const div = document.getElementById(idDiv);

    if (div) {
        const imgElement = div.querySelector('.slider-image');
        if (imgElement) {
            imgElement.id = "currentImage";
        }
    }
}
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
const imagesAlbums = [
    "./img/site.png",
    "./img/sitePanier.png"
];
var currentImageElement = 0;

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

function updateImage(idDiv) {
    currentImageElement = document.getElementById("currentImage");
    switch(idDiv){
        case 'attMstr':
            currentImageElement.src = imagesAttMstr[currentImageIndex];
            break;
        case 'pkmn' :
            currentImageElement.src = imagesPkmn[currentImageIndex];
            break;
        case 'albums':
            currentImageElement.src = imagesAlbums[currentImageIndex];
            break;
    }
}

function nextImage(idDiv,fullsize = false) {
    removeCurrentImageId();
    if(!fullsize) addCurrentImageId(idDiv);
    else addCurrentImageId("fullsize");
    switch(idDiv){
        case 'attMstr':
            currentImageIndex = (currentImageIndex + 1) % imagesAttMstr.length;
            break;
        case 'pkmn' :
            currentImageIndex = (currentImageIndex + 1) % imagesPkmn.length;
            break;
        case 'albums':
            currentImageIndex = (currentImageIndex + 1) % imagesAlbums.length;
            break;
    }
    updateImage(idDiv);
}

function prevImage(idDiv,fullsize = false) {
    removeCurrentImageId();
    if(!fullsize) addCurrentImageId(idDiv);
    else addCurrentImageId("fullsize");
    switch(idDiv){
        case 'attMstr':
            currentImageIndex = (currentImageIndex - 1 + imagesAttMstr.length) % imagesAttMstr.length;
            break;
        case 'pkmn' :
            currentImageIndex = (currentImageIndex - 1 + imagesPkmn.length) % imagesPkmn.length;
            break;
        case 'albums':
            currentImageIndex = (currentImageIndex - 1 + imagesAlbums.length) % imagesAlbums.length;
            break;
    }
    updateImage(idDiv);
}

function zoom(img){
    const zoomSlider = document.getElementById("fullsize");
    if (zoomSlider) {
        zoomSlider.style.display = "flex";
        document.body.style.overflowY = "hidden";
        addCurrentImageId("fullsize");
        updateImage(img);
        const prev = document.getElementById("fullsizePrev");
        prev.setAttribute('onclick','prevImage('+'\'' +img+ '\',true' +')');        
        const next = document.getElementById("fullsizeNext");
        next.setAttribute('onclick','nextImage('+'\'' +img+ '\',true' +')');    
    }
}

function quit(){
    const zoomSlider = document.getElementById("fullsize");
    if (zoomSlider) {
        zoomSlider.style.display = "none";
        document.body.style.overflowY = "auto";   
    }
}
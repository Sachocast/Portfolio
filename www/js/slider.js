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
    "./img/pkmn3.png",
    "./img/pkmn4.png"
]
const imagesAlbums = [
    "./img/siteAlbums1.png",
    "./img/siteAlbums2.png",
    "./img/siteAlbums3.png",
    "./img/siteAlbums4.png"
];
const imagesSW = [
    "./img/figurineSW1.png",
    "./img/figurineSW2.png",
    "./img/figurineSW3.png",
    "./img/VideoPromoBoutiqueSW.mp4"
]
const imagesIWW = [
    "./img/IWW1.png",
    "./img/IWW2.png",
    "./img/IWW3.png",
    "./img/IWW4.png"
];
var currentImageElement = 0;
var divFullsize = document.getElementById('fullsize');

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
    divFullsize = document.getElementById('fullsize');
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
        case 'sw':
            if(currentImageIndex<3){
                const image = document.createElement('img');
                image.src = imagesSW[currentImageIndex];
                image.alt = 'img star wars';
                image.className = 'slider-image';
                image.onclick = function() { zoom('sw');};
                if(divFullsize.style.display=="flex"){
                    const element = divFullsize.querySelectorAll('img')[1] 
                    divFullsize.replaceChild(image, element);
                } else{
                    divFullsize = document.getElementById('sw');
                    const sliderContainer = divFullsize.querySelector('.slider-container');
                    var element = sliderContainer.querySelector('img') ?? sliderContainer.querySelector('video');
                    sliderContainer.replaceChild(image, element);
                }
            }
            if(currentImageIndex == 3){            
                const video = document.createElement('video');
                video.setAttribute('controls', 'true');
                video.setAttribute('width', '250');
                const sourceWebm = document.createElement('source');
                sourceWebm.setAttribute('src', './img/VideoPromoBoutiqueSW.mp4');
                sourceWebm.setAttribute('type', 'video/webm');
                const sourceMp4 = document.createElement('source');
                sourceMp4.setAttribute('src', './img/VideoPromoBoutiqueSW.mp4');
                sourceMp4.setAttribute('type', 'video/mp4');
                video.appendChild(sourceWebm);
                video.appendChild(sourceMp4);
                /*if(divFullsize.style.display=="flex"){
                    
                } else{*/
                    divFullsize = document.getElementById('sw');
                    const sliderContainer = divFullsize.querySelector('.slider-container');
                    var element = sliderContainer.querySelector('img') ?? sliderContainer.querySelector('video');
                    sliderContainer.replaceChild(video, element);
                //}
            }
            break;
        case 'iww':
            currentImageElement.src = imagesIWW[currentImageIndex];
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
        case 'sw':
            currentImageIndex = (currentImageIndex + 1) % imagesSW.length;
            if(divFullsize.style.display == 'flex' && currentImageIndex == 3){
                currentImageIndex = 0;
            }
            break;
        case 'iww':
            currentImageIndex = (currentImageIndex + 1) % imagesIWW.length;
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
        case 'sw':
            currentImageIndex = (currentImageIndex - 1 + imagesSW.length) % imagesSW.length;
            if(divFullsize.style.display == 'flex' && currentImageIndex == 3){
                currentImageIndex = 2;
            }
            break;
        case 'iww':
            currentImageIndex = (currentImageIndex - 1 + imagesIWW.length) % imagesIWW.length;
            break;
    }
    updateImage(idDiv);
}

function zoom(img){
    currentImageIndex = 0;
    const zoomSlider = document.getElementById("fullsize");
    if (zoomSlider) {
        zoomSlider.style.display = "flex";
        document.body.style.overflowY = "hidden";
        removeCurrentImageId
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
AdjustAudioVolume();
FixImages();

var JSONStandardGallery;
var JSONSecretGallery;

DeserializeStandardGallery();

async function DeserializeStandardGallery() {
    JSONStandardGallery = await fetchDataFromJSON('/galeria/StandardGallery.json');
    GenerateGallery(JSONStandardGallery);
}

async function DeserializeSecretGallery() {
    JSONSecretGallery = await fetchDataFromJSON('/galeria/SecretGallery.json');
    GenerateGallery(JSONSecretGallery);
}

async function fetchDataFromJSON(JSONRoute) {
    let response = await fetch(JSONRoute);
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
}

function AdjustAudioVolume() {
    var audio = document.getElementById("galleryAudio");
    var secretAudio = document.getElementById("secretGalleryAudio");
    audio.volume = 0.2;
    secretAudio.volume = 0.4;
}

function FixImages() {
    var elements = document.getElementsByClassName("gal-imgs-col");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";
        elements[i].style.flex = "25%";
    }
}

function OpenModal(pImage) {
    var modal = document.getElementById("galleryModal");
    modal.style.display = "block";

    var img = pImage
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("gal-caption");
    
    modalImg.src = img.og;
    captionText.innerHTML = pImage.alt;

    document.body.style.overflow = 'hidden';
}

function CloseModal() {
    var modal = document.getElementById("galleryModal");
    modal.style.display = "none";

    document.body.style.overflow = 'overlay';
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        CloseModal();
    }
};

var secretGalleryOnScreen = false;

function ShowSecretGallery() {
    if (secretGalleryOnScreen == false) {
        var secret = document.getElementById("secretGallery");
        secret.style.display = "block";
        DeserializeSecretGallery();

        SecretDiscovered();
    }
    secretGalleryOnScreen = true;
}

function GenerateGallery(JSONGallery) {

    var currentGallery = JSONGallery;
    var currentDirectory;
    var currentCol;
    var thumbnailRoute = "thumbnails/"

    if (currentGallery === JSONStandardGallery) {
        currentDirectory = "/galeria/img/";
        currentCol = "galCol";
    }

    if (currentGallery === JSONSecretGallery) {
        currentDirectory = "/galeria/secretGallery/";
        currentCol = "secGalCol";
    }

    console.log(currentGallery);

    for (var i = 0; i < currentGallery.length; i++) {
        const img = document.createElement("img");
        img.src = currentDirectory + thumbnailRoute + currentGallery[i].ImageName;
        img.className = "gal-img";
        img.alt = currentGallery[i].ImageDescription;
        img.og = currentDirectory + currentGallery[i].ImageName;
        img.onclick = function () { OpenModal(img); }
        img.loading = "lazy";

        src = document.getElementById(currentCol + currentGallery[i].ImageColumn);
        src.appendChild(img);
    }
}

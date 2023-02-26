var audio = document.getElementById("galleryAudio");
var secretAudio = document.getElementById("secretGalleryAudio");
audio.volume = 0.2;
secretAudio.volume = 0.4;

FixImages();

var img = [
    ["Pommy HD.png", 1],
    ["Spooky Icon.png", 2],
    ["CJ meets Art Renderer.png", 3],
    ["Mario Vs Clippy Remastered.png", 1],
    ["CAT-DOS Logo.png", 2],
    ["Cyan origins.png", 3],
    ["Throw test 1.png", 1],
    ["Storm King Logo in Prime 4 style.png", 2],
    ["Subspace.png", 3],
    ["Throw test 2.png", 2]
];

var secretGallery = [
    ["Sonic US.png", 1],
    ["Canelita.gif", 2],
    ["Generator room Cortex.gif", 3]
];

GenerateGallery(img);

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
    
    modalImg.src = img.src;
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
        GenerateGallery(secretGallery);

        SecretDiscovered();
    }
    secretGalleryOnScreen = true;
}

function SecretDiscovered() {

    //Crear la ventana de Secreto encontrado solo si no existe
    if (document.getElementById("animatedSecretContainer") == null) {
        //Para el contenedor:
        const divExt = document.createElement("div");
        divExt.id = "animatedSecretContainer";
        divExt.className = "animatedSecret";
        divExt.style = "display: none;";

        //Imagen del contenedor:
        const imgInt = document.createElement("img");
        imgInt.src = "/recursos/img/otros/Pommy loading.gif";
        divExt.appendChild(imgInt);

        //Texto del contenedor:
        const divInt = document.createElement("div");
        divInt.className = "animatedSecretContent";
        divInt.innerHTML = "Secreto encontrado";
        divExt.appendChild(divInt);

        //Insertar la ventana en la página
        document.body.appendChild(divExt);
    }

    //Reproducir un audio al descubrir un secreto
    var audio = new Audio('/recursos/audio/Menu Select Sound.mp3');
    audio.volume = 0.5;
    audio.play();

    //Mostrar la ventana de Secreto encontrado
    var secretContainer = document.getElementById("animatedSecretContainer");
    secretContainer.style.display = "";

    secretContainer.classList.remove("animatedSecret");
    void secretContainer.offsetWidth;
    secretContainer.classList.add("animatedSecret");
}

function GenerateGallery(pArray) {

    var currentGallery = pArray;
    var currentDirectory;
    var currentCol;

    if (currentGallery === img) {
        currentDirectory = "/galeria/img/";
        currentCol = "galCol";
    }

    if (currentGallery === secretGallery) {
        currentDirectory = "/galeria/secretGallery/";
        currentCol = "secGalCol";
    }

    for (var i = 0; i < currentGallery.length; i++) {
        const img = document.createElement("img");
        img.src = currentDirectory + currentGallery[i][0];
        img.className = "gal-img";
        img.alt = currentGallery[i][0].substring(0, currentGallery[i][0].length - 4);
        img.onclick = function () { OpenModal(img); }
        img.loading = "lazy";

        src = document.getElementById(currentCol + currentGallery[i][1]);
        src.appendChild(img);
    }
}

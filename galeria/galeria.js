var audio = document.getElementById("galleryAudio");
audio.volume = 0.1;

FixImages();

function FixImages() {
    var elements = document.getElementsByClassName("gal-imgs-col");
    var i;

    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";
        elements[i].style.flex = "25%";
    }
}

function OpenModal(pImage) {
    var modal = document.getElementById("galleryModal");

    var img = pImage
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("gal-caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = pImage.alt;

    document.body.style.overflow = 'hidden';
}

function CloseModal() {
    var modal = document.getElementById("galleryModal");
    modal.style.display = "none";

    document.body.style.overflow = 'visible';
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
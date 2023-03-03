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
    var audio = new Audio('/recursos/audio/Secret.mp3');
    audio.play();

    //Mostrar la ventana de Secreto encontrado
    var secretContainer = document.getElementById("animatedSecretContainer");
    secretContainer.style.display = "";

    secretContainer.classList.remove("animatedSecret");
    void secretContainer.offsetWidth;
    secretContainer.classList.add("animatedSecret");
}

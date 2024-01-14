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

        //Insertar la ventana en la p�gina
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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
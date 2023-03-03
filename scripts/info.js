var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;

var secretDiscovered = false;

function InfoCounter(noElement) {
    if (secretDiscovered == true) {
        return;
    }

    if (noElement == 1) {
        number1 += 1;
        if (number1 > 9) {
            number1 = 0;
        }
    }
        
    if (noElement == 2) {
        number2 += 1;
        if (number2 > 9) {
            number2 = 0;
        }
    }

    if (noElement == 3) {
        number3 += 1;
        if (number3 > 9) {
            number3 = 0;
        }
    }

    if (noElement == 4) {
        number4 += 1;
        if (number4 > 9) {
            number4 = 0;
        }
    }

    if (number1 + "" + number2 + "" + number3 + "" + number4 == "1996") {
        SecretDiscovered();
        UnleashCrashito();
        secretDiscovered = true;
    }
}

function UnleashCrashito() {
    const img = document.createElement("img");
    img.src = "/recursos/img/otros/Crashito.gif";
    img.className = "animatedCrash"

    document.body.appendChild(img);
}
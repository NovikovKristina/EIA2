/* Aufgabe: Aufgabe 0.5 "Kleine interaktive Webseite"
Name: Kristina Novikov
Matrikel: 254136
Datum: 18.03.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
document.addEventListener('DOMContentLoaded', function () {
    var Greeter = prompt("Hier bitte Ihren Namen eingeben");
    if (Greeter != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Hallo " + Greeter + "! :-)";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Gestaltung").style.color = "#4d1933";
    document.getElementById("Gestaltung").style.fontSize = "3em";
    document.getElementById("Gestaltung").style.fontFamily = "sans-serif";
    document.getElementById("Gestaltung").style.textAlign = "center";
    document.getElementById("Gestaltung").style.backgroundColor = "#f9ecf2";
});

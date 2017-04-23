//Aufgabe: Aufgabe 3a "Sissas Summe"
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 19.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
// Verbesserung der Aufgabe
document.addEventListener("DOMContentLoaded", init);
function init(_event) {
    // Tooltip erstellen
    let toolTip = document.createElement("span");
    document.body.appendChild(toolTip);
    toolTip.setAttribute("id", "tooltip");
    let white = true;
    let reisKoerner = 1;
    let summe = 0;
    for (let zeile = 0; zeile < 8; zeile++) {
        for (let flaeche = 0; flaeche < 8; flaeche++) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.innerText = " " + reisKoerner;
            reisKoerner = reisKoerner * 2;
            if (white == true) {
                div.style.backgroundColor = "#ffffff";
                div.style.color = "#000000";
                white = !white;
            }
            else {
                div.style.backgroundColor = "#000000";
                div.style.color = "#ffffff";
                white = true;
            }
        }
        if (white == true) {
            white = !white;
        }
        else {
            white = true;
        }
        reisKoerner *= 2;
    }
    // Aufgabe 3a - Felder markieren //
    // Nur die Felder der ersten Reihe sollen markiert werden
    let felderErsteReihe = document.getElementsByTagName("div");
    for (let f = 0; f < 8; f++) {
        felderErsteReihe[f].addEventListener("click", init);
        function init(_event) {
            markierungSetzen(felderErsteReihe[f]);
        }
    }
    // Angeklickte Felder farbig markieren
    function markierungSetzen(geklicktesFeldMarkieren) {
        let markierteFelder = document.getElementsByClassName("markiert");
        geklicktesFeldMarkieren.classList.toggle("markiert");
        // Aufgabe 3a - Tooltip �ber markierten Feld        
        // Tooltip anzeigen, wenn ein oder mehrere Felder markiert sind, ansonsten nicht anzeigen
        if (markierteFelder.length >= 1) {
            document.getElementById("tooltip").style.display = "inline-block";
        }
        else {
            document.getElementById("tooltip").style.display = "none";
        }
        // Inhalt des Tooltips ist die Summe der Reisk�rner in Dezimal und in Hexadezimalzahlen       
        summe = 0;
        for (let t = 0; t < markierteFelder.length; t++) {
            summe += Number(markierteFelder[t].textContent);
            let dezimal = summe.toString();
            let hexadezimal = summe.toString(16);
            toolTip.textContent = "Summe der Reiskoerner " + "Dezimal: " + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
        }
        // Tooltip soll sich mit Maucusor mitbewegen
        document.onmousemove = function (_event) {
            toolTip.style.top = (_event.clientY + 8) + "px";
            toolTip.style.left = (_event.clientX + 10) + "px";
        };
    }
}
//# sourceMappingURL=3a.js.map
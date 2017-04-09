//Aufgabe: Aufgabe 3a "Sissas Summe"
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 09.04.2017
//Diesen Code habe ich nicht ganz alleine geschrieben, ich habe viel recherchiert und ausprobiert
//Im Grunde verstehe ich den Code, aber ich brauche immer etwas Hilfe und Unterst�tung um voranzukommen
//Zudem habe ich es leider nicht hinbekommen, dass die Markierung bei erneutem Klick wieder verschwindet
//und einen Tooltip zu erstellen
document.addEventListener("DOMContentLoaded", function () {
    let white = true;
    let reisKoerner = 1;
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
    }
    // Aufgabe 3a - Felder markieren //
    let div = document.getElementsByTagName("div");
    for (let markiert = 0; markiert < 9; markiert++) {
        div[markiert].addEventListener("click", markierungSetzen);
        let markierung = true;
        function markierungSetzen() {
            if (markierung == true) {
                div[markiert].style.backgroundColor = "lightblue";
                markierung = false;
            }
            else {
                div[markiert].style.backgroundColor = "lightblue";
                markierung = false;
            }
            if (markierung == true) {
                markierung = !markierung;
            }
            else {
                markierung = true;
            }
        }
    }
});
// Tooltip mit Mauscursor //
//    document.addEventListener("mouseover", function(Event) {
//        document.getElementById("SummeReiskoerner").style.left = (Event.clientX + 10) + "px";
//        document.getElementById("SummeReiskoerner").style.top = (Event.clientY + 10) + "px";
//});
//# sourceMappingURL=3a.js.map
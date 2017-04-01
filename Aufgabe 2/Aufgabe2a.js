document.addEventListener("DOMContentLoaded", function () {
    let white = true;
    let reisKoerner = 1;
    for (let Zeile = 0; Zeile < 8; Zeile++) {
        for (let Flaeche = 0; Flaeche < 8; Flaeche++) {
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
});
//# sourceMappingURL=Aufgabe2a.js.map
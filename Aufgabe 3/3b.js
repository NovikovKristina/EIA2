//Aufgabe: Aufgabe 3b "Mau Mau"
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 19.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
// Verbesserung der Aufgabe
var aufgabe3b;
(function (aufgabe3b) {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        // Array mit allen Spielkarten
        let spielkarten = ["Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Dame", "Kreuz K�nig", "Kreuz Bube", "Kreuz Ass",
            "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Dame", "Pik K�nig", "Pik Bube", "Pik Ass",
            "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Dame", "Herz K�nig", "Herz Bube", "Herz Ass",
            "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Dame", "Karo K�nig", "Karo Bube", "Karo Ass"
        ];
        // Array, welcher sp�ter nach und nach durch das Ziehen von Karten gef�llt wird
        let sammlungHandkarten = [];
        // Array, welcher sp�ter durch das Ablegen von Karten gef�llt wird
        let sammlungAblagekarten = [];
        window.onload = function () {
            // Spielkarten Div zum Nachzihehen
            let kartenStapel = document.createElement("div");
            document.body.appendChild(kartenStapel);
            kartenStapel.id = "kartenStapel";
            // Styles
            kartenStapel.textContent = "Kartenstapel";
            kartenStapel.style.border = "1px solid black";
            kartenStapel.style.width = "150px";
            kartenStapel.style.height = "220px";
            kartenStapel.style.backgroundColor = "lavender";
            kartenStapel.style.fontSize = "1.2em";
            kartenStapel.style.fontFamily = "sans-serif";
            kartenStapel.style.lineHeight = "2em";
            kartenStapel.style.textAlign = "center";
            kartenStapel.style.cssFloat = "clearLeft";
            kartenStapel.style.margin = "2em";
            // Kartenablagestapel Div
            let ablageStapel = document.createElement("div");
            document.body.appendChild(ablageStapel);
            ablageStapel.id = "ablageStapel";
            // Styles
            ablageStapel.textContent = "Ablagestapel";
            ablageStapel.style.border = "1px solid black";
            ablageStapel.style.width = "150px";
            ablageStapel.style.height = "220px";
            ablageStapel.style.backgroundColor = "lavenderBlush";
            ablageStapel.style.fontSize = "1.2em";
            ablageStapel.style.fontFamily = "sans-serif";
            ablageStapel.style.lineHeight = "2em";
            ablageStapel.style.textAlign = "center";
            ablageStapel.style.cssFloat = "right";
            ablageStapel.style.margin = "2em";
            // Funktion zum Ziehen von Karten und dem Hinzuf�gen zum Handkartenstapel
            document.getElementById("kartenStapel").addEventListener("click", function init(_event) {
                if (sammlungHandkarten.length < 5 && spielkarten.length > 0) {
                    // Zufallszahl generieren, damit eine zuf�llige Karte aus dem Spielkarten Array gezogen wird
                    let zufallsKarte = Math.floor(Math.random() * (spielkarten.length) + 0);
                    let karteZiehen = spielkarten[zufallsKarte];
                    // Gew�hlte Karte aus dem Array der Spielkarten entfernen
                    spielkarten.splice(zufallsKarte, 1);
                    console.log("Karte wurde aus Array der Spielkarten enfernt");
                    // Gew�hlt Karte zum Array der Handkarten hinzuf�gen
                    sammlungHandkarten.push(karteZiehen);
                    console.log("Karte wurde zum Array der Handkarten hinzugef�gt");
                    // Handkarten
                    let handkarten = document.createElement("div");
                    document.body.appendChild(handkarten);
                    handkarten.id = "handkarten";
                    // Handkarten Divs (bis zu 5 St�ck)
                    let handStapel = document.createElement("div");
                    document.getElementById("handkarten").appendChild(handStapel);
                    // Styles
                    handStapel.style.border = "1px solid black";
                    handStapel.style.width = "150px";
                    handStapel.style.height = "220px";
                    handStapel.style.backgroundColor = "aliceBlue";
                    handStapel.style.fontSize = "1.2em";
                    handStapel.style.fontFamily = "sans-serif";
                    handStapel.style.lineHeight = "2em";
                    handStapel.style.textAlign = "center";
                    handStapel.style.cssFloat = "left";
                    handStapel.style.margin = "2em";
                    handStapel.style.marginRight = "1.5em";
                    handStapel.textContent = karteZiehen;
                    console.log("gezogene Spielkarte wird zur Handkarte mit eigenem Div");
                    // Funktion um Karten aus dem Handstapel zu entfernen und sie dem Ablagestapel hinzuzuf�gen
                    handStapel.addEventListener("click", function init(_event) {
                        for (let i = 0; i < sammlungHandkarten.length; i++) {
                            if (this.textContent == sammlungHandkarten[i]) {
                                // Gew�hlte Karte aus dem Array der Handkarten entfernen
                                sammlungHandkarten.splice(i, 1);
                                console.log("Karte wurde aus Array der Handkarten enfernt");
                                // Gew�hlt Karte zum Ablagestapel hinzuf�gen
                                sammlungAblagekarten.push(sammlungHandkarten[i]);
                                console.log("Karte wurde zum Array der Ablagekarten hinzugef�gt");
                                break;
                            }
                        }
                        // Auf dem Ablagestapel anzeigen, welche Karte aktuell oben auf dem Stapel liegt
                        document.getElementById("ablageStapel").textContent = "Aktuelle Karte: " + this.textContent;
                        // Gew�hlte Karte bei Klick entfernen
                        this.parentNode.removeChild(this);
                        console.log("Gew�hlte Karte wurde entfernt");
                    });
                }
            });
        };
    }
})(aufgabe3b || (aufgabe3b = {}));
//# sourceMappingURL=3b.js.map
//Aufgabe: Aufgabe 3b "Mau Mau"
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 19.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


// Verbesserung der Aufgabe


document.addEventListener("DOMContentLoaded", function(mauMauKarten) {

    // Array mit allen Spielkarten
    let spielkarten: string[] = ["Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Dame", "Kreuz König", "Kreuz Bube", "Kreuz Ass",
                                 "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Dame", "Pik König", "Pik Bube", "Pik Ass",
                                 "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Dame", "Herz König", "Herz Bube", "Herz Ass",
                                 "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Dame", "Karo König", "Karo Bube", "Karo Ass"
    ];

    // Array, welcher später nach und nach durch das Ziehen von Karten gefüllt wird
    let sammlungHandkarten: string[] = [];

    // Array, welcher später durch das Ablegen von Karten gefüllt wird
    let sammlungAblagekarten: string[] = [];

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



    // Funktion zum Ziehen von Karten und dem Hinzufügen zum Handkartenstapel
    document.getElementById("kartenStapel").addEventListener("click", function(karteZumHandstapel) {

        if (sammlungHandkarten.length < 5 && spielkarten.length > 0) {

            // Zufallszahl generieren, damit eine zufällige Karte aus dem Spielkarten Array gezogen wird
            let zufallsKarte: number = Math.floor(Math.random() * (spielkarten.length) + 0);

            let karteZiehen: string = spielkarten[zufallsKarte];

            // Gewählte Karte aus dem Array der Spielkarten entfernen
            spielkarten.splice(zufallsKarte, 1);
            console.log("Karte wurde aus Array der Spielkarten enfernt");

            // Gewählt Karte zum Array der Handkarten hinzufügen
            sammlungHandkarten.push(karteZiehen);
            console.log("Karte wurde zum Array der Handkarten hinzugefügt");


            // Handkarten
            let handkarten = document.createElement("div");
            document.body.appendChild(handkarten);
            handkarten.id = "handkarten";


            // Handkarten Divs (bis zu 5 Stück können durch Ziehen von Karten erstellt werden)
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



            // Funktion um Karten aus dem Handstapel zu entfernen und sie dem Ablagestapel hinzuzufügen
            handStapel.addEventListener("click", function(karteZumAblagestapel) {

                for (let i: number = 0; i < sammlungHandkarten.length; i++) {

                    if (this.textContent == sammlungHandkarten[i]) {

                        // Gewählte Karte aus dem Array der Handkarten entfernen
                        sammlungHandkarten.splice(i, 1);
                        console.log("Karte wurde aus Array der Handkarten enfernt");

                        // Gewählt Karte zum Ablagestapel hinzufügen
                        sammlungAblagekarten.push(sammlungHandkarten[i]);
                        console.log("Karte wurde zum Array der Ablagekarten hinzugefügt");

                        break;
                    }
                }



                // Auf dem Ablagestapel anzeigen, welche Karte aktuell oben auf dem Stapel liegt
                document.getElementById("ablageStapel").textContent = "Aktuelle Karte: " + this.textContent;

                // Gewählte Karte bei Klick entfernen
                this.parentNode.removeChild(this);
                console.log("Gewählte Karte wurde entfernt");


            });
        }
    });
});
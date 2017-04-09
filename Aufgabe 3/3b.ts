//Aufgabe: Aufgabe 3b "Mau Mau"
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 09.04.2017

//Diesen Code habe ich nicht ganz alleine geschrieben, ich habe viel recherchiert und ausprobiert
//Im Grunde verstehe ich den Code, aber ich brauche immer etwas Hilfe und Unterstütung um voranzukommen
//Leider funktioniert die Weitergabe vom Handstapel an den Ablagestapel noch nicht


document.addEventListener("DOMContentLoaded", function(mauMauKarten) {

    let spielkarten: string[] = [
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Dame", "Kreuz König", "Kreuz Bube", "Kreuz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Dame", "Pik König", "Pik Bube", "Pik Ass",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Dame", "Herz König", "Herz Bube", "Herz Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Dame", "Karo König", "Karo Bube", "Karo Ass"
    ];
    let ablagekarten: string[] = [];
    let handkarten: string[] = [];


    document.getElementById("nachziehen").textContent = "Kartenstapel";
    document.getElementById("nachziehen").style.textAlign = "center";

    document.getElementById("ablegen").textContent = "Aktuelle Karte: " + ablagekarten[ablagekarten.length - 1];
    document.getElementById("ablegen").style.textAlign = "center";


    document.getElementById("nachziehen").addEventListener("click", function() {

        if (handkarten.length < 5) {
            let kartennummer: number = Math.floor((Math.random() * 31));

            let div: HTMLDivElement = document.createElement("div");
            document.getElementById("hand").appendChild(div);

            handkarten.push(spielkarten[kartennummer]);
            spielkarten.splice(kartennummer, 1);

            div.className = "handkarten";
            div.textContent = handkarten[handkarten.length - 1];
            div.style.display = "block";
            document.getElementById("hand").style.textAlign = "center";

            div.addEventListener("click", function() {
                for (let n: number = 0; n < handkarten.length; n++) {
                    if (this.textContent == handkarten[n]) {
                        ablagekarten.push(handkarten[n]);
                        handkarten.splice(n, 1);
                    }
                }
            });
        }
    });
});
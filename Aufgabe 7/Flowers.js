//Aufgabe: Aufgabe 
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 11.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe7;
(function (Aufgabe7) {
    class Blumenwiese {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
        }
        updateFlowers() {
            this.drawFlower1();
            this.drawFlower2();
            this.drawFlower3();
            this.setRandomFlower();
        }
        setRandomFlower() {
            let anzahlBlumen = 20;
            for (let i = 0; i < anzahlBlumen; i++) {
                let zufallsBlume = Math.floor((Math.random() * 3) + 0);
                this.x = Math.floor(Math.random() * (1100 - 0) + 0);
                this.y = Math.floor(Math.random() * (630 - 400) + 550);
                //                        console.log("der x-Wert ist " + x, "der y-Wert ist " + y, zufallsBlume);
                switch (zufallsBlume) {
                    case 0:
                        this.drawFlower1();
                        break;
                    case 1:
                        this.drawFlower2();
                        break;
                    case 2:
                        this.drawFlower3();
                        break;
                    default:
                        break;
                }
            }
        }
        drawFlower1() {
            // linke Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 334, this.y - 230, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#FA5858";
            Aufgabe7.crc2.strokeStyle = "#FA5858";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // linke obere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 330, this.y - 240, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // linke untere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 330, this.y - 220, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechte Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 306, this.y - 230, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechte obere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 310, this.y - 240, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechte untere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 310, this.y - 220, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // obere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 320, this.y - 243, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // untere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 320, this.y - 217, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Blumenkopf
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 320, this.y - 230, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#FAAC58";
            Aufgabe7.crc2.strokeStyle = "#FAAC58";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        drawFlower2() {
            // linke Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 8, this.y - 167, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#9A2EFE";
            Aufgabe7.crc2.strokeStyle = "#9A2EFE";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechte Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 32, this.y - 167, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // obere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 20, this.y - 180, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // untere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 20, this.y - 155, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Blumenkopf
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 20, this.y - 167.5, 9, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#D0A9F5";
            Aufgabe7.crc2.strokeStyle = "#D0A9F5";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        drawFlower3() {
            // linke obere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 230, this.y - 140, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#58ACFA";
            Aufgabe7.crc2.strokeStyle = "#58ACFA";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // linke untere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 230, this.y - 120, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechte obere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 210, this.y - 140, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechte untere Bl�te
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 210, this.y - 120, 10, 0, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Blumenkopf
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 220, this.y - 130, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#81DAF5";
            Aufgabe7.crc2.strokeStyle = "#81DAF5";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
    }
    Aufgabe7.Blumenwiese = Blumenwiese;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=Flowers.js.map
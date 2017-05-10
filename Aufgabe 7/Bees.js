//Aufgabe: Aufgabe 
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 10.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe7;
(function (Aufgabe7) {
    class Bienenschwarm {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            //            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        updateBees() {
            this.moveBees();
            this.drawBees();
        }
        drawBees() {
            // Kopf
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 310, this.y - 180, 6, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#000000";
            Aufgabe7.crc2.strokeStyle = "#000000";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Fl�gel 1
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 317, this.y - 190, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#EFF8FB";
            Aufgabe7.crc2.strokeStyle = "#E6E6E6";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Fl�gel 2
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 323.5, this.y - 190, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#EFF8FB";
            Aufgabe7.crc2.strokeStyle = "#E6E6E6";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            //K�rper
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 320, this.y - 180, 8.5, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#F4FA58";
            Aufgabe7.crc2.strokeStyle = "#F4FA58";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Streifen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#000000";
            Aufgabe7.crc2.fillRect(this.x + 318, this.y - 188, 5.5, 17);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // F�hler Linie
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#000000";
            Aufgabe7.crc2.fillRect(this.x + 307, this.y - 193, 2, 8);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // F�hler Kreis
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 308, this.y - 191, 1.2, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#000000";
            Aufgabe7.crc2.strokeStyle = "#000000";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        moveBees() {
            this.x += Math.random() * 8 - 6;
            this.y += Math.random() * 4 - 2;
        }
        flybackBees() {
            if (this.x < -300) {
                this.x = 800;
            }
            if (this.x == 0) {
                this.x = 800;
            }
        }
    }
    Aufgabe7.Bienenschwarm = Bienenschwarm;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=Bees.js.map
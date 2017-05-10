//Aufgabe: Aufgabe 
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 09.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe7 {

    export class Bienenschwarm {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
//            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            // Kopf
            crc2.beginPath();
            crc2.arc(this.x + 310, this.y - 180, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.fill();
            crc2.stroke();
            // Flügel 1
            crc2.beginPath();
            crc2.arc(this.x + 317, this.y - 190, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#EFF8FB";
            crc2.strokeStyle = "#E6E6E6";
            crc2.fill();
            crc2.stroke();
            // Flügel 2
            crc2.beginPath();
            crc2.arc(this.x + 323.5, this.y - 190, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#EFF8FB";
            crc2.strokeStyle = "#E6E6E6";
            crc2.fill();
            crc2.stroke();
            //Körper
            crc2.beginPath();
            crc2.arc(this.x + 320, this.y - 180, 8.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#F4FA58";
            crc2.strokeStyle = "#F4FA58";
            crc2.fill();
            crc2.stroke();
            // Streifen
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x + 318, this.y - 188, 5.5, 17);
            crc2.fill();
            crc2.stroke();
            // Fühler Linie
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x + 307, this.y - 193, 2, 8);
            crc2.fill();
            crc2.stroke();
            // Fühler Kreis
            crc2.beginPath();
            crc2.arc(this.x + 308, this.y - 191, 1.2, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.fill();
            crc2.stroke();
        }

        move(): void {
            this.x += Math.random() * 8 - 6;
            this.y += Math.random() * 4 - 2;
        }

//        setRandomPosition(): void {
//            this.x = Math.random() * 200;
//            this.y = Math.random() * 200;
//        }
//
//        setRandomStyle(): void {
//            this.size = Math.random() * 30 + 10;
//            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
//        }
    }
}
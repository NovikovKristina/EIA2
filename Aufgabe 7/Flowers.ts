//Aufgabe: Aufgabe 
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 11.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe7 {

    export class Blumenwiese {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;

        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
        }

        updateFlowers(): void {
            this.drawFlower1();
            this.drawFlower2();
            this.drawFlower3();
            this.setRandomFlower();
        }
        
        setRandomFlower(): void {
            let anzahlBlumen: number = 20;
            for (let i: number = 0; i < anzahlBlumen; i++) {
                let zufallsBlume: number = Math.floor((Math.random() * 3) + 0);
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
        

        drawFlower1(): void {
            // linke Blüte
            crc2.beginPath();
            crc2.arc(this.x - 334, this.y - 230, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#FA5858";
            crc2.strokeStyle = "#FA5858";
            crc2.fill();
            crc2.stroke();
            // linke obere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 330, this.y - 240, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // linke untere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 330, this.y - 220, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte Blüte
            crc2.beginPath();
            crc2.arc(this.x - 306, this.y - 230, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte obere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 310, this.y - 240, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte untere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 310, this.y - 220, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // obere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 320, this.y - 243, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // untere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 320, this.y - 217, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(this.x - 320, this.y - 230, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAAC58";
            crc2.strokeStyle = "#FAAC58";
            crc2.fill();
            crc2.stroke();
        }

        drawFlower2(): void {
            // linke Blüte
            crc2.beginPath();
            crc2.arc(this.x + 8, this.y - 167, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#9A2EFE";
            crc2.strokeStyle = "#9A2EFE";
            crc2.fill();
            crc2.stroke();
            // rechte Blüte
            crc2.beginPath();
            crc2.arc(this.x + 32, this.y - 167, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // obere Blüte
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 180, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // untere Blüte
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 155, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 167.5, 9, 0, 2 * Math.PI);
            crc2.fillStyle = "#D0A9F5";
            crc2.strokeStyle = "#D0A9F5";
            crc2.fill();
            crc2.stroke();
        }

        drawFlower3(): void {
            // linke obere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 230, this.y - 140, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#58ACFA";
            crc2.strokeStyle = "#58ACFA";
            crc2.fill();
            crc2.stroke();
            // linke untere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 230, this.y - 120, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte obere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 210, this.y - 140, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte untere Blüte
            crc2.beginPath();
            crc2.arc(this.x - 210, this.y - 120, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(this.x - 220, this.y - 130, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#81DAF5";
            crc2.strokeStyle = "#81DAF5";
            crc2.fill();
            crc2.stroke();
        }

        

    }
}
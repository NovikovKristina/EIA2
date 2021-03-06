//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 06.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe6a {
    window.addEventListener("load", init);

    interface Bienenschwarm {
        x: number;
        y: number;
        size: number;
        color: string;
    }

    let crc2: CanvasRenderingContext2D;
    let bienen: Bienenschwarm[] = [];
    
    let n: number = 10;
    let savePicture: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Wiese       
        crc2.fillStyle = "#ACFA58";
        crc2.fillRect(0, 300, 1136, 350);

        // Himmel
        crc2.fillStyle = "#A9E2F3";
        crc2.fillRect(0, 300, 1136, -300);

        drawBergEins(0, 300, "#A4A4A4", "#A4A4A4");
        drawBergZwei(50, 300, "#A4A4A4", "#A4A4A4");
        drawBergDrei(340, 300, "#A4A4A4", "#A4A4A4");
        drawWolkeEins(0, 0, "#FFFFFF", "#FFFFFF");
        drawWolkeZwei(0, 0, "#FFFFFF", "#FFFFFF");
        drawSonne(0, 0, "#F4FA58", "#F4FA58");
        drawTanneEins(100, 300, "#0B6121", "#0B6121");
        drawTanneZwei(800, 255, "#0B6121", "#0B6121");
        drawBlumeEins(550, 700, "#FA5858", "#FA5858");
        drawBlumeZwei(700, 600, "#9A2EFE", "#9A2EFE");
        drawBlumeDrei(1100, 700, "#58ACFA", "#58ACFA");
        drawBienenkorb(0, 0, "#61380B", "#61380B");
        //        drawBiene(0, 0, "#000000", "#000000");


        // Blumen zuf�llig platzieren
        let anzahlBlumen: number = 20;
        for (let i: number = 0; i < anzahlBlumen; i++) {
            let zufallsBlume: number = Math.floor((Math.random() * 3) + 0);
            let x: number = Math.floor(Math.random() * (1100 - 0) + 0);
            let y: number = Math.floor(Math.random() * (630 - 400) + 550);
            //        console.log("der x-Wert ist " + x, "der y-Wert ist " + y, zufallsBlume);

            switch (zufallsBlume) {
                case 0:
                    drawBlumeEins(x, y, "#FA8258", "#FA8258");
                    break;

                case 1:
                    drawBlumeZwei(x, y, "#9A2EFE", "#9A2EFE");
                    break;

                case 2:
                    drawBlumeDrei(x, y, "#58ACFA", "#58ACFA");
                    break;

                default:
                    break;
            }
        }


        // Berge 1-3
        function drawBergEins(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 0, _y + 0);
            crc2.lineTo(_x + 380, _y + 0);
            crc2.lineTo(_x + 180, _y - 180);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // Schnee auf der Bergspitze
            crc2.beginPath();
            crc2.fillStyle = "#E6E6E6";
            crc2.strokeStyle = "#E6E6E6";
            crc2.moveTo(_x + 180.3, _y - 180.3);
            crc2.lineTo(_x + 215, _y - 150);
            crc2.lineTo(_x + 149, _y - 150);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawBergZwei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 80, _y + 0);
            crc2.lineTo(_x + 450, _y + 0);
            crc2.lineTo(_x + 275, _y - 250);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // Schnee auf der Bergspitze
            crc2.beginPath();
            crc2.fillStyle = "#E6E6E6";
            crc2.strokeStyle = "#E6E6E6";
            crc2.moveTo(_x + 275, _y - 250.2);
            crc2.lineTo(_x + 311, _y - 201);
            crc2.lineTo(_x + 236, _y - 200);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawBergDrei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 0, _y + 0);
            crc2.lineTo(_x + 300, _y + 0);
            crc2.lineTo(_x + 150, _y - 170);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // Schnee auf der Bergspitze
            crc2.beginPath();
            crc2.fillStyle = "#E6E6E6";
            crc2.strokeStyle = "#E6E6E6";
            crc2.moveTo(_x + 150, _y - 171);
            crc2.lineTo(_x + 182, _y - 135);
            crc2.lineTo(_x + 119, _y - 135);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        // Wolken 1 und 2
        function drawWolkeEins(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linker Bogen
            crc2.beginPath();
            crc2.arc(50, 75, 30, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#FFFFFF";
            crc2.fill();
            crc2.stroke();
            // rechter Bogen
            crc2.beginPath();
            crc2.arc(100, 75, 30, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // unterer Bogen
            crc2.beginPath();
            crc2.arc(75, 90, 30, 2 * Math.PI, 1 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // oberer Bogen
            crc2.beginPath();
            crc2.arc(75, 60, 30, 1 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Rect um die L�cke zu f�llen
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fillRect(50, 60, 50, 30);
            crc2.fill();
            crc2.stroke();
        }


        function drawWolkeZwei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linker Bogen
            crc2.beginPath();
            crc2.arc(900, 125, 30, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#FFFFFF";
            crc2.fill();
            crc2.stroke();
            // rechter Bogen
            crc2.beginPath();
            crc2.arc(950, 125, 30, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // unterer Bogen
            crc2.beginPath();
            crc2.arc(925, 140, 30, 2 * Math.PI, 1 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // oberer Bogen
            crc2.beginPath();
            crc2.arc(925, 110, 30, 1 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Rect um die L�cke zu f�llen
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fillRect(900, 110, 50, 30);
            crc2.fill();
            crc2.stroke();
        }

        // Sonne
        function drawSonne(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.arc(700, 75, 45, 0, 2 * Math.PI);
            crc2.fillStyle = "#F4FA58";
            crc2.strokeStyle = "#F4FA58";
            crc2.fill();
            crc2.stroke();
        }

        // Tannen 1 und 2
        function drawTanneEins(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // Baumstamm
            crc2.beginPath();
            crc2.fillStyle = "#5F4C0B";
            crc2.strokeStyle = "#5F4C0B";
            crc2.fillRect(105, 330, 20, 35);
            crc2.fill();
            crc2.stroke();
            // zweiter Teil der Baumkrone
            crc2.beginPath();
            crc2.fillStyle = "#0B6121";
            crc2.strokeStyle = "#0B6121";
            crc2.moveTo(_x - 20, _y + 40);
            crc2.lineTo(_x + 17, _y - 15);
            crc2.lineTo(_x + 50, _y + 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // erster Teil der Baumkrone
            crc2.beginPath();
            crc2.moveTo(_x - 14, _y + 10);
            crc2.lineTo(_x + 16.5, _y - 34);
            crc2.lineTo(_x + 44, _y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawTanneZwei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // Baumstamm
            crc2.beginPath();
            crc2.fillStyle = "#5F4C0B";
            crc2.strokeStyle = "#5F4C0B";
            crc2.fillRect(805, 285, 20, 35);
            crc2.fill();
            crc2.stroke();
            // zweiter Teil der Baumkrone
            crc2.beginPath();
            crc2.fillStyle = "#0B6121";
            crc2.strokeStyle = "#0B6121";
            crc2.moveTo(_x - 20, _y + 40);
            crc2.lineTo(_x + 17, _y - 15);
            crc2.lineTo(_x + 50, _y + 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // erster Teil der Baumkrone
            crc2.beginPath();
            crc2.moveTo(_x - 14, _y + 10);
            crc2.lineTo(_x + 16.5, _y - 34);
            crc2.lineTo(_x + 44, _y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


        // Blumen 1 - 3
        function drawBlumeEins(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linke Bl�te
            crc2.beginPath();
            crc2.arc(_x - 334, _y - 230, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#FA5858";
            crc2.strokeStyle = "#FA5858";
            crc2.fill();
            crc2.stroke();
            // linke obere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 330, _y - 240, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // linke untere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 330, _y - 220, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte Bl�te
            crc2.beginPath();
            crc2.arc(_x - 306, _y - 230, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte obere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 310, _y - 240, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte untere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 310, _y - 220, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // obere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 320, _y - 243, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // untere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 320, _y - 217, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(_x - 320, _y - 230, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAAC58";
            crc2.strokeStyle = "#FAAC58";
            crc2.fill();
            crc2.stroke();
        }

        function drawBlumeZwei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linke Bl�te
            crc2.beginPath();
            crc2.arc(_x + 8, _y - 167, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#9A2EFE";
            crc2.strokeStyle = "#9A2EFE";
            crc2.fill();
            crc2.stroke();
            // rechte Bl�te
            crc2.beginPath();
            crc2.arc(_x + 32, _y - 167, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // obere Bl�te
            crc2.beginPath();
            crc2.arc(_x + 20, _y - 180, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // untere Bl�te
            crc2.beginPath();
            crc2.arc(_x + 20, _y - 155, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(_x + 20, _y - 167.5, 9, 0, 2 * Math.PI);
            crc2.fillStyle = "#D0A9F5";
            crc2.strokeStyle = "#D0A9F5";
            crc2.fill();
            crc2.stroke();
        }

        function drawBlumeDrei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linke obere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 230, _y - 140, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#58ACFA";
            crc2.strokeStyle = "#58ACFA";
            crc2.fill();
            crc2.stroke();
            // linke untere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 230, _y - 120, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte obere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 210, _y - 140, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte untere Bl�te
            crc2.beginPath();
            crc2.arc(_x - 210, _y - 120, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(_x - 220, _y - 130, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#81DAF5";
            crc2.strokeStyle = "#81DAF5";
            crc2.fill();
            crc2.stroke();
        }

        // Bienenkorb
        function drawBienenkorb(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // Unterer Teil
            crc2.beginPath();
            crc2.arc(1000, 451, 45, 1 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "#61380B";
            crc2.strokeStyle = "#61380B";
            crc2.fill();
            crc2.stroke();
            // Mittlerer Teil
            crc2.beginPath();
            crc2.arc(1000, 430, 40, 1 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Oberer Teil
            crc2.beginPath();
            crc2.arc(1000, 410, 31, 1 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // �ffnung
            crc2.beginPath();
            crc2.arc(1000, 450, 13, 1 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "#3B240B";
            crc2.strokeStyle = "#3B240B";
            crc2.fill();
            crc2.stroke();
        }





        // Aufgabenteil Animation //

        // Bild abspeichern
        savePicture = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Bienen starten bei �ffnung des Bienenkorbes
        for (let i: number = 0; i < n; i++) {
            let b: Bienenschwarm = {x: 0, y: 0, size: 0, color: ""};
            b.x = 670;
            b.y = 600;
            bienen[i] = b;
        }

        window.setTimeout(animate, 20);

        // Bei Mausklick oder Touch kommen weitere Bienen hinzu
        canvas.addEventListener("click", weitereBienen);
        canvas.addEventListener("touch", weitereBienen);

    }
    // Funktion f�r die weiteren Bienen
    function weitereBienen(): void {
        bienen.push({x: 670, y: 600, size: 0, color: ""});
        n++;
    }

    // Biene (Styles)
    function drawBiene(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        // Kopf
        crc2.beginPath();
        crc2.arc(_x + 310, _y - 180, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.fill();
        crc2.stroke();
        // Fl�gel 1
        crc2.beginPath();
        crc2.arc(_x + 317, _y - 190, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "#EFF8FB";
        crc2.strokeStyle = "#E6E6E6";
        crc2.fill();
        crc2.stroke();
        // Fl�gel 2
        crc2.beginPath();
        crc2.arc(_x + 323.5, _y - 190, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "#EFF8FB";
        crc2.strokeStyle = "#E6E6E6";
        crc2.fill();
        crc2.stroke();
        //K�rper
        crc2.beginPath();
        crc2.arc(_x + 320, _y - 180, 8.5, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4FA58";
        crc2.strokeStyle = "#F4FA58";
        crc2.fill();
        crc2.stroke();
        // Streifen
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x + 318, _y - 188, 5.5, 17);
        crc2.fill();
        crc2.stroke();
        // F�hler Linie
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x + 307, _y - 193, 2, 8);
        crc2.fill();
        crc2.stroke();
        // F�hler Kreis
        crc2.beginPath();
        crc2.arc(_x + 308, _y - 191, 1.2, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.fill();
        crc2.stroke();
        console.log("Biene " + drawBiene);
    }



    // Bienen animieren
    function animate(): void {

        // Abgespeichertes Bild wiederherstellen
        crc2.putImageData(savePicture, 0, 0);

        // Das Flugverhalten der Bienen soll etwas nach links neigen
        for (let i: number = 0; i < n; i++) {
            let b: Bienenschwarm = bienen[i];
            b.x += Math.random() * 8 - 6;
            b.y += Math.random() * 4 - 2;


            // Wenn die Bienen den Bildrand verlassen, kommen sie rechts wieder ins Bild

            if (b.x < - 300) {
                b.x = 800;
            }
            if (b.x == 0) {
                b.x = 800;
            }




            drawBiene(b.x, b.y, "#000000", "#000000");
            console.log("Biene " + b.x + b.y);
        }

        window.setTimeout(animate, 20);
    }

}
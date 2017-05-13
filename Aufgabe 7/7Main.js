//Aufgabe: Aufgabe 
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 11.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe7;
(function (Aufgabe7) {
    let bienen = [];
    let n = 10;
    let savePicture;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7.crc2 = canvas.getContext("2d");
        // Wiese       
        Aufgabe7.crc2.fillStyle = "#ACFA58";
        Aufgabe7.crc2.fillRect(0, 300, 1136, 350);
        // Himmel
        Aufgabe7.crc2.fillStyle = "#A9E2F3";
        Aufgabe7.crc2.fillRect(0, 300, 1136, -300);
        drawBergEins(0, 300, "#A4A4A4", "#A4A4A4");
        drawBergZwei(50, 300, "#A4A4A4", "#A4A4A4");
        drawBergDrei(340, 300, "#A4A4A4", "#A4A4A4");
        drawWolkeEins(0, 0, "#FFFFFF", "#FFFFFF");
        drawWolkeZwei(0, 0, "#FFFFFF", "#FFFFFF");
        drawSonne(0, 0, "#F4FA58", "#F4FA58");
        drawTanneEins(100, 300, "#0B6121", "#0B6121");
        drawTanneZwei(800, 255, "#0B6121", "#0B6121");
        drawBienenkorb(0, 0, "#61380B", "#61380B");
        // Berge 1-3
        function drawBergEins(_x, _y, _strokeColor, _fillColor) {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = _fillColor;
            Aufgabe7.crc2.strokeStyle = _strokeColor;
            Aufgabe7.crc2.moveTo(_x + 0, _y + 0);
            Aufgabe7.crc2.lineTo(_x + 380, _y + 0);
            Aufgabe7.crc2.lineTo(_x + 180, _y - 180);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Schnee auf der Bergspitze
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#E6E6E6";
            Aufgabe7.crc2.strokeStyle = "#E6E6E6";
            Aufgabe7.crc2.moveTo(_x + 180.3, _y - 180.3);
            Aufgabe7.crc2.lineTo(_x + 215, _y - 150);
            Aufgabe7.crc2.lineTo(_x + 149, _y - 150);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        function drawBergZwei(_x, _y, _strokeColor, _fillColor) {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = _fillColor;
            Aufgabe7.crc2.strokeStyle = _strokeColor;
            Aufgabe7.crc2.moveTo(_x + 80, _y + 0);
            Aufgabe7.crc2.lineTo(_x + 450, _y + 0);
            Aufgabe7.crc2.lineTo(_x + 275, _y - 250);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Schnee auf der Bergspitze
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#E6E6E6";
            Aufgabe7.crc2.strokeStyle = "#E6E6E6";
            Aufgabe7.crc2.moveTo(_x + 275, _y - 250.2);
            Aufgabe7.crc2.lineTo(_x + 311, _y - 201);
            Aufgabe7.crc2.lineTo(_x + 236, _y - 200);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        function drawBergDrei(_x, _y, _strokeColor, _fillColor) {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = _fillColor;
            Aufgabe7.crc2.strokeStyle = _strokeColor;
            Aufgabe7.crc2.moveTo(_x + 0, _y + 0);
            Aufgabe7.crc2.lineTo(_x + 300, _y + 0);
            Aufgabe7.crc2.lineTo(_x + 150, _y - 170);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Schnee auf der Bergspitze
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#E6E6E6";
            Aufgabe7.crc2.strokeStyle = "#E6E6E6";
            Aufgabe7.crc2.moveTo(_x + 150, _y - 171);
            Aufgabe7.crc2.lineTo(_x + 182, _y - 135);
            Aufgabe7.crc2.lineTo(_x + 119, _y - 135);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        // Wolken 1 und 2
        function drawWolkeEins(_x, _y, _strokeColor, _fillColor) {
            // linker Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(50, 75, 30, 0.5 * Math.PI, 1.5 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#FFFFFF";
            Aufgabe7.crc2.strokeStyle = "#FFFFFF";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechter Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(100, 75, 30, 1.5 * Math.PI, 0.5 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // unterer Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(75, 90, 30, 2 * Math.PI, 1 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // oberer Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(75, 60, 30, 1 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Rect um die L�cke zu f�llen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#FFFFFF";
            Aufgabe7.crc2.fillRect(50, 60, 50, 30);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        function drawWolkeZwei(_x, _y, _strokeColor, _fillColor) {
            // linker Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(900, 125, 30, 0.5 * Math.PI, 1.5 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#FFFFFF";
            Aufgabe7.crc2.strokeStyle = "#FFFFFF";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // rechter Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(950, 125, 30, 1.5 * Math.PI, 0.5 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // unterer Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(925, 140, 30, 2 * Math.PI, 1 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // oberer Bogen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(925, 110, 30, 1 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Rect um die L�cke zu f�llen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#FFFFFF";
            Aufgabe7.crc2.fillRect(900, 110, 50, 30);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        // Sonne
        function drawSonne(_x, _y, _strokeColor, _fillColor) {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(700, 75, 45, 0, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#F4FA58";
            Aufgabe7.crc2.strokeStyle = "#F4FA58";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        // Tannen 1 und 2
        function drawTanneEins(_x, _y, _strokeColor, _fillColor) {
            // Baumstamm
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#5F4C0B";
            Aufgabe7.crc2.strokeStyle = "#5F4C0B";
            Aufgabe7.crc2.fillRect(105, 330, 20, 35);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // zweiter Teil der Baumkrone
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#0B6121";
            Aufgabe7.crc2.strokeStyle = "#0B6121";
            Aufgabe7.crc2.moveTo(_x - 20, _y + 40);
            Aufgabe7.crc2.lineTo(_x + 17, _y - 15);
            Aufgabe7.crc2.lineTo(_x + 50, _y + 40);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // erster Teil der Baumkrone
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(_x - 14, _y + 10);
            Aufgabe7.crc2.lineTo(_x + 16.5, _y - 34);
            Aufgabe7.crc2.lineTo(_x + 44, _y + 10);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        function drawTanneZwei(_x, _y, _strokeColor, _fillColor) {
            // Baumstamm
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#5F4C0B";
            Aufgabe7.crc2.strokeStyle = "#5F4C0B";
            Aufgabe7.crc2.fillRect(805, 285, 20, 35);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // zweiter Teil der Baumkrone
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.fillStyle = "#0B6121";
            Aufgabe7.crc2.strokeStyle = "#0B6121";
            Aufgabe7.crc2.moveTo(_x - 20, _y + 40);
            Aufgabe7.crc2.lineTo(_x + 17, _y - 15);
            Aufgabe7.crc2.lineTo(_x + 50, _y + 40);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // erster Teil der Baumkrone
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(_x - 14, _y + 10);
            Aufgabe7.crc2.lineTo(_x + 16.5, _y - 34);
            Aufgabe7.crc2.lineTo(_x + 44, _y + 10);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        // Bienenkorb
        function drawBienenkorb(_x, _y, _strokeColor, _fillColor) {
            // Unterer Teil
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(1000, 451, 45, 1 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#61380B";
            Aufgabe7.crc2.strokeStyle = "#61380B";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Mittlerer Teil
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(1000, 430, 40, 1 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // Oberer Teil
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(1000, 410, 31, 1 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            // �ffnung
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(1000, 450, 13, 1 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.fillStyle = "#3B240B";
            Aufgabe7.crc2.strokeStyle = "#3B240B";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
        }
        // Aufgabenteil Animation //
        let f = new Aufgabe7.Blumenwiese(600, 700);
        f.updateFlowers();
        // Bild abspeichern
        savePicture = Aufgabe7.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Bienen starten bei �ffnung des Bienenkorbes
        for (let i = 0; i < n; i++) {
            let b = new Aufgabe7.Bienenschwarm(670, 600);
            bienen[i] = b;
        }
        window.setTimeout(animate, 20);
        // Bei Mausklick oder Touch kommen weitere Bienen hinzu
        canvas.addEventListener("click", weitereBienen);
        canvas.addEventListener("touch", weitereBienen);
    }
    // Funktion f�r die weiteren Bienen
    function weitereBienen() {
        let neueBiene = new Aufgabe7.Bienenschwarm(670, 600);
        bienen.push(neueBiene);
        n++;
    }
    // Bienen animieren
    function animate() {
        // Abgespeichertes Bild wiederherstellen
        Aufgabe7.crc2.putImageData(savePicture, 0, 0);
        // Das Flugverhalten der Bienen soll etwas nach links neigen
        for (let i = 0; i < n; i++) {
            let b = bienen[i];
            b.updateBees();
            b.flybackBees();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=7Main.js.map
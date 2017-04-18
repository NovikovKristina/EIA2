namespace Aufgabe_4 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawWiese(0, 300, "#9A2EFE", "#9A2EFE");
        drawHimmel(0, -300, "#A9E2F3", "#A9E2F3");
        drawBergEins(0, 300, "#A4A4A4", "#A4A4A4");
        drawBergZwei(50, 300, "#A4A4A4", "#A4A4A4");
        drawBergDrei(340, 300, "#A4A4A4", "#A4A4A4");
        drawWolkeEins(0, 0, "#FFFFFF", "#FFFFFF");
        drawWolkeZwei(0, 0, "#FFFFFF", "#FFFFFF");
        drawSonne(0, 0, "#F4FA58", "#F4FA58");
        drawTanneEins(100, 300, "#0B6121", "#0B6121");
        drawTanneZwei(800, 255, "#0B6121", "#0B6121");
        drawBlumeEins(0, 0, "#FA5858", "#FA5858");
        drawBlumeZwei(700, 500, "#9A2EFE", "#9A2EFE");
        drawBlumeDrei(500, 300, "#58ACFA", "#58ACFA");


        // Wiese
        function drawWiese(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = "#ACFA58";
            crc2.fillRect(0, 300, 1136, 350);
            crc2.fill();
            crc2.stroke();
        }

        // Himmel
        function drawHimmel(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = "#A9E2F3";
            crc2.fillRect(0, 300, 1136, -300);
            crc2.fill();
            crc2.stroke();
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
            // Rect um die Lücke zu füllen
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
            // Rect um die Lücke zu füllen
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
            // linke Blüte
            crc2.beginPath();
            crc2.arc(346, 450, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#FA8258";
            crc2.strokeStyle = "#FA8258";
            crc2.fill();
            crc2.stroke();
            // linke obere Blüte
            crc2.beginPath();
            crc2.arc(350, 440, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // linke untere Blüte
            crc2.beginPath();
            crc2.arc(350, 460, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte Blüte
            crc2.beginPath();
            crc2.arc(374, 450, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte obere Blüte
            crc2.beginPath();
            crc2.arc(370, 440, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte untere Blüte
            crc2.beginPath();
            crc2.arc(370, 460, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // obere Blüte
            crc2.beginPath();
            crc2.arc(360, 437, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // untere Blüte
            crc2.beginPath();
            crc2.arc(360, 463, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(360, 450, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAAC58";
            crc2.strokeStyle = "#FAAC58";
            crc2.fill();
            crc2.stroke();
        }

        function drawBlumeZwei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linke Blüte
            crc2.beginPath();
            crc2.arc(688, 513, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#9A2EFE";
            crc2.strokeStyle = "#9A2EFE";
            crc2.fill();
            crc2.stroke();
            // rechte Blüte
            crc2.beginPath();
            crc2.arc(712, 513, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // obere Blüte
            crc2.beginPath();
            crc2.arc(700, 500, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // untere Blüte
            crc2.beginPath();
            crc2.arc(700, 525, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(700, 512.5, 9, 0, 2 * Math.PI);
            crc2.fillStyle = "#D0A9F5";
            crc2.strokeStyle = "#D0A9F5";
            crc2.fill();
            crc2.stroke();
        }

        function drawBlumeDrei(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            // linke obere Blüte
            crc2.beginPath();
            crc2.arc(450, 540, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#58ACFA";
            crc2.strokeStyle = "#58ACFA";
            crc2.fill();
            crc2.stroke();
            // linke untere Blüte
            crc2.beginPath();
            crc2.arc(450, 560, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte obere Blüte
            crc2.beginPath();
            crc2.arc(470, 540, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // rechte untere Blüte
            crc2.beginPath();
            crc2.arc(470, 560, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            // Blumenkopf
            crc2.beginPath();
            crc2.arc(460, 550, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#81DAF5";
            crc2.strokeStyle = "#81DAF5";
            crc2.fill();
            crc2.stroke();
        }
        
        

        // Blumen zufällig platzieren
        
//        let colors: string [] = ["#58ACFA", "#9A2EFE", "#FA8258"];
//        
//        let pickRandomFlower = function random() {
//            let i: number = Math.floor(Math.random() * (1100) + 0);
//            let x: number = (Math.random() * (1100) + 0);
//            let y: number = (Math.random() * (640 - 350) + 290);
//            return colors[i];
//            }
            
        
        
        
        
        
        let anzahl: number = 20;
        for (let i: number = 0; i < anzahl; i++) {
            let zufallsBlume: number = Math.floor((Math.random() * 5) + 1);
            let x: number = (Math.random() * (1100) + 0);
            let y: number = (Math.random() * (640 - 350) + 290);
            console.log("X is " + x, "Y is " + y, zufallsBlume);

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
                                        

}
}
    
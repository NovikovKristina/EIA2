namespace StudiVZ {
    
    interface StudentData {
        matrikelnumber: number;
        lastname: string;
        firstname: string;
        age: number;
        gender: boolean;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = weiblich oder 1 = männlich) und Kommentar");
                alert(saveData(input));
                break;
                
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
                
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArray: string[] = _input.split(",");
        let sD: StudentData = {
            matrikelnumber: parseInt(dataArray[0]),
            lastname: dataArray[1],
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5]
        };

        students.push(sD);

        let gender: string;
        if (parseInt(dataArray[4]) == 0) {
            gender = "weiblich";
        }
        else {
            gender = "männlich";
        }

        // Ausgabe der eingegebenen Daten
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnummer: " + sD.matrikelnumber + "\nName: " + sD.lastname + "," + sD.firstname + "\nAlter: " + sD.age + "\nGeschlecht: " + gender + "\nKommentar: " + sD.comment;
    }

    function queryData(_matrikelnumber: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].matrikelnumber == _matrikelnumber) {
                let gender: string = students[i].gender ? "weiblich" : "männlich";
                return "Zugehörige Daten zur Matrikelnummer: " + students[i].matrikelnumber + "\n\nName: " + students[i].lastname + "," + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }

            else {
                return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
            }
        }
    }
}
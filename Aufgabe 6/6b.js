var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = weiblich oder 1 = m�nnlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArray = _input.split(",");
        let sD = {
            matrikelnumber: parseInt(dataArray[0]),
            lastname: dataArray[1],
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 1,
            comment: dataArray[5]
        };
        students.push(sD);
        let gender;
        if (parseInt(dataArray[4]) == 0) {
            gender = "weiblich";
        }
        else {
            gender = "m�nnlich";
        }
        // Ausgabe der eingegebenen Daten
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnummer: " + sD.matrikelnumber + "\nName: " + sD.lastname + "," + sD.firstname + "\nAlter: " + sD.age + "\nGeschlecht: " + gender + "\nKommentar: " + sD.comment;
    }
    function queryData(_matrikelnumber) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelnumber == _matrikelnumber) {
                let gender = students[i].gender ? "m�nnlich" : "weblich";
                return "Zugeh�rige Daten zur Matrikelnummer: " + students[i].matrikelnumber + "\n\nName: " + students[i].lastname + "," + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=6b.js.map
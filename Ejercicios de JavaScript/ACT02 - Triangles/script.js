$(function () {
    /*
        ==============================
        ACTIVITAT 07
        ==============================
        Marc Escudero
        Cristian Miguel
        ------------------------------
 
    */
    $("#analitza").click(function () {
        var petit = $("#petit").nval();
        var mitja = $("#mitja").nval();
        var gran = $("#gran").nval();
        if (petit == mitja && mitja == gran) {
            $("#res1").text("Equilàter");
        }
        else if (petit == mitja || mitja == gran) {
            $("#res1").text("Isòsceles");
        }
        else {
            $("#res1").text("Escalè");
        }
        var pitago = petit * petit + mitja * mitja;
        if (pitago == gran * gran) {
            $("#res2").text("Rectangle");
        }
        else {
            $("#res2").text("No és rectangle");
        }
        var suma2 = petit + gran + mitja;
        $("#res3").text(suma2);
        if (petit > mitja || mitja > gran) {
            $("#res1").text(" ");
            $("#res2").text(" ");
            $("#res3").text(" ");
            alert("No estan en ordre");
        }
        if (petit + mitja <= gran || petit + gran <= mitja || mitja + gran <= petit) {
            $("#res1").text(" ");
            $("#res2").text(" ");
            $("#res3").text(" ");
            alert("No és un triangle");
        }
    });
});
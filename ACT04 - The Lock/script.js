/*
    ==============================
    ACTIVITAT 11
    ==============================
    Joel Sanchez
    Cristian Miguel
    ------------------------------
    Si heu fet alguna ampliació, indiqueu-ho aquí
    per què puguin ser valorades.
*/
$(function () {
    var n0 = randomBetween(1, 9);
    var n1 = randomBetween(1, 9);
    var n2 = randomBetween(1, 9);
    console.log(n0, n1, n2);
    var c1;
    var c2;
    var c3;
    function opera(num, no, nl, ns) {
        if (num == no) {
            return "✓";
        }
        else if (num == nl || num == ns) {
            return "~";
        }
        else {
            return "✕";
        }
    }
    var span = 11;
    $("#check").click(function () {
        var numero1 = $("#n0").nval();
        var numero2 = $("#n1").nval();
        var numero3 = $("#n2").nval();
        c1 = opera(numero1, n0, n1, n2);
        c2 = opera(numero2, n1, n0, n2);
        c3 = opera(numero3, n2, n0, n1);
        var formula = $("#tries").prepend("<div>" + c1 + c2 + c3 + "</div>");
        if (formula) {
            span = span - 1;
            $("#attempts").text(span);
        }
        if (span == 0) {
            $("h2").text("Game Over (F5 per tornar a jugar)");
            $("#tries").fadeOut();
        }
        if (c1 == "✓" && c2 == "✓" && c3 == "✓") {
            $("h2").text("Felicitats (F5 per tornar a jugar)");
        }
    });
});
/*
==============================
ACTIVITAT 12
==============================
Joel Sanchez
Cristian Miguel
------------------------------
Si heu fet alguna ampliació, indiqueu-ho aquí
per què puguin ser valorades.
*/
$(function () {
    var score = 0;
    var vidas = 3;
    var numero1, numero2, operacion, resultat, calculo1, calculo2, calculo3, op1, op2, op3;
    var sonido1 = new Audio("sounds/correct.mp3");
    var sonido2 = new Audio("sounds/error.mp3");
    function opera() {
        numero1 = randomBetween(1, 5)
        numero2 = randomBetween(1, 5);
        operacion = randomBetween(1, 3);
        resultat = randomBetween(0, 1);
        console.log(resultat);
        $("#num1").text(numero1);
        $("#num2").text(numero2);
        calculo1 = numero1 - numero2;
        calculo2 = numero1 * numero2;
        calculo3 = numero1 + numero2;
        function opera2(operacion) {
            if (operacion == 1) {
                return "-";
            }
            else if (operacion == 2) {
                return "*";
            }
            else {
                return "+";
            }
        }
        op1 = opera2(operacion);
        op2 = opera2(operacion);
        op3 = opera2(operacion);
        $("#op").text(op1 || op2 || op3);
        if (resultat == 0) {
            if (operacion == 1) {
                $("#res").text(calculo1);
            }
            else if (operacion == 2) {
                $("#res").text(calculo2);
            }
            else {
                $("#res").text(calculo3);
            }
        }
        else {
            if (operacion == 1) {
                $("#res").text(calculo1 + randomBetween(1, 3));
            }
            else if (operacion == 2) {
                $("#res").text(calculo2 + randomBetween(1, 3));
            }
            else {
                $("#res").text(calculo3 + randomBetween(1, 3));
            }
        }
    }
    opera();
    $("#right").click(function () {
        if (resultat == 0) {
            score++;
            $("#score").text(score);
            opera();
            sonido1.play();
        }
        else {
            vidas--;
            sonido2.play();
            if (vidas == 2) {
                $("#life3").fadeOut("life");
            }
            else if (vidas == 1) {
                $("#life2").fadeOut("life");
            }
            else {
                $("#life1").fadeOut("life");
                $("#right").hide();
                $("#left").hide();
                $("body h1").html("Game over");
            }
            opera();
        }
    });
    $("#left").click(function () {
        if (resultat == 1) {
            score++;
            $("#score").text(score);
            opera();
            sonido1.play();
        }
        else {
            vidas--;
            sonido2.play();
            if (vidas == 2) {
                $("#life3").fadeOut("life");
            }
            else if (vidas == 1) {
                $("#life2").fadeOut("life");
            }
            else {
                $("#life1").fadeOut("life");
                $("#right").hide();
                $("#left").hide();
                $("body h1").html("Game over");
            }
            opera();
        }
    });
});
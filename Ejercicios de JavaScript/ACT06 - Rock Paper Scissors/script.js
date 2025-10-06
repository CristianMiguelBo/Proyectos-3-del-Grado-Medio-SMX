$(function () {
    /*
        ==============================
        ACTIVITAT 13
        ==============================
        Cristian Miguel
        Marc Espiell
        ------------------------------
        Si heu fet alguna ampliació, indiqueu-ho aquí
        per què puguin ser valorades.
        Sons cuan es guanya o es perd.
    */
    var score = 0;
    var mscore = 0;
    var activar = true;
    var bad = new Audio("sounds/bad.mp3");
    var good = new Audio("sounds/good.mp3");
    $(document).keydown(function (e) {
        var tecla = e.which;
        if (activar == true) {
            var maquina = randomBetween(1, 3);
            var maquinaResult;
            var jugadorResult;
            if (tecla == 49 || tecla == 50 || tecla == 51) {
                if (maquina == 1) {
                    maquinaResult = maquinaf("rock");
                }
                else if (maquina == 2) {
                    maquinaResult = maquinaf("paper");
                }
                else if (maquina == 3) {
                    maquinaResult = maquinaf("scissors");
                }
                if (tecla == 49) {
                    jugadorResult = jugador("rock");
                    if (maquina == 2) {
                        mscore++;
                        bad.play();
                    }
                    else if (maquina == 3) {
                        score++;
                        good.play();
                    }
                }
                else if (tecla == 50) {
                    jugadorResult = jugador("paper");
                    if (maquina == 3) {
                        mscore++;
                        bad.play();
                    }
                    else if (maquina == 1) {
                        score++;
                        good.play();
                    }
                }
                else if (tecla == 51) {
                    jugadorResult = jugador("scissors");
                    if (maquina == 1) {
                        mscore++;
                        bad.play();
                    }
                    else if (maquina == 2) {
                        score++;
                        good.play();
                    }
                }
                activar = false;
                setTimeout(function () {
                    $("#human > div:nth-child(2)").removeClass(jugadorResult);
                    $("#computer > div:nth-child(2)").removeClass(maquinaResult);
                    activar = true;
                }, 1500);
            }
        }
        $("#human p.score").html("<p>" + score + "</p>")
        $("#computer p.score").html("<p>" + mscore + "</p>")
    });
    function jugador(clase) {
        $("#human > div:nth-child(2)").removeClass();
        $("#human > div:nth-child(2)").addClass(clase);
        $("#human > div:nth-child(2)").addClass("choice");
        return clase;
    }
    function maquinaf(clase) {
        $("#computer > div:nth-child(2)").removeClass();
        $("#computer > div:nth-child(2)").addClass(clase);
        $("#computer > div:nth-child(2)").addClass("choice");
        return clase;
    }
});  

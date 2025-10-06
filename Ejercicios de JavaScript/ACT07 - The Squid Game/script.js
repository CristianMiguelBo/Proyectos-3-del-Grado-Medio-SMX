$(function () {
    /*
        ==============================
        ACTIVITAT 14
        ==============================
        Marc Espiell
        Cristian Miguel
        ------------------------------
        Si heu fet alguna ampliació, indiqueu-ho aquí
        per què puguin ser valorades.
    */
    var scan = new Audio("snd/scan.mp3");
    var game = new Audio("snd/squidgame.mp3");
    var top1 = 600;
    var top2 = 600;
    var acaba1 = false;
    var acaba2 = false;
    $("#player1").addClass("eliminar");
    $("#player2").addClass("eliminar");
    $(document).keyup(function (e) {
        var tecla = e.which;
        if (top1 < 140) {
            top1 = 140;
            $("#player1").css("top", top1);
            $("#player1").removeClass("eliminar");
            $("#player1info").text("Jugador 1: Salvat");
            acaba1 = true;
        }
        if (top2 < 140) {
            top2 = 140;
            $("#player2").css("top", top2);
            $("#player2").removeClass("eliminar");
            $("#player2info").text("Jugador 2: Salvat");
            acaba2 = true;
        }
        if (tecla == 65) {
            top1 = top1 - 10;
            $("#player1").css("top", top1);
        }
        else if (tecla == 76) {
            top2 = top2 - 10;
            $("#player2").css("top", top2);
        }
    });

    setInterval(function () {
        $("#girl").toggleClass("back front");
        if ($("#girl").hasClass("back") == true) {
            game.play()
        }
    }, 3000);
    $(document).keyup(function (e) {
        tecla = e.which;
        if (tecla == 65 && $("#girl").hasClass("front")) {
            $("html body div#player1").fadeOut();
            $("#player1info").text("Jugador 1: Eliminat");
            scan.play();
            acaba1 = true;
        }
        if (tecla == 76 && $("#girl").hasClass("front")) {
            $("html body div#player2").fadeOut();
            $("#player2info").text("Jugador 2: Eliminat");
            scan.play();
            acaba2 = true;
        }
        if (acaba1 == true && acaba2 == true) {
            $("div#gameEnd").show();
        }
    });
    var crono = 60;
    var time = setInterval(function () {
        crono--;
        $("#time").text(crono);
        if (crono == 0) {
            clearInterval(time);
            if ($("#player1").hasClass("eliminar")) {
                $("html body div#player1").fadeOut();
                $("#player1info").text("Jugador 1: Eliminat");
                scan.play();
            }
            if ($("#player2").hasClass("eliminar")) {
                $("html body div#player2").fadeOut();
                $("#player2info").text("Jugador 2: Eliminat");
                scan.play();
            }
            $("div#gameEnd").show();
        }
    }, 1000);
});

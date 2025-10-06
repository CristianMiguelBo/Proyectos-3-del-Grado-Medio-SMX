/*
    ==============================
    ACTIVITAT 15
    ==============================
    Marc Espiell
    Cristian Miguel
    ------------------------------
    Si heu fet alguna ampliació, indiqueu-ho aquí
    per què puguin ser valorades.
*/
$(function () {
    var iso = new Audio("snd/intro.mp3");
    var nodmg = new Audio("snd/nothing.mp3");
    var low = new Audio("snd/low.mp3");
    var middle = new Audio("snd/middle.mp3");
    var high = new Audio("snd/high.mp3");
    var faint = new Audio("snd/faint.mp3");
    var run = new Audio("snd/run.mp3");
    var jugador1;
    var jugador2;
    var atac1;
    var vida1 = 100;
    var vida2 = 100;
    var turno = true;
    $("#player1 div.inner p.livenum").html("<p>" + vida1 + "</p>");
    $("#player2 div.inner p.livenum").html("<p>" + vida2 + "</p>");
    function pokemon(djugador, jugadores) {
        $(djugador).removeClass();
        $(djugador).addClass("poke" + jugadores);
        $(djugador).addClass("pokeimg");
        nom(jugador1, "#player1 p.name");
        nom(jugador2, "#player2 p.name");
    }
    function nom(nombres, jugador) {
        if (nombres == 1) {
            $(jugador).text("Clefable");
        }
        else if (nombres == 2) {
            $(jugador).text("Drowzee");
        }
        else if (nombres == 3) {
            $(jugador).text("Gengar");
        }
        else if (nombres == 4) {
            $(jugador).text("Geodude");
        }
        else if (nombres == 5) {
            $(jugador).text("Jynx");
        }
        else if (nombres == 6) {
            $(jugador).text("Magmar");
        }
        else if (nombres == 7) {
            $(jugador).text("Mrmime");
        }
        else if (nombres == 8) {
            $(jugador).text("Snorlax");
        }
        else if (nombres == 9) {
            $(jugador).text("Togepi");
        }
    }
    $("#restart").click(function () {
        iso.play();
        jugador1 = randomBetween(1, 9);
        jugador2 = randomBetween(1, 9);
        vida1 = 100;
        vida2 = 100;
        $("p.livenum > p").html("<p>" + 100 + "</p>");
        $("div.livebar").css("width", 100 + "%");
        pokemon("#player1 div:nth-child(4)", jugador1)
        pokemon("#player2 div:nth-child(4)", jugador2)
        $("div.inner").css("display", "block");
        $("#messages").html("Welcome to the Metronome battles")
    });
    function ataques(dmg, bjugador, vjugador) {
        if (turno == true) {
            vida2 = vida2 - dmg;
            $(bjugador).css("width", vida2 + "%");
            $(vjugador).html("<p>" + vida2 + "</p>");
            turno = false;
            $("#player1 button").hide();
            $("#player2 button").show();
            
        }
        else {
            vida1 = vida1 - dmg;
            $(bjugador).css("width", vida1 + "%");
            $(vjugador).html("<p>" + vida1 + "</p>");
            turno = true;
            $("#player2 button").hide();
            $("#player1 button").show();
        }
    }
    damage("#player1 p.name", "#player2 p.name", "#player2 div.livebar", "#player2 p.livenum > p", "#player1 button.metronome")
    damage("#player2 p.name", "#player1 p.name", "#player1 div.livebar", "#player1 p.livenum > p", "#player2 button.metronome")
    bye("#player1 div.inner", "#player2 div.inner", "#player1 p.name", "#player2 p.name")
    function damage(name, name2, livebar, livenum, boto) {
        $(boto).click(function () {
            atac1 = randomBetween(1, 4);
            console.log(atac1)
            if (atac1 == 1) {
                ataques(0, livebar, livenum);
                nodmg.play();
                $("#messages").html($(name).text() + " used Metronome! It doesn't affect " + $(name2).text())
            }
            else if (atac1 == 2) {
                ataques(10, livebar, livenum);
                low.play();
                $("#messages").html($(name).text() + " used Metronome! It's not very effective...")
            }
            else if (atac1 == 3) {
                ataques(25, livebar, livenum);
                middle.play();
                $("#messages").html($(name).text() + " used Metronome! Metronome hit " + $(name2).text())
            }
            else if (atac1 == 4) {
                high.play();
                ataques(50, livebar, livenum);
                $("#messages").html($(name).text() + " used Metronome! It's super effective")
            }
            if (vida2 <= 0) {
                faint.play()
                $("#messages").html($("#player2 p.name").text() + " fainted! Press the pokéball to play again.")
                $("#player2 div.inner").hide()
            }
            else if (vida1 <= 0) {
                faint.play()
                $("#messages").html($("#player1 p.name").text() + " fainted! Press the pokéball to play again.")
                $("#player1 div.inner").hide()
            }
        });
    }
    function bye(player1, player2, name1, name2) {
        $("button.run").click(function () {
            run.play();
            if (turno == true) {
                $(player1).hide()
                $("#messages").html($(name1).text() + " ran. Press the pokéball to play again.")
            }
            else if (turno == false) {
                $(player2).hide()
                $("#messages").html($(name2).text() + " ran. Press the pokéball to play again.")
            }
        });
    }
});
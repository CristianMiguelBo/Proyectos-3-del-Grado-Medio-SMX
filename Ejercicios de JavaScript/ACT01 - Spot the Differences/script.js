/*
 
    ==============================
    ACTIVITAT 05
    ==============================
    Cristian Miguel
    Adrià Baltrons
    ------------------------------
    Si heu fet alguna ampliació, indiqueu-ho aquí
    per què puguin ser valorades.
*/
$(function () {
    var span = 8;
    $(".dif").one("click", function () {
        $(this).addClass("marked");
        if ($(this).hasClass("marked")) {
            span = span - 1;
            $("span").text(span);
        }
        if (span == 0) {
            $("h1").text("Has trobat totes les diferències!");
        }
    });
});
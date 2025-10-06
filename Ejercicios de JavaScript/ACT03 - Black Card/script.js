/*
    ==============================
    ACTIVITAT 10
    ==============================
    Joel Sanchez
    Cristian Miguel
    ------------------------------
*/
$(function () {
    var saldo = 0;
    $("#afegeixDespesa").click(function () {
        if ($("#concepte").val() == "") {
            alert("Despesa no vàlida");
            $("#valor").val("");
        }
        else if ($("#valor").nval() == "") {
            alert("Despesa no vàlida");
            $("#concepte").val("");
        }
        else {
            afegeix();
        }
    });
    $("#recarregaTargeta").click(function () {
        var quantitat;
        afegeix2();
    });
    $("#concepte").keydown(function (e) {
        if (e.which == 13) {
            afegeix();
        }
    });
    function afegeix() {
        if ($("#valor").nval() > saldo) {
            alert("Saldo insuficient");
            $("#concepte").val("");
            $("#valor").val("");
        }
        else {
            var concepte = $("#concepte").val();
            var valor = $("#valor").nval();
            $("#registre").append("<tr>" + "<td>" + concepte + "</td>" + "<td>" + "-" + valor + "€" + "</td>" + "</tr>");
            saldo = saldo - $("#valor").nval();
            $("#saldo").html(saldo);
            $("#concepte").val("");
            $("#valor").val("");
        }
    }
    function afegeix2() {
        quantitat = $("#quantitatRecarrega").nval();
        $("#registre").append("<tr>" + "<td>" + "Recarrega de la Targeta" + "</td>" + "<td>" + quantitat + "€" + "</td>" + "</tr>");
        saldo = $("#quantitatRecarrega").nval() + saldo;
        $("#saldo").html(saldo);
    }

});
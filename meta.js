$(document).ready(function() {
    $("#H1").hover(function() {
        $("#hover1").slideDown("slow");
        $("#hover2").slideUp();
    });

    $("#H2").hover(function() {
        $("#hover2").slideDown("slow");
        $("#hover1").slideUp();
    });
    $("#malak").hover(function() {
        $("#hover2").slideUp();
        $("#hover1").slideUp();
    });
    $("#vu").hover(function() {
        $("#hover2").slideUp();
        $("#hover1").slideUp();
    });


    $(".media").hover(function() {
        $("#media").toggle();
        $("#media2").hide();
    });
    $(".media2").hover(function() {
        $("#media2").toggle();
        $("#media").hide();
    });

});

function show() {
    var doc = document.getElementById("lo0");
    doc.style.display = "block";
}

function hide() {
    var doc = document.getElementById("lo0");
    doc.style.display = "none";
}
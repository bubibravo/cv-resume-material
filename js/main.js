$( document ).ready(function() {
    console.log( "ready!" );

    var triagilizeBG = true;
    var $info = $('#intro');
    new WOW().init();

    (triagilizeBG) ? generateCanvasBG("#intro") : $info.addClass("purpleBG");
    generateCanvasBG("#experience");
});

function generateCanvasBG(element){
    // set up the base pattern
    var $element = $(element);

    var pattern = Trianglify({
        height: $element.height(),
        width: $element.width(),
        cell_size: 100 + Math.random() * 100});

    $element.append("<div class='triangle-bg'></div>");    
    $("#"+$element.attr('id') +" .triangle-bg").append(pattern.canvas());    
    console.log("generateCanvasBG:", $element);
    console.log($element.attr('id') +" .triangle-bg");
}

$( "#contactBtn" ).click(function() {
    var em = 'ljubisas.cv';
    $(location).attr('href', 'mailto:'+em+'@gmail.com?subject='
    + encodeURIComponent("This is my subject"));
});

$("#websites").click(function() {
    $('.nav-tabs a[href="#panel144"]').tab('show');
});
$("#apps").click(function() {
    $('.nav-tabs a[href="#panel12"]').tab('show');
});
$("#flash").click(function() {
    $('.nav-tabs a[href="#panel13"]').tab('show');
});

console.log( "start!" );
$( document ).ready(function() {
    console.log( "ready!" );

    var triagilizeBG = false;
    var $info = $('#intro');
    new WOW().init();

    (triagilizeBG) ? generateCanvasBG("#intro") : $info.addClass("purpleBG");
    generateCanvasBG("#experience");
    generateCanvasBG("#projects","PuRd");
    addMenuAnimation();
});
function addMenuAnimation(){
    $("#m-intro").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    }); 
    $("#m-introduction").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#introduction").offset().top
        }, 1000);
    }); 
    $("#m-bio").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#bio").offset().top
        }, 1000);
    }); 
    $("#m-experience").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    }); 
    $("#exploring").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#introduction").offset().top
        }, 1000);
    }); 
    

}
function generateMainMenu(){
    console.log("g-MainMenu");
    $.each(webContent, function(index) {
        let menubtnID = webContent[index].id+"-menubtn";

        if (webContent[index].menu) $("#menu").append("<li id='"+menubtnID+"'><a href='#"+webContent[index].id+"' class='nav-link'>"+webContent[index].heading+"</a></li>");         

        $("#"+menubtnID).click(function(){
            //loadSection(webContent[index].htmlTemplate, webContent[index]);
            $('html, body').stop().animate({
                scrollTop: $("#"+webContent[index].id).offset().top
            }, 1000);
        }); 
    });
}
function generateCanvasBG(element, color = 'YlGnBu'){
    // set up the base pattern
    var $element = $(element);

    var pattern = Trianglify({
        height: $element.height(),
        width: $element.width(),
        cell_size: 100 + Math.random() * 100, x_colors:color});

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
    $('html, body').stop().animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
    $('.nav-tabs a[href="#panel144"]').tab('show');
});
$("#apps").click(function() {
    $('.nav-tabs a[href="#panel12"]').tab('show');
});
$("#flash").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
    $('.nav-tabs a[href="#panel13"]').tab('show');
});

console.log( "start!" );
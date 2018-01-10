$( document ).ready(function() {
    console.log( "ready!" );
    new WOW().init();
    var $info = $('#homeText');
    var $intro = $('.introTxt');

    var query1 = "screen and (max-width: 40em)",
        handler1 = {
            match : function() {
                $info.removeClass('text-right');
                $intro.removeClass('pr-5');
                $info.addClass('text-center');
            },
            unmatch : function() {
                console.log("handler 1 unmatched")
                $info.removeClass('text-center');
                $info.addClass('text-right');
                $intro.addClass('pr-5');
            }
        };

    enquire.register(query1, handler1);   
     // set up the base pattern
     var pattern = Trianglify({
        height: window.innerHeight,
        width: window.innerWidth,
        cell_size: 30 + Math.random() * 100});
    
        // canvas
        //document.body.appendChild(pattern.canvas())    
        // svg
        //document.body.appendChild(pattern.svg())
            
        // png
        var png = document.createElement('img')
        png.src = pattern.png();
        //document.body.appendChild(png)
        $('.triangle-bg').append(pattern.canvas());
        var pattern2 = Trianglify({cell_size: 75, seed: '265rk', x_colors: 'Blues'}).png();
        
        //png.src = pattern2;
        
        console.log(pattern2);
        console.log(png.src);
        //$('.triangle-bg2').append(pattern.canvas());
        //$('triangle-bg2').css('background-image', 'url(' + png.src + ')');
        $('#experience').css('background-image', 'url(' + pattern2 + ')');
    
    
    
});

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
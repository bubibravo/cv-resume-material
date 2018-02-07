$( document ).ready(function() {
    console.log( "ready!" );
    
    var triagilizeBG = false;
    var $info = $('#intro');
    new WOW().init();
    
    let webContent;
    loadJSON_Content();
    //loadSection();

    (triagilizeBG) ? generateCanvasBG("#intro") : $info.addClass("purpleBG");
});

function generateCanvasBG(element, palette){
    // set up the base pattern
    var defaultPalette = "RdPu";
    console.log("generateBG: ", element)
    var $element = $(element);

    var pattern = Trianglify({
        height: ($element.height()>1) ? $element.height() : 800,
        width: ($element.width()<1) ? $element.width() : 600,
        x_colors: defaultPalette,
        cell_size: 100 + Math.random() * 100});

    var pattern2 = Trianglify({cell_size: 75, seed: '265rk', x_colors: 'Blues'}).png();


    $element.append("<div class='triangle-bg'></div>");    
    $("#"+$element.attr('id') +" .triangle-bg").append(pattern.canvas());    
    console.log("generateCanvasBG:", $element);
    console.log($element.attr('id') +" .triangle-bg");
}

$( "#contactBtn" ).click(function() {
    console.log("CONTACT CLICKED");
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



// $(document).ready(function(){   
//     let webContent;
//     loadJSON_Content();
//     loadSection();
// });


function loadJSON_Content(){
    loadAjax = $.ajax({
        url:'content/experience.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data) {
            $(data.Content).each(function(index, value)
            {
                console.log("index:", index, value);
            });
            webContent =  data.Content;
            console.log('webContent:', webContent);
            JSON_ContentLoaded();
            //return data.Content;
        },
        error: function(xhr,status,error) {
            console.log('json error:', status, error);
        }
    });
}

function JSON_ContentLoaded(){    
    console.log("JSON_ContentLoaded");
    loadAllSections();
    generateMenu();
    
}
function generateSkilsFields(){

}
function loadAllSections(){
    $.each(webContent,function(index){  
        loadSection(webContent[index].htmlTemplate, webContent[index]);
    });
}
function loadSection(page = "introPage.html", contentObj){
    var contentObjID = null;
    var sectionHtml;
    console.log("loadSection:", page, contentObj, contentObjID);
    if (contentObj!==undefined){contentObjID = contentObj.id}
    else contentObjID="intro";

    

    sectionHtml = "<section id='"+contentObjID+"' class='view darken-4'><div class='arrow-down'></div></section>";
    if ($("#"+contentObjID).length==0) {        
        $("main").append(sectionHtml);        
    }
    else $("#"+contentObjID).replaceWith(sectionHtml);
    
    $("#"+contentObjID).load( "content/"+page+'?v='+Date.now(), function( response, status, xhr) {
        //console.log(response);
        sectionLoaded(page, contentObj);
    });
    
        
    console.log("SECTION ID:",$("#"+contentObjID));
   // $("#"+contentObjID).append("<div class='arrow-down'></div>");
}

function sectionLoaded(page, contentObj){    
    console.log("sectionLoaded:", page, contentObj);
    
    // sectionHtml = "<section id='"+contentObjID+"'> </section";
    // if ($("#"+contentObjID).length==0) $("body").append(sectionHtml)
    // else $("#"+contentObjID).replaceWith(sectionHtml);

    if ((contentObj!==undefined)&&(contentObj.list)) generateExpComponent(contentObj.Jobs);
    //if (contentObj.id == "experience") generateCanvasBG("#experience");
    switch(contentObj.id) {
        case "experience" : 
            generateCanvasBG("#experience");
            break;
        case "bio":
            generateCanvasBG("#bio");
        ;
            
    }
}

function generateMenu(){
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
function gnerateTabs(){

}
function generateExpComponent(jobs){
    console.log("genrate LIST: ", jobs);          
    let template;    
    template =$('#exp ol').html();
    $("#template").remove();
    
    $.each(jobs,function(index){               
        let tmpID =  'step'+index;       
        let arrowImageName = 'images/arrow-png-25-r.png';
        $('#experience ol').append(template);  
        $('#template').attr('id', tmpID);        
        $("#"+tmpID).append("<img src='images/arrow-png-25-r.png' class='wow fadeInUp max-height-250 up arrow' alt='arrow'>");

        if (index % 2 == 0) $("#"+tmpID+" img").addClass("flipH float-right");

        $('#'+tmpID+' .title').append('<h1><strong>'+jobs[index]['JobDesc'].Title+'</strong></h1>');
        $('#'+tmpID+' .exp-date').append(jobs[index].Date); 
        $('#'+tmpID+' .business-sector').append(jobs[index].Indusrty); 
        $('#'+tmpID+' .employer').append(jobs[index].Company); 

        generateSpan(jobs[index]['JobDesc'].Tech, tmpID);
       // $("#result .tech").append(jobs[index].Company); 
        
    });    
}
function generateSpan(techs, tmpID){
    $.each(techs,function(index){  
        let btnID = 'btn-'+tmpID+'-'+index;

        $('#'+tmpID+' .tech').append('<span id="'+btnID+'" class="b-btn badge badge-primary">'+techs[index]+"</span>");    
        $('#'+btnID).hover(function() {
            $(this).animate({
                opacity: 0.25,
                //fontSize: "1.2em",
                borderWidth: "4px",
                margin:"2px"
            }, 50, "linear", function() {
                // Animation complete.
            });
        });
        $('#'+btnID).mouseout(function() {
            $(this).animate({
                opacity: 1,
                //fontSize: "1em",
                borderWidth: "2px",
                margin:"4px"
            }, 50, "linear", function() {
                // Animation complete.
            });
        });    
    });
   
}


console.log( "start!" );
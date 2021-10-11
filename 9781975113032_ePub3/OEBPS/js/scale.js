(function(app){

$(document).ready(function(e) {
    setTimeout(function(){
        resezeAll();
    },500);
});

$(window).resize(function(e) 
{
	resezeAll();
});

function resezeAll()
{
    $(".activityFrame").each(function(){
        onResizeFn($(this));
    });
}

function onResizeFn(iFrm)
{
    if (iFrm.attr("data-width") == undefined)
        return;
    
    var shellWidth = Number(iFrm.attr("data-width"))+iFrm.offset().left+80;

    var newShellWidth;
    var agent = navigator.userAgent.toLowerCase();
    var actWid = Number($(window).width());
    var actHgt = Number($(window).height());

    newShellWidth = actWid;
    var scale = Number(shellWidth / newShellWidth).toFixed(2);
    if(actWid>=shellWidth){
        newShellWidth = shellWidth;
        scale = 1;
    }
    
    $(iFrm).css({
        "-moz-transform-origin": "0% 0%",
        "-webkit-transform-origin": "0% 0%",
        "-ms-transform-origin": "0% 0%",
        "transform-origin": "0% 0%",
                   
        "transform": "scale(" + (1 / scale) + "," + (1 / scale) + ")",
        "-ms-transform": "scale(" + (1 / scale) + "," + (1 / scale) + ")",
        "-webkit-transform": "scale(" + (1 / scale) + "," + (1 / scale) + ")"
    });

    scaleVal = scale;

    iFrm.parent().css("width","100%");

    $(iFrm).attr("data-scale",(1 / scale));
    
    iFrm.parent().css("height",(iFrm.outerHeight(true)*(1 / scale))+"px");
    
    iFrm.parent().css("width",(iFrm.parent().width()+100)+"px");
    
    //iFrm.parent().css("overflow","hidden");

} 

 })(Scale=Scale||{})

var Scale;
$(document).ready(function(){	
	$(".play").click(function(){
		
$(".grightimg img:last-child").animate({'opacity':'0'},1500,function(){
var img=$(".grightimg img:last-child").attr('src');
$(".grightimg").prepend('<img src=" '+img+' "> ');	
	$(".grightimg img:last-child").remove();
	$(".play").click();	
	});	
	});


 	$("#home").click(function() {
        
    
    $("body,html").animate({scrollTop:$('.home').offset().top-200},1000);	
	
});	
	
$("#about").click(function() {
        
    
    $("body,html").animate({scrollTop:
	$('.about').offset().top-200},1000);	
	
});		
	
	$("#gallery").click(function() {
        
    
    $("body,html").animate({scrollTop:
	$('.gallery').offset().top-200},1000);	
	
});	
$("#crew").click(function() {
        
    
    $("body,html").animate({scrollTop:
	$('.crew').offset().top-200},1000);	
	
});	
$("#timing").click(function() {
        
    
    $("body,html").animate({scrollTop:
	$('.timing').offset().top-200},1000);	
	
});	

$("#contact").click(function() {
        
    
    $("body,html").animate({scrollTop:
	$('.contact').offset().top-200},1000);	
	
});	

$(".play").click();




$(".cross").click(function(){
/*$(".cross").animate({'opacity':'0'},1000,function(){*/
	$(".curtain_right").animate({'right':'-50%'},2000);
	$(".curtain_left").animate({'left':'-50%'},2000);
	$(".cross").remove();
});
});


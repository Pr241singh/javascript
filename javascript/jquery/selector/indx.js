/*$(document).ready(function(){
	$("[title=stp]").css({"color":"red",
		"font-family":"sans-serif",
		"border":"1px solid black",
	});
});*/

/*$(document).ready(function(){
	$("button").click(function(){
		$(this).animate({
			"width":"200px",
			"height":"200px",
			
		},2000);
	});
});*/

$(document).ready(function(){
	$("#bg").fadeIn(1000);
	$("#modal").animate({
		"top":"120px",
	},1000);
	$("#bg").click(function(){
		$("#modal").animate({
		"top":"-800px",
		},1000);
		$(this).fadeOut(1000);
	});
});

$(document).ready(function(){
	$("#acordeon").click(function(){
		$("p").slideToggle(1000);
	});
});

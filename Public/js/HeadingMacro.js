
$(document).ready(function (){

	var img = $("#heading-img");
	var container = $("#heading-container");


	var update;

	update = function(){
		console.log(img.width());
		console.log(container.width());

		var newMarginLeft = (img.width() - container.width())/2;
		console.log(newMarginLeft);
		img.css("margin-left", -newMarginLeft);
		
		
	};

	$(window).on('resize', update);

});
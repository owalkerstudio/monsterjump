var novelMod;

$(document).ready(function(){


	require([
		"./js/PanelMod",
		"./js/NovelMod"
	], function(
		PanelMod,
		NovelMod
	){

		



		var panelMod = new PanelMod();
		panelMod.init(function (){

			novelMod = new NovelMod();
			novelMod.init();

		});





	});


});


var panelhtml_root = Global_Root+"panel/";

var PanelMod = function (){

	this.loadPanel = function(panelName){
		var url = panelhtml_root+panelName+".html";

		$.get(url, function (data){
			var $data = $($.parseHTML(data));
			$("#panel_"+panelName).html($data.find("#content").html());
		}, "html");
	};


	this.init = function(){
		var self = this;

		$.get(Global_Root+"panel.json", function(data){
			var panel_config = data;
			for (var i in panel_config){
				self.loadPanel(panel_config[i]);
			}
		}, "json");

	}

};



define([], function(){
	return PanelMod;
});


var panelhtml_root = Global_Root+"panel/";

var PanelMod = function (){
	var self = this;

	var onAllPanelLoaded;
	var panelLeft;

	self.loadPanel = function(panelName){
		var url = panelhtml_root+panelName+".html";

		$.get(url, function (data){
			var $data = $($.parseHTML(data));
			
			$("#panel_"+panelName).html($data.find("#content").html());
			
			console.log($data);

			panelLeft--;
			if (panelLeft <= 0){
				if (onAllPanelLoaded) onAllPanelLoaded();
			}

		}, "html");
	};


	self.init = function(onDone){
		onAllPanelLoaded = onDone;

		$.get(Global_Root+"json/setting/panel.json", function(data){
			var panel_config = data;
			panelLeft = panel_config.length;

			for (var i in panel_config){
				console.log("read panel: "+panel_config[i]);
				self.loadPanel(panel_config[i]);
			}
		}, "json");

	}

	

};



define([], function(){
	return PanelMod;
});
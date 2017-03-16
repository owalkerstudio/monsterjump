// var heroNovel_root = "https://dl.dropboxusercontent.com/u/87239069/MonsterJump/"+"json/story/";
var heroNovel_root = "././"+"json/story/";

var panel_id = "#panel_story";
var novelMode_id = "#novelMode";
var heroImg_id = "#heroImg";
var heroName_id = "#heroName";
var heroInfo_id = "#heroInfo";
var heroSubtitle_id = "#heroSubtitle";
var heroNovel_id = "#heroNovel";

var novelMode_Link = "#novel";
var heroMenuLink = "#story_heroMenu";


var NovelMod = function (){
	var self = this;

	var $storyPanel;
	var $novelMode;

	var $heroImg;
	var $heroName;
	var $heroInfo;
	var $heroSubtitle;
	var $heroNovel;

	self.init = function(onDone){

		$storyPanel = $(panel_id);
		if ($storyPanel){
			$novelMode    = $storyPanel.find(novelMode_id);
			$heroImg      = $storyPanel.find(heroImg_id);
			$heroName     = $storyPanel.find(heroName_id);
			$heroInfo     = $storyPanel.find(heroInfo_id);
			$heroSubtitle = $storyPanel.find(heroSubtitle_id);
			$heroNovel    = $storyPanel.find(heroNovel_id);
		}else{
			console.log("get storyPanel Err");
		}


		$("#modal-close-btn").click(function(){
			novelMod.close();
			return false;
		});

		// $novelMode.hide();
		
		if (onDone) onDone();

		// var url = Global_Root+"json/setting/hero.json";
		// $.get(url, function(data){
		// 	var heroConfig = data;
		// 	for (var i in heroConfig){
		// 		console.log("load hero: "+heroConfig[i]["name"]);
		// 		self.loadNovel(heroConfig[i]["name"]);
		// 	}
		// }, "json");

	};

	self.close = function(){
		// $novelMode.hide();
		console.log($novelMode)
		$novelMode.modal('hide');

		window.location.href = heroMenuLink;
	};


	self.loadNovel = function(heroName){
		console.log("start load "+heroName);
		if (!$storyPanel){
			console.log("storyPanel is null / undefined");
		}

		// $novelMode.show();
		

		var url = heroNovel_root+heroName+".json";
		try{
			$.get(url, function(data){
				if (!data){
					console.log("load story err");
				}

				$heroImg.attr('src', data["img"]);
				$heroName.html(data["name"]);
				$heroInfo.html(data["info"]);
				$heroSubtitle.html(data["subtitle"]);
				$heroNovel.html(data["novel"]);


				$novelMode.modal({ keyboard: false });

				$('#modal-close-btn').tooltip('show');


				window.location.href = novelMode_Link;

			}, "json");
		}catch(e){
			console.log("load err: "+e);
		}
	};


	

};



define([], function(){
	return NovelMod;
});
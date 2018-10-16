(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/spritesheet_final_atlas_.png", id:"spritesheet_final_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"spritesheet_final_atlas_", frames: [[0,0,1152,3548],[1154,0,768,2955],[1154,2957,334,636]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Thomas_ArmGesture = function() {
	this.spriteSheet = ss["spritesheet_final_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Thomas_Idle = function() {
	this.spriteSheet = ss["spritesheet_final_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Thomas_Speaking_a = function() {
	this.spriteSheet = ss["spritesheet_final_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.thomas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask_Idle (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgeTBMlMAAAiZJMA8nAAAMAAACZJg");
	mask.setTransform(194,490.1);

	// Image_Idle
	this.instance = new lib.Thomas_Idle();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({x:-384},0).wait(3).to({x:0,y:-985},0).wait(3).to({x:-384},0).wait(3).to({x:0,y:-1970},0).wait(3).to({x:-384},0).wait(3).to({x:0,y:0},0).to({_off:true},38).wait(65));

	// Mask_Gestures (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_60 = new cjs.Graphics().p("EgX9A82MAAAh5sMAv7AAAMAAAB5sg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_1_graphics_60,x:189.2,y:588.8}).wait(65));

	// Image_Gestures
	this.instance_1 = new lib.Thomas_ArmGesture();
	this.instance_1.setTransform(0,95);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(16).to({x:-384},0).wait(3).to({x:-768},0).wait(3).to({x:0,y:-792},0).wait(3).to({x:-384},0).wait(3).to({x:-768},0).wait(3).to({x:0,y:-1679},0).wait(3).to({x:-384},0).wait(3).to({x:-768},0).wait(3).to({x:0,y:-2566},0).wait(3).to({x:-384},0).wait(3).to({x:-768},0).wait(2).to({x:0,y:95},0).wait(17));

	// Mask_SpeakingHead (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_60 = new cjs.Graphics().p("AkIY2MAAAgxrIaEAAMAAAAxrg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_2_graphics_60,x:140.5,y:156}).wait(65));

	// Image_Speaking
	this.instance_2 = new lib.Thomas_Speaking_a();
	this.instance_2.setTransform(110.6,-3);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(6).to({x:-56.4},0).wait(3).to({x:110.6,y:-321},0).wait(3).to({x:-56.4},0).wait(3).to({x:110.6,y:-3},0).wait(8).to({x:-56.4},0).wait(3).to({x:110.6,y:-321},0).wait(3).to({x:-56.4},0).wait(3).to({x:110.6,y:-3},0).wait(3).to({x:-56.4},0).wait(3).to({x:110.6,y:-321},0).wait(3).to({x:-56.4},0).wait(3).to({x:110.6,y:-3},0).wait(4).to({x:-56.4},0).wait(3).to({x:110.6,y:-321},0).wait(3).to({x:-56.4},0).wait(3).to({x:110.6,y:-3},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388.1,980.3);


// stage content:



(lib.spritesheetfinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Character
	this.instance = new lib.thomas();
	this.instance.setTransform(536.4,729.8,0.465,0.465,0,0,0,280.5,1467.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(885.8,296.9,357.4,1375.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
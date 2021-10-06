(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"U2S8_anim_interativa_500x500_atlas_1", frames: [[0,0,1718,1488]]},
		{name:"U2S8_anim_interativa_500x500_atlas_2", frames: [[0,0,1718,894],[0,896,1718,795]]},
		{name:"U2S8_anim_interativa_500x500_atlas_3", frames: [[0,1396,1718,597],[0,0,1718,696],[0,698,1718,696]]},
		{name:"U2S8_anim_interativa_500x500_atlas_4", frames: [[591,0,878,373],[0,0,589,589],[1173,375,231,102],[1911,170,124,77],[1471,170,438,167],[1346,508,254,77],[1471,0,476,168],[1173,479,171,116],[591,375,168,168],[1602,508,215,77],[761,493,162,116],[1471,339,432,167],[761,375,241,116],[1004,375,167,167]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["U2S8_anim_interativa_500x500_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(9,1,1).p("ABjAAQAAApgdAdQgdAdgpAAQgoAAgdgdQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAog");
	this.shape.setTransform(45.725,45.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(9,1,1).p("Ak2AAQAAiABbhbQBbhbCAAAQCAAABbBbQBcBbAACAQAACAhcBbQhbBciAAAQiAAAhbhcQhbhbAAiAg");
	this.shape_1.setTransform(45.8,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(9,1,1).p("An3ABQAAjQCUiUQCUiUDQAAQDPAACUCUQCUCUAADQQAADPiUCUQiUCUjPAAQjQAAiUiUQiUiUAAjPg");
	this.shape_2.setTransform(45.85,45.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(9,1,1).p("AqlABQAAkYDHjHQDHjHEYAAQEWAADHDHQDIDHAAEYQAAEWjIDHQjHDIkWAAQkYAAjHjIQjHjHAAkWg");
	this.shape_3.setTransform(45.9,45.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(9,1,1).p("AtAACQAAlYD1j1QD1j1FYAAQFWAAD0D1QD1D1AAFYQAAFWj1D0Qj0D1lWAAQlYAAj1j1Qj1j0AAlWg");
	this.shape_4.setTransform(45.95,45.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(9,1,1).p("AvHACQAAmREckcQEckcGRAAQGNAAEdEcQEcEcAAGRQAAGNkcEdQkdEcmNAAQmRAAkckcQkckdAAmNg");
	this.shape_5.setTransform(46,46);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(9,1,1).p("Aw7ADQAAnCE+k+QE+k+HCAAQG8AAE/E+QE+E+AAHCQAAG8k+E/Qk/E+m8AAQnCAAk+k+Qk+k/AAm8g");
	this.shape_6.setTransform(46.025,46.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(9,1,1).p("AydADQAAnqFclaQFalcHqAAQHkAAFcFcQFbFaAAHqQAAHklbFcQlcFbnkAAQnqAAlalbQlclcAAnkg");
	this.shape_7.setTransform(46.05,46.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(9,1,1).p("AzqADQAAoKFylxQFxlyIKAAQIEAAFyFyQFyFxAAIKQAAIElyFyQlyFyoEAAQoKAAlxlyQlylyAAoEg");
	this.shape_8.setTransform(46.075,46.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(51,51,51,0.561)").ss(9,1,1).p("A0fADQAAofGBmCQGCmBIfAAQIaAAGCGBQGBGCAAIfQAAIamBGCQmCGBoaAAQofAAmCmBQmBmCAAoag");
	this.shape_9.setTransform(46.075,46.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(51,51,51,0.251)").ss(9,1,1).p("A1FAEQAAowGMmNQGNmMIwAAQIpAAGNGMQGMGNAAIwQAAIpmMGNQmNGMopAAQowAAmNmMQmMmNAAopg");
	this.shape_10.setTransform(46.1,46.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(51,51,51,0.063)").ss(9,1,1).p("A1cAEQAAo6GTmTQGTmTI6AAQIzAAGTGTQGTGTAAI6QAAIzmTGTQmTGTozAAQo6AAmTmTQmTmTAAozg");
	this.shape_11.setTransform(46.1,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(51,51,51,0)").ss(9,1,1).p("AVlAEQAAI2mWGVQmVGWo2AAQo9AAmVmWQmWmVAAo2QAAo9GWmVQGVmWI9AAQI2AAGVGWQGWGVAAI9g");
	this.shape_12.setTransform(46.1,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.4,-96.4,285.1,285.1);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,294.5,294.5), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("EAAAAyGQieAAiRg9QiNg8hshsQhshsg7iMQg+iSAAifMAAAhLvQAAifA+iSQA7iMBshsQBshsCNg8QCRg9CeAAIAAAAQCfAACRA9QCNA8BsBsQBsBsA7CMQA+CSAACfMAAABLvQAACfg+CSQg7CMhsBsQhsBsiNA8QiRA9ifAAg");
	this.shape.setTransform(78.175,320.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,156.4,641.3), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("EAmsAwXQiWgwh5hoMhU5hJeQh4hohGiOQhDiIgLiZQgLiZAviQQAxiWBoh5QBoh4CNhGQCJhDCZgLQCYgLCRAvQCWAwB5BoMBU5BJeQB4BoBGCOQBDCIALCZQALCZgvCQQgxCWhoB5QhoB4iNBGQiJBDiZALQgdACgcAAQh7AAh1gmg");
	this.shape.setTransform(349.925,313.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0.1,0,699.6999999999999,626.7), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("EgrUAw7QiZgLiJhDQiNhGhoh4Qhoh5gxiWQgviQALiZQALiZBDiIQBGiOB4hoMBU5hJeQB5hoCWgwQCRgvCYALQCZALCJBDQCNBGBoB4QBoB5AxCWQAvCQgLCZQgLCZhDCIQhGCOh4BoMhU5BJeQh5BoiWAwQh1Amh7AAQgcAAgdgCg");
	this.shape.setTransform(349.925,313.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0.1,0,699.6999999999999,626.7), null);


(lib.MOUSE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgDJHQhJgag4g4QgmgmgagyQgag1gmgmIikijQghghACgtQADgtAjgeQAegXAoACQApADAdAbIAsAsIAAotQAAgsAiggQAjgfAsAFQAjADAaAaQAhAhgBAsIAAEBQAdgVAnAEQAiACAbAbQAPAPAHASQAigdAsAFQAkADAZAZQAUAUAJAfQAfgZApAEQAiADAbAbQAfAfAAAtIAAEtQAACIhXBlQhZBkiEAOQgUACgTAAQg6AAg2gTgAmFApQgUARgBAZQgCAZATATIClCkQApApAfA9QAWArAiAiQAwAwA/AXQBAAWBFgHQBygMBNhYQBNhYAAh3IAAktQAAgXgQgSQgPgSgWgDQgagBgTAQQgTARAAAbIgsAAIAAg3QgBgYgPgSQgPgSgWgCQgZgDgUASQgUASABAZIgtAAIAAgiQAAgYgQgSQgPgSgVgCQgbgDgSARQgQAPgDAVIAABwIgtABIAAjSIABAAIAAjtQAAgXgQgSQgPgSgWgDQgZgDgUASQgTARgBAaIAAJdIABADIADA6Ih7h5QgQgQgZgDIgEAAQgVAAgPANg");
	this.shape.setTransform(-0.0088,-0.003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALIdQhAgXgwgwQghgigWgrQgfg9gqgpIikikQgTgTABgZQABgZAUgRQARgOAYABQAYADAQAQIB8B5IgEg6IAAgDIAApdQAAgaATgRQAVgSAYADQAWADAPASQAQASAAAXIAADtIAAAAIgBDSIAugBIAAhwQACgVARgPQASgRAaADQAWACAPASQAQASgBAYIAAAiIAtAAQgBgZAUgSQAUgSAZADQAWACAQASQAPASAAAYIAAA3IAsAAQABgbATgRQASgQAbABQAWADAPASQAQASAAAXIAAEtQAAB3hNBYQhOBYhyAMQgRACgRAAQgyAAgwgRg");
	this.shape_1.setTransform(0.0195,-0.0203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MOUSE, new cjs.Rectangle(-45.6,-60.2,91.2,120.4), null);


(lib.invisivel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E297A").s().p("EgkngCiMApygd/MAfdAjEMgpyAd/g");
	this.shape.setTransform(-505.025,349.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-739.4,0,739.4,557.4);


(lib.fecharfechando = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_2
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-159.85,-24.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABRCfQgHgDgEgGIgOgWIg3hXIg6BZIgKAQIgHAIQgEAEgGACQgFADgIAAQgLAAgIgHQgIgHAAgOQAAgPAQgYIBGhlIg7hcQgIgOgEgJQgFgJAAgKQAAgJAJgHQAIgHALAAQANAAAIAIQAHAIANAVIAvBMIAyhMIALgQIAIgMQAEgEAGgCQAEgDAHAAQAMAAAIAHQAHAHAAAKQAAAPgQAZIg+BdIBDBlQAJAOAEAJQAEAIAAAJQAAAHgEAGQgEAHgGADQgHAEgIAAQgJAAgGgEg");
	this.shape.setTransform(-0.475,-1.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(4,1,1).p("AhkkxIDJAAQBWAAA7A8QA8A9AABTIAADKQAABVg8A7Qg7A9hWAAIjJAAQhWAAg8g9Qg7g7AAhVIAAjKQAAhTA7g9QA8g8BWAAg");
	this.shape_1.setTransform(-0.5,-1.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AhkEyQhWAAg7g9Qg8g7AAhVIAAjKQAAhTA8g9QA7g8BWAAIDIAAQBWAAA7A8QA9A9AABTIAADKQAABVg9A7Qg7A9hWAAg");
	this.shape_2.setTransform(-0.5,-1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AamLRMg1LAAAA6lrQMA1LAAA");
	this.shape_3.setTransform(-124.5,21.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AanLRMg1LAAAIjfAAIAA2hIDfAAMA1LAAAIDdAAIAAWhg");
	this.shape_4.setTransform(-124.55,21.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.9,-51.6,384.79999999999995,146.2);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_96 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(96).call(this.frame_96).wait(1));

	// Camada_3
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(164.6,110.05,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({_off:true},45).wait(20));

	// Camada_1
	this.instance_1 = new lib.MOUSE();
	this.instance_1.setTransform(831.8,932.9,2.9792,2.9792,-25.471,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:3.35,y:83.6},16,cjs.Ease.get(1)).wait(1).to({x:-8.15,y:74.4},0).wait(1).to({x:3.35,y:83.6},0).wait(69).to({alpha:0},8).to({_off:true},1).wait(1));

	// Camada_4
	this.instance_2 = new lib.Símbolo3();
	this.instance_2.setTransform(-111.65,-49.15,1,1,0,0,0,45.7,45.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({_off:true},32).wait(48));

	// Camada_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E297A").s().p("AiTDoQgQAAgKgXQgLgZAAghIAAktQAAghALgYQAKgYAQAAIEnAAQAPAAALAYQALAYAAAhIAAEtQAAAhgLAZQgLAXgPAAg");
	this.shape.setTransform(60.35,120.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E297A").s().p("AnhHCQgyAAgjguQgkguAAhCIAApHQAAhBAkgvQAjguAyAAIPDAAQAyAAAjAuQAkAvAABBIAAJHQAABCgkAuQgjAugyAAg");
	this.shape_1.setTransform(112.075,132.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E297A").s().p("AsSKJQhSAAg6hCQg5hDAAheIAAtLQAAhdA5hDQA6hDBSAAIYlAAQBRAAA6BDQA6BDAABdIAANLQAABeg6BDQg6BChRAAg");
	this.shape_2.setTransform(159.35,144.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E297A").s().p("AwmM9QhuAAhOhVQhOhVAAh5IAAwzQAAh4BOhWQBOhVBuAAMAhNAAAQBuAABOBVQBOBWAAB4IAAQzQAAB5hOBVQhOBVhuAAg");
	this.shape_3.setTransform(202.075,154.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E297A").s().p("A0dPeQiIAAhghlQhghmAAiQIAA0FQAAiQBghlQBghmCIAAMAo7AAAQCIAABgBmQBgBlAACQIAAUFQAACQhgBmQhgBliIAAg");
	this.shape_4.setTransform(240.325,164.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E297A").s().p("A33RsQifAAhvh0Qhwh0AAilIAA29QAAilBwh0QBvh0CfAAMAvvAAAQCeAABwB0QBwB0AAClIAAW9QAAClhwB0QhwB0ieAAg");
	this.shape_5.setTransform(274.075,172.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E297A").s().p("A60TnQiyABh+iCQh9iBAAi2IAA5dQAAi3B9iAQB+iCCyAAMA1pAAAQCyAAB9CCQB+CAAAC3IAAZdQAAC2h+CBQh9CCiygBg");
	this.shape_6.setTransform(303.325,179.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E297A").s().p("A9UVQQjCAAiKiMQiJiMAAjFIAA7lQAAjGCJiLQCKiMDCAAMA6pAAAQDCAACKCMQCJCLAADGIAAblQAADFiJCMQiKCMjCAAg");
	this.shape_7.setTransform(328.05,185.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E297A").s().p("A/XWlQjPAAiUiUQiSiVAAjSIAA9TQAAjSCSiVQCUiUDPAAMA+vAAAQDPAACTCUQCTCVAADSIAAdTQAADSiTCVQiTCUjPAAg");
	this.shape_8.setTransform(348.3,190.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E297A").s().p("Egg8AXoQjbAAiaicQiaibAAjbIAA+qQAAjcCaibQCaicDbABMBB6AAAQDZgBCbCcQCaCbAADcIAAeqQAADbiaCbQibCcjZAAg");
	this.shape_9.setTransform(364.05,194.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E297A").s().p("EgiFAYXQjiAAigigQigigAAjjIAA/nQAAjiCgihQCgigDiAAMBELAAAQDiAACgCgQCgChAADiIAAfnQAADjigCgQigCgjiAAg");
	this.shape_10.setTransform(375.3,196.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E297A").s().p("EgixAYzQjmAAijijQijijAAjmMAAAggNQAAjmCjijQCjijDmAAMBFjAAAQDmAACjCjQCjCjAADmMAAAAgNQAADmijCjQijCjjmAAg");
	this.shape_11.setTransform(382.05,198.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E297A").s().p("Egi/AY9QjoAAikikQikikAAjoMAAAggZQAAjoCkikQCkikDoAAMBF/AAAQDoAACkCkQCkCkAADoMAAAAgZQAADoikCkQikCkjoAAg");
	this.shape_12.setTransform(384.3,199.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5E297A").s().p("A6UTTQivAAh7h/Qh7h/AAizIAA5CQAAi0B7h/QB7h/CvAAMA0pAAAQCuAAB8B/QB7B/AAC0IAAZCQAACzh7B/Qh8B/iuAAg");
	this.shape_13.setTransform(298.375,178.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E297A").s().p("Ay+OgQh+AAhZhfQhZhfAAiHIAAy1QAAiHBZhfQBZhfB+AAMAl9AAAQB+AABZBfQBZBfAACHIAAS1QAACHhZBfQhZBfh+AAg");
	this.shape_14.setTransform(225.625,160.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E297A").s().p("As+KmQhWAAg9hFQg9hHAAhiIAAtvQAAhiA9hGQA9hGBWAAIZ9AAQBWAAA9BGQA9BGAABiIAANvQAABig9BHQg9BFhWAAg");
	this.shape_15.setTransform(166.125,146.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5E297A").s().p("AoTHjQg4AAgmgyQgngygBhFIAApyQABhGAngyQAmgyA4AAIQnAAQA3AAAnAyQAnAyAABGIAAJyQAABFgnAyQgnAyg3AAg");
	this.shape_16.setTransform(119.85,134.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E297A").s().p("Ak+FXQghAAgYgjQgWgjAAgyIAAm9QAAgyAWgjQAYgjAhAAIJ8AAQAiAAAXAjQAYAjgBAyIAAG9QABAygYAjQgXAjgiAAg");
	this.shape_17.setTransform(86.8,126.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E297A").s().p("Ai+EEQgUAAgOgbQgOgaABgmIAAlQQgBgmAOgbQAOgbAUAAIF9AAQATAAAOAbQAOAbABAmIAAFQQgBAmgOAaQgOAbgTAAg");
	this.shape_18.setTransform(66.95,121.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},47).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.2,-145.7,1239.6000000000001,1299.1000000000001);


(lib.mv22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.parent.mv1.gotoAndStop(1);
		//	this.parent.mv2.gotoAndStop(1);
			this.parent.mv3.gotoAndStop(1);
			this.parent.mv4.gotoAndStop(1);
			this.parent.mv5.gotoAndStop(1);
			this.parent.mv6.gotoAndStop(1);
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		this.botaofechar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.parent.mv1.gotoAndStop(0);
		//	this.parent.mv2.gotoAndStop(0);
			this.parent.mv3.gotoAndStop(0);
			this.parent.mv4.gotoAndStop(0);
			this.parent.mv5.gotoAndStop(0);
			this.parent.mv6.gotoAndStop(0);
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Camada_1
	this.bt2 = new lib.invisivel();
	this.bt2.name = "bt2";
	this.bt2.setTransform(0,-469.9,0.6362,0.7113,38.7316,0,0,150.5,384.4);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.invisivel(), 3);

	this.botaofechar = new lib.fecharfechando();
	this.botaofechar.name = "botaofechar";
	this.botaofechar.setTransform(174.45,-907.85,0.6163,0.6163,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.botaofechar, 0, 1, 2, false, new lib.fecharfechando(), 3);

	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-712.7,-668.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt2}]}).to({state:[]},1).to({state:[{t:this.instance},{t:this.botaofechar}]},8).wait(1));

	// Camada_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("An7JFQgaAAgSgSQgSgTAAgaIAAwLQAAgaASgTQASgSAaAAIP3AAQAZAAATASQASATAAAaIAAQLQAAAagSATQgTASgZAAg");
	this.shape.setTransform(-301.95,-750.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3DA60").s().p("A4qcRQhRAAg5g6Qg5g6AAhSMAAAgyVQAAhRA5g7QA5g6BRAAMAxVAAAQBRAAA4A6QA6A7AABRMAAAAyVQAABSg6A6Qg4A6hRAAg");
	this.shape_1.setTransform(-296.725,-669.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3DA60").s().p("Egm1AsgQh/AAhZhcQhbhbABiCMAAAhPOQgBiBBbhcQBZhbB/AAMBNrAAAQB/AABZBbQBaBcAACBMAAABPOQAACChaBbQhZBch/AAg");
	this.shape_2.setTransform(-292.35,-600.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3DA60").s().p("EgybA5yQilAAh0h3Qh1h3AAioMAAAhm3QAAipB1h2QB0h3ClAAMBk3AAAQClAAB0B3QB1B2AACpMAAABm3QAACoh1B3Qh0B3ilAAg");
	this.shape_3.setTransform(-288.725,-543.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DA60").s().p("Eg7cBEHQjCAAiKiMQiJiMAAjHMAAAh5QQAAjGCJiMQCKiMDCAAMB25AAAQDCAACKCMQCJCMAADGMAAAB5QQAADHiJCMQiKCMjCAAg");
	this.shape_4.setTransform(-285.925,-500.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DA60").s().p("EhB4BLfQjYAAiYibQiYibAAjcMAAAiGZQAAjcCYibQCYibDYAAMCDxAAAQDYAACYCbQCYCbAADcMAAACGZQAADciYCbQiYCbjYAAg");
	this.shape_5.setTransform(-283.925,-468.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3DA60").s().p("EhFwBP6QjkAAihikQihikAAjpMAAAiOSQAAjoChikQChikDkAAMCLhAAAQDkAAChCkQChCkAADoMAAACOSQAADpihCkQihCkjkAAg");
	this.shape_6.setTransform(-282.725,-449.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3DA60").s().p("EhHCBRZQjoAAikioQikinAAjtMAAAiQ6QAAjsCkioQCkinDoAAMCOFAAAQDoAACkCnQCkCoAADsMAAACQ6QAADtikCnQikCojoAAg");
	this.shape_7.setTransform(-282.325,-443.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-964.6,1021.4,1041.8);


(lib.mv6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.parent.mv1.gotoAndStop(1);
			this.parent.mv2.gotoAndStop(1);
			this.parent.mv3.gotoAndStop(1);
			this.parent.mv4.gotoAndStop(1);
			this.parent.mv5.gotoAndStop(1);
		//	this.parent.mv6.gotoAndStop(1);
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		this.botaofechar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.parent.mv1.gotoAndStop(0);
			this.parent.mv2.gotoAndStop(0);
			this.parent.mv3.gotoAndStop(0);
			this.parent.mv4.gotoAndStop(0);
			this.parent.mv5.gotoAndStop(0);
		//	this.parent.mv6.gotoAndStop(0);
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Camada_1
	this.bt6 = new lib.invisivel();
	this.bt6.name = "bt6";
	this.bt6.setTransform(329.95,103.45,0.6362,0.7113,38.7316,0,0,150.5,384.4);
	new cjs.ButtonHelper(this.bt6, 0, 1, 2, false, new lib.invisivel(), 3);

	this.botaofechar = new lib.fecharfechando();
	this.botaofechar.name = "botaofechar";
	this.botaofechar.setTransform(174.45,-907.85,0.6163,0.6163,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.botaofechar, 0, 1, 2, false, new lib.fecharfechando(), 3);

	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-712.7,-623.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt6}]}).to({state:[]},1).to({state:[{t:this.instance},{t:this.botaofechar}]},8).wait(1));

	// Camada_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("An6JFQgaAAgTgSQgSgTAAgaIAAwLQAAgaASgTQATgSAaAAIP2AAQAZAAASASQATATAAAaIAAQLQAAAagTATQgSASgZAAg");
	this.shape.setTransform(28.8,-179.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3DA60").s().p("A4qcRQhRAAg5g6Qg5g6AAhTMAAAgyUQAAhSA5g6QA5g6BRAAMAxVAAAQBRAAA4A6QA6A6AABSMAAAAyUQAABTg6A6Qg4A6hRAAg");
	this.shape_1.setTransform(-53.725,-249.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3DA60").s().p("Egm1AsgQh/AAhahcQhZhbAAiCMAAAhPOQAAiBBZhcQBahbB/AAMBNrAAAQB/AABZBbQBaBcAACBMAAABPOQAACChaBbQhZBch/AAg");
	this.shape_2.setTransform(-123.6,-308.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3DA60").s().p("EgybA5yQilAAh1h3Qh0h2AAipMAAAhm3QAAioB0h3QB1h3ClAAMBk3AAAQClAAB0B3QB1B3AACoMAAABm3QAACph1B2Qh0B3ilAAg");
	this.shape_3.setTransform(-180.725,-357.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DA60").s().p("Eg7cBEHQjCAAiKiNQiJiLAAjGMAAAh5RQAAjGCJiMQCKiMDCAAMB25AAAQDCAACKCMQCJCMAADGMAAAB5RQAADGiJCLQiKCNjCAAg");
	this.shape_4.setTransform(-225.175,-395.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DA60").s().p("EhB4BLfQjYAAiYicQiYiaAAjcMAAAiGaQAAjbCYibQCYibDYAAMCDxAAAQDYAACYCbQCYCbAADbMAAACGaQAADciYCaQiYCcjYAAg");
	this.shape_5.setTransform(-256.925,-422.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3DA60").s().p("EhFwBP6QjkAAihikQihikAAjpMAAAiOSQAAjoChikQChikDkAAMCLhAAAQDkAAChCkQChCkAADoMAAACOSQAADpihCkQihCkjkAAg");
	this.shape_6.setTransform(-275.975,-438.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3DA60").s().p("EhHCBRZQjoAAikioQikinAAjtMAAAiQ6QAAjsCkioQCkinDoAAMCOFAAAQDoAACkCnQCkCoAADsMAAACQ6QAADtikCnQikCojoAAg");
	this.shape_7.setTransform(-282.325,-443.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-964.6,1021.4,1041.8);


(lib.mv5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.parent.mv1.gotoAndStop(1);
			this.parent.mv2.gotoAndStop(1);
			this.parent.mv3.gotoAndStop(1);
			this.parent.mv4.gotoAndStop(1);
		//	this.parent.mv5.gotoAndStop(1);
			this.parent.mv6.gotoAndStop(1);
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		this.botaofechar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.parent.mv1.gotoAndStop(0);
			this.parent.mv2.gotoAndStop(0);
			this.parent.mv3.gotoAndStop(0);
			this.parent.mv4.gotoAndStop(0);
		//	this.parent.mv5.gotoAndStop(0);
			this.parent.mv6.gotoAndStop(0);
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Camada_1
	this.bt5 = new lib.invisivel();
	this.bt5.name = "bt5";
	this.bt5.setTransform(2.9,103.45,0.6362,0.7113,38.7316,0,0,150.5,384.4);
	new cjs.ButtonHelper(this.bt5, 0, 1, 2, false, new lib.invisivel(), 3);

	this.botaofechar = new lib.fecharfechando();
	this.botaofechar.name = "botaofechar";
	this.botaofechar.setTransform(174.45,-907.85,0.6163,0.6163,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.botaofechar, 0, 1, 2, false, new lib.fecharfechando(), 3);

	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-712.7,-623.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt5}]}).to({state:[]},1).to({state:[{t:this.instance},{t:this.botaofechar}]},8).wait(1));

	// Camada_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("An6JFQgaAAgTgSQgSgTAAgaIAAwLQAAgaASgTQATgSAaAAIP2AAQAZAAASASQATATAAAaIAAQLQAAAagTATQgSASgZAAg");
	this.shape.setTransform(-307.2,-179.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3DA60").s().p("A4qcRQhRAAg5g6Qg5g6AAhTMAAAgyUQAAhSA5g6QA5g6BRAAMAxWAAAQBQAAA5A6QA5A6AABSMAAAAyUQAABTg5A6Qg5A6hQAAg");
	this.shape_1.setTransform(-300.625,-249.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3DA60").s().p("Egm1AsgQh/AAhahcQhZhbAAiCMAAAhPOQAAiBBZhcQBahbB/AAMBNrAAAQB/AABaBbQBZBcAACBMAAABPOQAACChZBbQhaBch/AAg");
	this.shape_2.setTransform(-295.025,-308.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3DA60").s().p("EgybA5yQilAAh1h3Qh0h2AAipMAAAhm3QAAioB0h3QB1h3ClAAMBk3AAAQClAAB0B3QB1B3AACoMAAABm3QAACph1B2Qh0B3ilAAg");
	this.shape_3.setTransform(-290.425,-357.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DA60").s().p("Eg7cBEHQjDAAiJiNQiJiLAAjGMAAAh5RQAAjGCJiMQCJiMDDAAMB26AAAQDBAACJCMQCKCMAADGMAAAB5RQAADGiKCLQiJCNjBAAg");
	this.shape_4.setTransform(-286.9,-395.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DA60").s().p("EhB5BLfQjWAAiZicQiYiaAAjcMAAAiGaQAAjbCYibQCZibDWAAMCDzAAAQDXAACXCbQCZCbAADbMAAACGaQAADciZCaQiXCcjXAAg");
	this.shape_5.setTransform(-284.35,-422.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3DA60").s().p("EhFwBP6QjkAAihikQihikAAjpMAAAiOSQAAjoChikQChikDkAAMCLhAAAQDkAAChCkQChCkAADoMAAACOSQAADpihCkQihCkjkAAg");
	this.shape_6.setTransform(-282.825,-438.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3DA60").s().p("EhHCBRZQjoAAikioQikinAAjtMAAAiQ6QAAjsCkioQCkinDoAAMCOFAAAQDoAACkCnQCkCoAADsMAAACQ6QAADtikCnQikCojoAAg");
	this.shape_7.setTransform(-282.325,-443.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-964.6,1021.4,1041.8);


(lib.mv4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.parent.mv1.gotoAndStop(1);
			this.parent.mv2.gotoAndStop(1);
			this.parent.mv3.gotoAndStop(1);
		//	this.parent.mv4.gotoAndStop(1);
			this.parent.mv5.gotoAndStop(1);
			this.parent.mv6.gotoAndStop(1);
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		this.botaofechar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.parent.mv1.gotoAndStop(0);
			this.parent.mv2.gotoAndStop(0);
			this.parent.mv3.gotoAndStop(0);
		//	this.parent.mv4.gotoAndStop(0);
			this.parent.mv5.gotoAndStop(0);
			this.parent.mv6.gotoAndStop(0);
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Camada_1
	this.bt4 = new lib.invisivel();
	this.bt4.name = "bt4";
	this.bt4.setTransform(-300.85,103.45,0.6362,0.7113,38.7316,0,0,150.5,384.4);
	new cjs.ButtonHelper(this.bt4, 0, 1, 2, false, new lib.invisivel(), 3);

	this.botaofechar = new lib.fecharfechando();
	this.botaofechar.name = "botaofechar";
	this.botaofechar.setTransform(174.45,-907.85,0.6163,0.6163,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.botaofechar, 0, 1, 2, false, new lib.fecharfechando(), 3);

	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-712.7,-634.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt4}]}).to({state:[]},1).to({state:[{t:this.instance},{t:this.botaofechar}]},8).wait(1));

	// Camada_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("An7JFQgaAAgSgSQgSgTAAgaIAAwLQAAgaASgTQASgSAaAAIP2AAQAbAAARASQATATAAAaIAAQLQAAAagTATQgRASgbAAg");
	this.shape.setTransform(-614.05,-179.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3DA60").s().p("A4qcRQhRAAg5g6Qg5g6AAhTMAAAgyUQAAhSA5g6QA5g6BRAAMAxVAAAQBRAAA4A6QA6A6AABSMAAAAyUQAABTg6A6Qg4A6hRAAg");
	this.shape_1.setTransform(-526.025,-249.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3DA60").s().p("Egm1AsgQh/AAhahcQhZhbAAiCMAAAhPOQAAiBBZhcQBahbB/AAMBNrAAAQB/AABaBbQBZBcAACBMAAABPOQAACChZBbQhaBch/AAg");
	this.shape_2.setTransform(-451.575,-308.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3DA60").s().p("EgybA5yQilAAh1h3Qh0h2AAipMAAAhm3QAAioB0h3QB1h3ClAAMBk3AAAQClAAB0B3QB1B3AACoMAAABm3QAACph1B2Qh0B3ilAAg");
	this.shape_3.setTransform(-390.625,-357.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DA60").s().p("Eg7cBEHQjDAAiJiNQiJiLAAjGMAAAh5RQAAjGCJiMQCJiMDDAAMB25AAAQDCAACJCMQCKCMAADGMAAAB5RQAADGiKCLQiJCNjCAAg");
	this.shape_4.setTransform(-343.25,-395.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DA60").s().p("EhB5BLfQjXAAiYicQiYiaAAjcMAAAiGaQAAjbCYibQCYibDXAAMCDyAAAQDYAACXCbQCZCbAADbMAAACGaQAADciZCaQiXCcjYAAg");
	this.shape_5.setTransform(-309.4,-422.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3DA60").s().p("EhFwBP6QjkAAihikQihikAAjpMAAAiOSQAAjoChikQChikDkAAMCLhAAAQDjAAChCkQCiCkAADoMAAACOSQAADpiiCkQihCkjjAAg");
	this.shape_6.setTransform(-289.075,-438.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3DA60").s().p("EhHCBRZQjoAAikioQikinAAjtMAAAiQ6QAAjsCkioQCkinDoAAMCOFAAAQDoAACkCnQCkCoAADsMAAACQ6QAADtikCnQikCojoAAg");
	this.shape_7.setTransform(-282.325,-443.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-964.6,1021.4,1041.8);


(lib.mv3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.parent.mv1.gotoAndStop(1);
			this.parent.mv2.gotoAndStop(1);
		//	this.parent.mv3.gotoAndStop(1);
			this.parent.mv4.gotoAndStop(1);
			this.parent.mv5.gotoAndStop(1);
			this.parent.mv6.gotoAndStop(1);
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		this.botaofechar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.parent.mv1.gotoAndStop(0);
			this.parent.mv2.gotoAndStop(0);
		//	this.parent.mv3.gotoAndStop(0);
			this.parent.mv4.gotoAndStop(0);
			this.parent.mv5.gotoAndStop(0);
			this.parent.mv6.gotoAndStop(0);
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Camada_1
	this.bt3 = new lib.invisivel();
	this.bt3.name = "bt3";
	this.bt3.setTransform(333,-469.9,0.6362,0.7113,38.7316,0,0,150.5,384.4);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.invisivel(), 3);

	this.botaofechar = new lib.fecharfechando();
	this.botaofechar.name = "botaofechar";
	this.botaofechar.setTransform(174.45,-907.85,0.6163,0.6163,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.botaofechar, 0, 1, 2, false, new lib.fecharfechando(), 3);

	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-712.7,-805.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt3}]}).to({state:[]},1).to({state:[{t:this.instance},{t:this.botaofechar}]},8).wait(1));

	// Camada_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("An7JFQgaAAgSgSQgSgTAAgaIAAwLQAAgaASgTQASgSAaAAIP3AAQAZAAATASQASATAAAaIAAQLQAAAagSATQgTASgZAAg");
	this.shape.setTransform(22.05,-750.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3DA60").s().p("A4qcRQhRAAg5g6Qg5g6AAhSMAAAgyVQAAhRA5g7QA5g6BRAAMAxVAAAQBRAAA5A6QA5A7AABRMAAAAyVQAABSg5A6Qg5A6hRAAg");
	this.shape_1.setTransform(-58.725,-669.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3DA60").s().p("Egm1AsgQh/AAhahcQhZhbAAiCMAAAhPOQAAiBBZhcQBahbB/AAMBNrAAAQB/AABaBbQBZBcAACBMAAABPOQAACChZBbQhaBch/AAg");
	this.shape_2.setTransform(-127.025,-600.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3DA60").s().p("EgybA5yQilAAh1h3Qh0h3AAioMAAAhm3QAAipB0h2QB1h3ClAAMBk3AAAQClAAB0B3QB1B2AACpMAAABm3QAACoh1B3Qh0B3ilAAg");
	this.shape_3.setTransform(-182.925,-543.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DA60").s().p("Eg7cBEHQjCAAiKiMQiJiMAAjHMAAAh5QQAAjGCJiMQCKiMDCAAMB25AAAQDCAACKCMQCJCMAADGMAAAB5QQAADHiJCMQiKCMjCAAg");
	this.shape_4.setTransform(-226.425,-500.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DA60").s().p("EhB4BLfQjYAAiYibQiYibAAjcMAAAiGZQAAjcCYibQCYibDYAAMCDxAAAQDYAACYCbQCYCbAADcMAAACGZQAADciYCbQiYCbjYAAg");
	this.shape_5.setTransform(-257.475,-468.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3DA60").s().p("EhFwBP6QjkAAihikQihikAAjpMAAAiOSQAAjoChikQChikDkAAMCLhAAAQDkAAChCkQChCkAADoMAAACOSQAADpihCkQihCkjkAAg");
	this.shape_6.setTransform(-276.125,-449.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3DA60").s().p("EhHCBRZQjoAAikioQikinAAjtMAAAiQ6QAAjsCkioQCkinDoAAMCOFAAAQDoAACkCnQCkCoAADsMAAACQ6QAADtikCnQikCojoAAg");
	this.shape_7.setTransform(-282.325,-443.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-964.6,1021.4,1041.8);


(lib.mv1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
		//	this.parent.mv1.gotoAndStop(1);
		//	this.parent.mv2.gotoAndStop(1);
			this.parent.mv2.visible = false;
			this.parent.mv3.gotoAndStop(1);
			this.parent.mv4.gotoAndStop(1);
			this.parent.mv5.gotoAndStop(1);
			this.parent.mv6.gotoAndStop(1);
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		this.botaofechar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
		//	this.parent.mv1.gotoAndStop(0);
			this.parent.mv2.visible = true;
			this.parent.mv3.gotoAndStop(0);
			this.parent.mv4.gotoAndStop(0);
			this.parent.mv5.gotoAndStop(0);
			this.parent.mv6.gotoAndStop(0);
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Camada_1
	this.bt1 = new lib.invisivel();
	this.bt1.name = "bt1";
	this.bt1.setTransform(-306,-469.9,0.6362,0.7113,38.7316,0,0,150.5,384.4);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.invisivel(), 3);

	this.botaofechar = new lib.fecharfechando();
	this.botaofechar.name = "botaofechar";
	this.botaofechar.setTransform(174.45,-907.85,0.6163,0.6163,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.botaofechar, 0, 1, 2, false, new lib.fecharfechando(), 3);

	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-712.7,-656.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1}]}).to({state:[]},1).to({state:[{t:this.instance},{t:this.botaofechar}]},8).wait(1));

	// Camada_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3DA60").s().p("An7JFQgaAAgSgSQgSgTAAgaIAAwLQAAgaASgTQASgSAaAAIP3AAQAZAAATASQASATAAAaIAAQLQAAAagSATQgTASgZAAg");
	this.shape.setTransform(-616.95,-750.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3DA60").s().p("A4qcRQhRAAg5g6Qg5g6AAhSMAAAgyVQAAhRA5g7QA5g6BRAAMAxVAAAQBRAAA5A6QA5A7AABRMAAAAyVQAABSg5A6Qg5A6hRAAg");
	this.shape_1.setTransform(-528.175,-669.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3DA60").s().p("Egm1AsgQh/AAhahcQhahbAAiCMAAAhPOQAAiBBahcQBahbB/AAMBNrAAAQB/AABaBbQBaBcAACBMAAABPOQAACChaBbQhaBch/AAg");
	this.shape_2.setTransform(-453.05,-600.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3DA60").s().p("EgybA5yQilAAh1h3Qh0h3AAioMAAAhm3QAAipB0h2QB1h3ClAAMBk3AAAQClAAB0B3QB1B2AACpMAAABm3QAACoh1B3Qh0B3ilAAg");
	this.shape_3.setTransform(-391.575,-543.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DA60").s().p("Eg7cBEHQjDAAiJiMQiJiMAAjHMAAAh5QQAAjGCJiMQCJiMDDAAMB25AAAQDCAACKCMQCJCMAADGMAAAB5QQAADHiJCMQiKCMjCAAg");
	this.shape_4.setTransform(-343.775,-500.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DA60").s().p("EhB5BLfQjXAAiXibQiZibAAjcMAAAiGZQAAjcCZibQCXibDXAAMCDzAAAQDWAACZCbQCYCbAADcMAAACGZQAADciYCbQiZCbjWAAg");
	this.shape_5.setTransform(-309.65,-468.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3DA60").s().p("EhFwBP6QjkAAihikQigikAAjpMAAAiOSQAAjoCgikQChikDkAAMCLhAAAQDjAAChCkQCiCkAADoMAAACOSQAADpiiCkQihCkjjAAg");
	this.shape_6.setTransform(-289.15,-449.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3DA60").s().p("EhHCBRZQjoAAikioQikinAAjtMAAAiQ6QAAjsCkioQCkinDoAAMCOFAAAQDoAACkCnQCkCoAADsMAAACQ6QAADtikCnQikCojoAAg");
	this.shape_7.setTransform(-282.325,-443.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-964.6,1021.4,1041.8);


// stage content:
(lib.U2S8_anim_interativa_500x500 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [41];
	// timeline functions:
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// Camada_4
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(250.15,249.6,0.463,0.463,0,0,0,199.8,220.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).wait(1));

	// MVs
	this.mv6 = new lib.mv6();
	this.mv6.name = "mv6";
	this.mv6.setTransform(380.75,455.25,0.463,0.463,0,0,0,0,0.1);

	this.mv5 = new lib.mv5();
	this.mv5.name = "mv5";
	this.mv5.setTransform(380.75,455.25,0.463,0.463,0,0,0,0,0.1);

	this.mv4 = new lib.mv4();
	this.mv4.name = "mv4";
	this.mv4.setTransform(380.75,455.25,0.463,0.463,0,0,0,0,0.1);

	this.mv3 = new lib.mv3();
	this.mv3.name = "mv3";
	this.mv3.setTransform(380.75,455.25,0.463,0.463,0,0,0,0,0.1);

	this.mv2 = new lib.mv22();
	this.mv2.name = "mv2";
	this.mv2.setTransform(380.75,455.25,0.463,0.463,0,0,0,0,0.1);

	this.mv1 = new lib.mv1();
	this.mv1.name = "mv1";
	this.mv1.setTransform(380.75,455.25,0.463,0.463,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mv1},{t:this.mv2},{t:this.mv3},{t:this.mv4},{t:this.mv5},{t:this.mv6}]},41).wait(1));

	// Símbolo_1
	this.instance_1 = new lib.Símbolo1();
	this.instance_1.setTransform(237.05,240.25,0.0517,0.0517,0,0,0,148,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:147.2,regY:147.2,scaleX:0.5867,scaleY:0.5867,x:237,y:240.2},11,cjs.Ease.get(-1)).to({scaleX:0.463,scaleY:0.463},5,cjs.Ease.get(1)).wait(26));

	// Camada_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("AQRTOQgngnAAg3QAAg4AngnQAngoA4AAQA3AAAnAoQAoAnAAA4QAAA3goAnQgnAog3AAQg4AAgngog");
	var mask_graphics_18 = new cjs.Graphics().p("AAAGPQhxAAhag3QgpgYglglIgCgCQgUgUgRgXQhPhmAAiHIAAgBQAAiHBPhoQASgWAUgVIABgBQAUgUAWgRQBnhOCHgBIACAAQCIABBmBOQAWARAUAUIABABQAmAlAZAqQA3BaAABxQAAByg3BaQgZApglAkIgBABQglAlgpAZQhaA3hwAAIgCAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AAAKNQi5gBiUhZQhDgog7g8IgDgDQgigigcgkQiAinAAjeIAAgBQAAjeCBipQAcgkAigjIABgBQAhggAkgbQCoiBDdgBIADAAQDeABCoCBQAjAaAhAhIACABQA8A+AqBEQBZCUABC4IAAAAQAAC5haCUQgpBEg8A7IgBABQg8A9hFApQiSBZi2ABIgEAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AAAN+Qj9gBjKh6Qhcg3hRhSIgEgDQgvgvglgyQiwjlgBkvIAAgCQAAkvCxjpQAmgyAuguIACgCQAugtAwglQDmivEugCIAFAAQEwABDnCwQAwAlAtAsIACADQBTBUA5BdQB7DLAAD8IAAAAQAAD9h7DKQg4BdhSBSIgCABQhSBTheA5QjHB5j6ACIgGAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AAARiQk9AAj+iaQh0hGhmhlIgFgFQg6g6gwg/QjdkgAAl9IAAgCQAAl+DekiQAwg/A6g7IACgDQA5g3A9gvQEgjcF8gCIAGAAQF+AAEiDeQA8AuA4A4IAEADQBoBoBHB2QCaD/AAE9IAAAAQAAE+iaD+QhGB0hoBnIgBACQhoBoh1BHQj7CZk5ABIgIAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AAAU6Ql7AAkvi3QiJhTh6h5IgGgGQhFhFg5hLQkIlYAAnHIAAgCQAAnIEIlbQA5hKBFhGIADgDQBEhDBJg4QFYkGHEgCIAHAAQHJAAFZEIQBIA4BDBCIAEAEQB8B9BWCNQC3EuAAF7IAAAAQAAF8i3EuQhVCKh6B7IgDACQh8B8iMBWQkqC1l2ACIgJAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AAAYGQm0AAldjTQifhgiMiLIgHgHQhQhQhBhWQkwmMgBoMIAAgDQAAoNExmPQBChXBPhQIAEgEQBOhNBUhAQGMkvIJgCIAJAAQIOAAGNExQBUA/BNBOIAEAEQCQCQBiChQDTFeAAG0IAAAAQAAG1jTFcQhiChiNCNIgDACQiOCPiiBjQlYDQmtADIgMAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AAAbFQnqAAmJjtQizhsidicIgIgIQhZhahKhgQlWm+AApNIAAgDQAApOFWnCQBKhgBahbIADgEQBZhXBehIQG9lUJJgDIAKAAQJPABHAFWQBeBIBWBXIAFAEQChCiBuC1QDuGKABHqIAAAAQAAHrjvGIQhtC0ifCeIgDAEQigChi2BuQmCDrnjACIgNAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AAAd4QodABmxkHQjFh2iuitIgJgIQhihkhShqQl5nrgBqLIAAgDQAAqLF7nwQBRhrBjhkIAFgEQBhhgBnhPQHsl4KFgDIAMAAQKMABHuF6QBnBPBfBfIAGAFQCyCyB5DJQEHGxAAIeIAAAAQAAIekHGwQh4DHiwCvIgDADQixCyjIB5QmqEDoVADIgPAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EAAAAggQpMgBnYkdQjViAi9i8IgKgJQhrhshYh0QmaoXgCrDIAAgDQAArEGcobQBYh1BshsIAFgEQBqhpBwhWQIXmXK9gEIAMAAQLGAAIZGbQBvBWBoBnIAGAGQDCDCCEDbQEdHXAAJMIAAAAQAAJNkdHWQiDDYi/C/IgEADQjADBjZCEQnQEZpEAFIgPAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EAAAAi6Qp4AAn6kyQjliLjMjKIgKgJQhzh0hfh8Qm5o/gBr4IAAgDQAAr4G6pEQBfh8Bzh1IAGgGQBxhwB6hbQI+m3LxgDIAOAAQL5AAJBG6QB4BbBwBvIAHAHQDPDQCODqQEzH7AAJ4IAAAAQAAJ5kzH5QiMDnjNDOIgEADQjODPjqCPQnyEupvAEIgRAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EAAAAlIQqggBoalFQj0iTjZjXIgLgKQh6h7hliEQnVpjgBsoIAAgEQAAspHWpoQBliFB6h8IAHgGQB5h3CAhiQJinSMigEIAOAAQMrAAJlHWQCABiB3B2IAHAHQDdDdCXD6QFGIaAAKgIAAABQAAKhlGIZQiWD2jaDaIgEAEQjcDdj4CXQoSFBqWAFIgSAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EAAAAnJQrFABo4lYQkBibjkjiIgMgMQiAiBhriLQnvqFAAtUIAAgEQAAtWHvqJQBqiMCCiCIAGgGQCAh+CHhoQKEnrNNgFIAPAAQNXABKHHvQCGBoB+B8IAIAIQDpDpCeEHQFYI3ABLGIAAAAQAALGlZI3QidEDjnDmIgDAEQjoDpkGCfQovFTq6AEIgTAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EAAAAo/QrmAApSloQkNiijwjsIgLgMQiHiIhxiSQoFqjgBt8IAAgEQAAt+IGqnQBxiTCHiJIAHgGQCFiECOhsQKioCN0gFIAQAAQN/ABKlIGQCNBsCDCDIAIAHQD0D0CnEUQFoJTAALmIAAAAQAALnloJRQilEQjxDwIgFAFQjyD0kSCmQpKFjraAFIgUAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EAAAAqoQsDgBprl1QkYipj5j2IgMgMQiMiNh1iYQoaq+gBugIAAgEQAAuhIbrDQB0iYCOiPIAGgHQCLiJCUhwQK9oXOXgFIARAAQOjAALAIcQCTBwCICIIAJAIQD9D+CuEeQF1JqABMFIAAAAQAAMFl2JoQisEbj7D6IgEAFQj8D9keCuQpgFxr4AFIgVAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EAAAAsEQseAAqAmCQkgivkBj+IgOgNQiQiRh5idQosrWgBvAIAAgEQAAvBItrbQB4ieCSiSIAHgIQCPiNCZh1QLVooO3gGIARAAQPCAALYIuQCYB1CNCMIAJAJQEGEGC0EpQGCJ+ABMeIAAABQgBMfmCJ+QizEkkDEDIgEAEQkEEGkoC0Qp0F+sSAEIgWAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EAAAAtUQs0ABqSmOQkqizkIkGIgNgNQiWiWh7ihQo8rrgCvbIAAgEQABvcI9rwQB7iiCWiXIAIgHQCTiSCdh4QLpo4PSgGIASAAQPeABLsI9QCdB3CRCRIAJAJQEOEOC3EwQGOKRABM1IAAABQAAM2mPKQQi2EtkLEKIgEAEQkMEOkwC4QqHGJsoAEIgWAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EAAAAuZQtIAAqhmXQkwi4kPkMIgNgNQiZiZh+ilQpKr9gCvyIAAgEQAAv0JMsBQB+imCZiaIAIgIQCWiUChh7QL7pGPpgFIASAAQP1gBL/JMQCfB6CUCUIAKAJQETEUC+E3QGWKiAANHIAAABQAANKmWKfQi8EzkQEQIgFAFQkTEUk3C9QqVGRs7AGIgXAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EAAAAvQQtYAAqtmeQk2i7kUkRIgOgOQibiciBioQpUsLgCwEIAAgFQAAwGJWsQQCBipCbidIAIgIQCaiYCkh9QMJpRP7gFIATAAQQIAAMNJWQCiB9CYCXIAJAJQEZEZDAE9QGeKuABNXIAAABQAANZmfKsQi+E5kWEWIgFAEQkXEZk+DBQqhGZtLAFIgXAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EAAAAv8QtkgBq3mkQk7i+kYkVIgNgOQieieiDiqQpdsVgCwUIAAgFQAAwVJfsbQCDirCeigIAIgIQCbiZCniAQMUpZQKgFIATAAQQWgBMZJfQClB/CZCYIAJAKQEeEdDCFDQGlK2AANkIAAABQAANlmlK1QjBE/kZEZIgGAEQkaEelCDDQqsGftWAGIgYAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EAAAAwaQttAAq+moQk+jAkakYIgOgNQigigiEitQpjsdgCweIAAgFQABwfJkskQCEitCgihIAIgIQCdibCpiAQMcpgQUgGIATAAQQhABMgJlQCnB/CaCbIAKAJQEgEgDFFFQGpK+ABNtIAAABQgBNumpK8QjEFBkcEcIgFAGQkdEflFDGQqzGjtfAFIgYAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EAAAAwtQtyAArCmrQlAjCkckYIgOgPQihigiFitQpmsjgCwkIAAgFQAAwmJosoQCFiuChiiIAIgIQCeicCpiBQMhpkQbgFIATAAQQoAAMlJpQCnCACcCbIAKAKQEhEiDGFHQGrLCABNyIAAABQAANzmsLBQjEFDkfEeIgEAEQkgEjlHDGQq3GltkAGIgYAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgY4AqHQlIjHkikiQiiihiEiuQpqsmAAwpQAAwoJqsqQCEiuCiiiQCiihCuiFQMppqQpAAQQqAAMmJqQCtCFChChQEiEiDGFIQGtLEAAN0QAAN1mtLCQjGFHkiEgQkhEilHDHQrCGst0AAQtzAArFmsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:126.9645,y:126.9529}).wait(1).to({graphics:mask_graphics_18,x:240.525,y:240.5}).wait(1).to({graphics:mask_graphics_19,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_20,x:240.525,y:240.5}).wait(1).to({graphics:mask_graphics_21,x:240.525,y:240.5}).wait(1).to({graphics:mask_graphics_22,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_23,x:240.525,y:240.5}).wait(1).to({graphics:mask_graphics_24,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_25,x:240.525,y:240.5}).wait(1).to({graphics:mask_graphics_26,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_27,x:240.525,y:240.5}).wait(1).to({graphics:mask_graphics_28,x:240.55,y:240.525}).wait(1).to({graphics:mask_graphics_29,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_30,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_31,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_32,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_33,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_34,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_35,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_36,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_37,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_38,x:240.55,y:240.5}).wait(1).to({graphics:mask_graphics_39,x:240.5497,y:240.5034}).wait(3));

	// Camada_1
	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(65.05,13.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(54.25,66.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(173.9,13.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_8();
	this.instance_5.setTransform(195.5,65.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(348.7,5.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_6();
	this.instance_7.setTransform(54,330.15,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_5();
	this.instance_8.setTransform(42.15,430.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_4();
	this.instance_9.setTransform(196.75,422.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_3();
	this.instance_10.setTransform(195.5,330.6,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_2();
	this.instance_11.setTransform(331.55,423.2,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_1();
	this.instance_12.setTransform(349.55,330.6,0.5,0.5);

	this.instance_13 = new lib.Path();
	this.instance_13.setTransform(237,240.2,0.463,0.463,0,0,0,349.9,313.3);
	this.instance_13.alpha = 0.1992;

	this.instance_14 = new lib.Path_1();
	this.instance_14.setTransform(237,240.2,0.463,0.463,0,0,0,349.9,313.3);
	this.instance_14.alpha = 0.1992;

	this.instance_15 = new lib.Path_2();
	this.instance_15.setTransform(237,240.2,0.463,0.463,0,0,0,78.2,320.7);
	this.instance_15.alpha = 0.1992;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},17).wait(25));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(292.2,255.9,342.90000000000003,425.70000000000005);
// library properties:
lib.properties = {
	id: '3C55C1694F36DA45BF326DB8A17FE570',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/U2S8_anim_interativa_500x500_atlas_1.png?1615904245859", id:"U2S8_anim_interativa_500x500_atlas_1"},
		{src:"images/U2S8_anim_interativa_500x500_atlas_2.png?1615904245859", id:"U2S8_anim_interativa_500x500_atlas_2"},
		{src:"images/U2S8_anim_interativa_500x500_atlas_3.png?1615904245859", id:"U2S8_anim_interativa_500x500_atlas_3"},
		{src:"images/U2S8_anim_interativa_500x500_atlas_4.png?1615904245859", id:"U2S8_anim_interativa_500x500_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3C55C1694F36DA45BF326DB8A17FE570'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
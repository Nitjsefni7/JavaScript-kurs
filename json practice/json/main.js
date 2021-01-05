var MAINAPP = (function(app){
	let jsonObj = {};

	const loadJSON = function(path){
		let xobj = new XMLHttpRequest();
		xobj.overrideMimeType('application/json');
		xobj.open('GET', path);
		xobj.onreadystatechange = function(){
			if (xobj.readyState === 4){
				app.jsonObj = JSON.parse(xobj.responseText);
			}
		};
		xobj.send(null);
	};

	//public methods and properties
	app.jsonObj = jsonObj;
	app.loadJSON = loadJSON;

	return app;
})(MAINAPP || {});
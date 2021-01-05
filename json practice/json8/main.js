//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();
var MAINAPP = (function(nsp){
	let jsonObj = {};

	const loadJSON = function(path){
		const xobj = new XMLHttpRequest();
		xobj.overrideMimeType('application/json');
		xobj.open('GET', path);
		xobj.onreadystatechange = function(){
			if (xobj.readyState === 4){
				jsonObj = JSON.parse(xobj.responseText);
				fillText();
			};
		};
		xobj.send(null);
	};
	const fillText = function(){
		const header = document.querySelector("h2");
		const bulletsArr = document.querySelectorAll("li");
		header.innerHTML = jsonObj.heading;
		bulletsArr.forEach((element, index)=>{
			element.innerHTML = jsonObj.bullets[index];
		});
	};
	loadJSON('data.json');

	return nsp;
})(MAINAPP || {});
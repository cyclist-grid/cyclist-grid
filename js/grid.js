window.addEventListener('load', function () { grid(); }, false);

function drawBaselineOnCanvas(canvas, lineHeight) {	
	var context = contextForCanvas(canvas);
	if (context) {
		// Border
		context.strokeStyle = "#f00";
		context.lineWidth = 1;
		context.strokeRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
		// Baseline
		context.strokeStyle = "#00f";
		
	}
}

function grid() {
	var baselineElements = document.getElementsByClassName("baseline");
	for (var i=0; i < baselineElements.length; i++) {
		var baselineElement = baselineElements[i];
		var canvas = canvasForElement(baselineElement);
        var lineHeight = window.getComputedStyle(baselineElement, null).getPropertyValue("line-height");
		drawBaselineOnCanvas(canvas, lineHeight);
	};
}

// Helpers

function contextForCanvas(canvas) {
	if (canvas && canvas.getContext) {
		return canvas.getContext('2d');
	}
}

function canvasForElement(element) {

	element.style.position = "relative";

	var canvas = document.createElement("canvas");

	// with jQuerty I could replace this http://stackoverflow.com/questions/1520132/how-to-find-actual-rendered-values-of-elements-set-to-auto-using-javascript
	canvas.setAttribute("width", element.offsetWidth);
	canvas.setAttribute("height", element.offsetHeight);

	// canvas.style.backgroundColor = "black";
	canvas.style.position = "absolute";
	canvas.style.left = "0";
	canvas.style.top = "0";

	element.appendChild(canvas);

	return canvas;
}
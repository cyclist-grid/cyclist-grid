window.addEventListener('load', function () { grid(); }, false);

function drawGoldenOnCanvas(canvas) {
	if (canvas && canvas.getContext) {
		var context = canvas.getContext('2d');
		if (context) {
			context.fillRect(0, 0, 150, 100);
		}
	}
}

// Function that returns a canvas for the designated element
// E.g.:
// function canvasForElement(element)

function grid() {
	var baselineTags = document.getElementsByClassName("baseline");
	for (var i=0; i < baselineTags.length; i++) {

		var baselineTag = baselineTags[i];
		var canvas = canvasForElement(baselineTag);
		// baselineTag.style.position = "relative";
		// 
		// var baselineCanvas = document.createElement("canvas");
		// baselineCanvas.style.width = "100%";
		// baselineCanvas.style.height = "100%";
		// // goldenCanvas.style.backgroundColor = "black";
		// baselineCanvas.style.position = "absolute";
		// baselineCanvas.style.left = "0";
		// baselineCanvas.style.top = "0";
		// 
		// baselineTag.appendChild(baselineCanvas);
		drawGoldenOnCanvas(canvas);
	};
}

// Helpers

function canvasForElement(element) {

	element.style.position = "relative";

	var canvas = document.createElement("canvas");
	canvas.style.width = "100%";
	canvas.style.height = "100%";
	// canvas.style.backgroundColor = "black";
	canvas.style.position = "absolute";
	canvas.style.left = "0";
	canvas.style.top = "0";

	element.appendChild(canvas);
	return canvas;
}
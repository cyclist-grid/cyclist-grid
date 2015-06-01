window.addEventListener('load', function () { setup(); }, false);

function setup() {
	// // Baseline
	// var elements = document.getElementsByClassName("baseline_old");
	// for (var i=0; i < elements.length; i++) {
	// 	var element = elements[i];
	// 	var canvas = canvasForElement(element);
  //       var lineHeight = window.getComputedStyle(element, null).getPropertyValue("line-height");
	// 	drawBaselineOnCanvas(canvas, lineHeight);
	// }

	elements = document.getElementsByClassName("baseline");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var container = containerForElement(element);
		showBaseline(container);
	}

}

function showBaseline(container) {
	container.style.height = "auto";
	container.style.width = "100%";

  var containerHeightInt = parseInt(window.getComputedStyle(container, null).getPropertyValue("height"));
	var parentHeightInt = parseInt(window.getComputedStyle(container.parentNode, null).getPropertyValue("height"));

	while (containerHeightInt < parentHeightInt) {
		// Add an element to contain the baseline
		var baselineElement = document.createElement("p");
		resetCSS(baselineElement);
		baselineElement.appendChild(document.createTextNode('\u00A0'));

		// Draw the baseline on a canvas element
		var canvas = document.createElement("canvas");
		baselineElement.style.position = "relative";
		canvas.setAttribute("width", 1);
		canvas.setAttribute("height", 1);
		canvas.style.position = "absolute";
		canvas.style.left = "0";
		canvas.style.bottom = "0";
		canvas.style.width = "100%";
		canvas.style.height = "1px";
		if (canvas && canvas.getContext) {
			context = canvas.getContext('2d');
			context.strokeStyle = "rgba(148, 235, 255, 0.5)";
			context.lineWidth = 1;
			context.strokeRect(0, 0, 1, 1);
		}
		baselineElement.appendChild(canvas);
		container.appendChild(baselineElement);
		containerHeightInt = parseInt(window.getComputedStyle(container, null).getPropertyValue("height"));
	}
}

// Helpers

function containerForElement(element) {
	var container = document.createElement("div");
	element.appendChild(container);
	makeContainer(container);
	return container;
}

function makeContainer(element) {
	var parent = element.parentNode;
	parent.style.position = "relative";

	var height = parent.offsetHeight;
	var width = parent.offsetWidth;

	element.setAttribute("width", width);
	element.setAttribute("height", height);
	element.style.width = width + "px";
	element.style.height = height + "px";
	element.style.position = "absolute";
	element.style.left = "0";
	element.style.top = "0";
}

function resetCSS(element) {
	element.style.border = 0;
	element.style.margin = "0";
	element.style.padding = "0";
	element.style.outline = "0";
	element.style.fontSize = "100%";
	element.style.verticalAlign = "baseline";
	element.style.background = "transparent";
}



// Canvas

// function drawBaselineOnCanvas(canvas, lineHeight) {
// 	var context = contextForCanvas(canvas);
// 	if (context) {
// 		var width = canvas.offsetWidth;
// 		var height = canvas.offsetHeight;
//
// 		// Border
// 		context.strokeStyle = "#f00";
// 		context.lineWidth = 1;
// 		context.strokeRect(0, 0, width, height);
// 		// Baseline
// 		context.strokeStyle = "#D7F1FF";
// 		var leading = parseInt(lineHeight);
// 		var lines = Math.floor(height / leading);
// 		for (var i = 0; i < lines; i++) {
// 			var y = (i + 1) * leading;
// 			context.moveTo(0, y);
// 			context.lineTo(width, y);
// 			context.stroke();
// 			context.closePath();
// 		}
// 	}
// }

// Canvas Helpers

// function contextForCanvas(canvas) {
// 	if (canvas && canvas.getContext) {
// 		return canvas.getContext('2d');
// 	}
// }
//
// function canvasForElement(element) {
// 	var canvas = document.createElement("canvas");
// 	element.appendChild(canvas);
// 	makeContainer(canvas);
// 	return canvas;
// }
//

window.addEventListener('load', function () { grid(); }, false);
function grid() {
	// Baseline
	var elements = document.getElementsByClassName("baseline");
	for (var i=0; i < elements.length; i++) {
		var element = elements[i];
		var canvas = canvasForElement(element);
        var lineHeight = window.getComputedStyle(element, null).getPropertyValue("line-height");
		drawBaselineOnCanvas(canvas, lineHeight);
	};

	var elements = document.getElementsByClassName("baseline2");
	for (var i=0; i < elements.length; i++) {
		var element = elements[i];
		var container = containerForElement(element);
		showBaseline(container);
	};

	// Grid
	// var gridElements = document.getElementsByClassName("grid");
	// for (var i=0; i < baselineElements.length; i++) {

}

function showBaseline(container) {
	container.style.height = "auto";

	// container.style.border = "1px solid green";

    var containerHeightInt = parseInt(window.getComputedStyle(container, null).getPropertyValue("height"));
	var parentHeightInt = parseInt(window.getComputedStyle(container.parentNode, null).getPropertyValue("height"));

	var baselineElement;
	while (containerHeightInt < parentHeightInt) {
		baselineElement = document.createElement("p");
		// baselineElement.style.position = "relative";
		baselineElement.style.borderBottom = "1px solid red";
		baselineElement.style.margin = "0";
		baselineElement.style.marginTop = "-1px";
		baselineElement.style.padding = "0";
		baselineElement.appendChild(document.createTextNode('\u00A0'));
		container.appendChild(baselineElement);



		containerHeightInt = parseInt(window.getComputedStyle(container, null).getPropertyValue("height"));
		console.log(containerHeightInt + " < " + parentHeightInt);
	}


	// baselineElement.style.position = "relative";
	// baselineElement.style.top = "-1px";
	// baselineElement.style.borderBottom = "1px solid red";
	// baselineElement.style.margin = "0";
	// baselineElement.style.padding = "0";
	// baselineElement.appendChild(document.createTextNode('\u00A0'));
	// container.appendChild(baselineElement);
	// 
	// baselineElement = document.createElement("p");
	// baselineElement.style.position = "relative";
	// baselineElement.style.top = "-1px";
	// baselineElement.style.margin = "0";
	// baselineElement.style.padding = "0";
	// baselineElement.style.borderBottom = "1px solid red";
	// baselineElement.appendChild(document.createTextNode('\u00A0'));
	// container.appendChild(baselineElement);

	// console.log(containerHeight);
	// console.log(parentHeight);
}

// Drawing
function drawBaselineOnCanvas(canvas, lineHeight) {	
	var context = contextForCanvas(canvas);
	if (context) {
		var width = canvas.offsetWidth;
		var height = canvas.offsetHeight
		
		// Border
		context.strokeStyle = "#f00";
		context.lineWidth = 1;
		context.strokeRect(0, 0, width, height);
		// Baseline
		context.strokeStyle = "#D7F1FF";
		var leading = parseInt(lineHeight);
		var lines = Math.floor(height / leading);
		for (var i = 0; i < lines; i++) {
			var y = (i + 1) * leading;
			context.moveTo(0, y);
			context.lineTo(width, y);
			context.stroke();
			context.closePath();
		};
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
	
	// console.log(parent + "width = " + parent.offsetWidth + " height = " + parent.offsetHeight);

	var height = parent.offsetHeight;
	var width = parent.offsetWidth;

	element.setAttribute("width", width);
	element.setAttribute("height", height);
	element.style.width = width + "px";
	element.style.height = height + "px";
	element.style.position = "absolute";
	element.style.left = "0";
	element.style.top = "0";

	// console.log(element + "width = " + element.style.width + " height = " + element.style.height);
}

// Canvas Helpers
function contextForCanvas(canvas) {
	if (canvas && canvas.getContext) {
		return canvas.getContext('2d');
	}
}

function canvasForElement(element) {
	var canvas = document.createElement("canvas");
	element.appendChild(canvas);
	makeContainer(canvas);
	return canvas;
}
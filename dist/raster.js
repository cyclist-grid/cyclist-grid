var Raster = {
	baselineHelper: {
		setup: function() {
			var showBaselineElements = document.getElementsByClassName("show-baseline");
			for (var i = 0; i < showBaselineElements.length; i++) {
				var baselineElement = showBaselineElements[i];
				var baselineContainer = this.containerForElement(baselineElement);
				this.showBaseline(baselineContainer);
			}
		},

		showBaseline: function(container) {
			container.style.height = "auto";
			container.style.width = "100%";

			var containerHeightInt = parseInt(window.getComputedStyle(container, null).getPropertyValue("height"));
			var parentHeightInt = parseInt(window.getComputedStyle(container.parentNode, null).getPropertyValue("height"));

			while (containerHeightInt < parentHeightInt) {
				// Add an element to contain the baseline
				var baselineElement = document.createElement("p");
				this.resetCSS(baselineElement);
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
		},

		// Helpers

		containerForElement: function(element) {
			var container = document.createElement("div");
			element.appendChild(container);
			this.makeContainer(container);
			return container;
		},

		makeContainer: function(element) {
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
		},

		resetCSS: function(element) {
			element.style.border = 0;
			element.style.margin = "0";
			element.style.padding = "0";
			element.style.outline = "0";
			element.style.fontSize = "100%";
			element.style.verticalAlign = "baseline";
			element.style.background = "transparent";
		}
	},

	guidelineHelper: {
		setup: function() {
			var showGuidelinesElements = document.getElementsByClassName("show-guidelines");
			for (var j = 0; j < showGuidelinesElements.length; j++) {
				var guidelinesElement = showGuidelinesElements[j];
				var guidelinesContainer = this.containerForElement(guidelinesElement);
				this.showGuidelines(guidelinesContainer);
			}
		},
		showGuidelines: function(container) {

		}

	},

	setup: function() {
		this.baselineHelper.setup();
		this.guidelineHelper.setup();
	}
};

window.addEventListener('load', function () { Raster.setup(); }, false);

// TODO: Iterate over every child of the `#content` and display it's height, margins, and padding

describe('Raster basic', function() {
  describe('a Mocha example', function() {
    it('the header should equal its text', function () {

      var contentElement = document.getElementById('content');
      // var childNodes = contentElement.childNodes;
      var childNodes = contentElement.querySelectorAll('*');

      for (var i = childNodes.length - 1; i >= 0; --i) {
      	var element = childNodes[i];
        console.log("element.id = " + element.id);
        console.log("element.clientHeight = " + element.clientHeight);
        var style = window.getComputedStyle(element);
        console.log("style.lineHeight = " + style.lineHeight);
        console.log("style.marginBottom = " + style.marginBottom);

      }
    });
  });
});

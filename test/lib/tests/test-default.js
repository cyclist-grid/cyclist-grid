describe('Raster default', function() {
  describe('The default style', function() {
    it('should set heights and margins that are multiples of the leading', function () {

      var contentElement = document.getElementById('content');
      var nodeList = contentElement.querySelectorAll('*');

      for (var i = nodeList.length - 1; i >= 0; --i) {
      	var element = nodeList[i];
        console.log("element.id = " + element.id);
        console.log("element.clientHeight = " + element.clientHeight);
        var style = window.getComputedStyle(element);
        console.log("style.lineHeight = " + style.lineHeight);
        console.log("style.marginBottom = " + style.marginBottom);
        var total = element.clientHeight + parseFloat(style.marginBottom, 10);
        console.log("total = " + total);
      }
    });
    // TODO: All height and margin values should be whole integer values
  });
});

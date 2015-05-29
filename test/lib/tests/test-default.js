describe('Raster default', function() {
  describe('The default style', function() {
    it('should set heights and margins that are multiples of the leading', function () {

      var contentElement = document.getElementById('content');
      var nodeList = contentElement.querySelectorAll('*');

      for (var i = nodeList.length - 1; i >= 0; --i) {
      	var element = nodeList[i];
        testHelper.totalHeightForElement(element);
      }
    });
    // TODO: All height and margin values should be whole integer values
  });
});

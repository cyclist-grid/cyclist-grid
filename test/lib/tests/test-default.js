describe('Raster default', function() {
  describe('The default style', function() {

    var leading;
    beforeEach(function() {
      leading = testHelper.leading();
  	});
    it('should set heights and margins that are multiples of the leading', function () {
      var contentElement = document.getElementById('content');
      var nodeList = contentElement.querySelectorAll('*');

      for (var i = nodeList.length - 1; i >= 0; --i) {
      	var element = nodeList[i];
        var totalHeight = testHelper.totalHeightForElement(element);
console.log("element.id = " + element.id);
console.log("totalHeight = " + totalHeight);
console.log("leading = " + leading);
        totalHeight.should.be.above(0);
        var remainder = totalHeight % leading;
console.log("remainder = " + remainder);
        remainder.should.equal(0);
console.log("");
      }
    });
    // TODO: All height and margin values should be whole integer values
  });
});

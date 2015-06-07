describe('Raster default', function() {
  var leadingRems = 1.25;
  describe('The default style', function() {
    it('the baseline should be correct with the default font size', function () {
      var contentElement = document.getElementById('content');
      var htmlElement = document.getElementsByTagName("html")[0];
      var wholeNumberFontSizes = ["8px", "12px", "16px", "20px"];
      for (var i = 0; i < wholeNumberFontSizes.length; i++) {
        // Set the font size on the HTML Element
        var fontSize = wholeNumberFontSizes[i];
        htmlElement.style.fontSize = fontSize;

        // Assert that the font size has been set properly
        htmlElement.style.fontSize.should.equal(fontSize);
        var testElement = testHelper.testElement();
        var testClientHeight = parseInt(fontSize, 10) * leadingRems;
        testElement.clientHeight.should.equal(testClientHeight);

        // Run the baseline tests
        testHelper.baselineIsCorrect(contentElement);
      }
    });
  });
});

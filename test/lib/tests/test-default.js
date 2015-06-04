describe('Raster default', function() {
  describe('The default style', function() {
    it('the baseline should be correct with the default font size', function () {
      var contentElement = document.getElementById('content');
      var htmlElement = document.getElementsByTagName("html")[0];
      var wholeNumberFontSizes = ["8px", "12px", "16px", "20px"];
      for (var i = 0; i < wholeNumberFontSizes.length; i++) {
        // TODO: Confirm that the font-size has changed by asserting the returned value of the style property
        // TODO: Confirm that the font-size has changed by asserting the `clientHeight` of an element

        htmlElement.style.fontSize = wholeNumberFontSizes[i];
        testHelper.baselineIsCorrect(contentElement);
      }
    });
  });
});

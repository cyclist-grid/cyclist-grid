describe('Cyclist default', function() {
  var defaultLeadingRems = 1.25;
  describe('The default style', function() {
    it('the baseline and layout should be correct', function () {
      var baselineElement = document.getElementById('baseline');
      var layoutElement = document.getElementById('layout');
      var htmlElement = document.getElementsByTagName("html")[0];
      var wholeNumberFontSizeStyles = ["8px", "12px", "16px", "20px"];
      for (var i = 0; i < wholeNumberFontSizeStyles.length; i++) {
        // Set the font size on the HTML Element
        var fontSizeStyle = wholeNumberFontSizeStyles[i];
        var fontSize = parseFloat(fontSizeStyle, 10);
        htmlElement.style.fontSize = fontSizeStyle;

        // Test that the font size has been set properly
        htmlElement.style.fontSize.should.equal(fontSizeStyle);
        var testElement = testHelper.testElement();
        var testClientHeight = fontSize * defaultLeadingRems;
        testElement.clientHeight.should.equal(testClientHeight);

        // Run the baseline tests
        testHelper.baselineIsCorrect(baselineElement);

        // Test that the gutter width is equal to the leading
        var gutterOffset = testHelper.gutterOffset();
        gutterOffset.should.equal(testClientHeight);

        // Run the layout tests
        testHelper.layoutIsCorrect(layoutElement);
      }
      Cyclist.redraw();
    });
  });
});

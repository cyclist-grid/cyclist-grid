describe('Raster default', function() {
  describe('The default style', function() {
    it('the baseline should be correct with the default font size', function () {
      var contentElement = document.getElementById('content');
      testHelper.baselineIsCorrect(contentElement);
    });
  });
});

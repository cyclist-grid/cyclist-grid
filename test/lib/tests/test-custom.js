describe('Raster custom', function() {
  describe('The custom style', function() {
    it('the baseline should be correct', function () {
      var contentElement = document.getElementById('content');
      testHelper.baselineIsCorrect(contentElement);
    });
  });
});

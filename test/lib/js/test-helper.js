var testHelper = {
  baselineIsCorrect: function(rootElement) {
    // The heights and margins should be multiples of the leading

    var leading = this.leading();

    var nodeList = rootElement.querySelectorAll('*');

    for (var i = nodeList.length - 1; i >= 0; --i) {
      var element = nodeList[i];
      var totalHeight = this.totalHeightForElement(element);
      if (!element.id) {
        // Only test items with an ID
        continue;
      }

      totalHeight.should.be.above(0);
      if (totalHeight < 1) {
        return false;
      }

      var remainder = totalHeight % leading;
      remainder.should.equal(0);
      if (remainder !== 0) {
        return false;
      }
    }

    return true;
  },

  leading: function() {
    var style = window.getComputedStyle(document.body);
    return parseFloat(style.lineHeight, 10);
  },

  totalHeightForElement: function(element) {
    var style = window.getComputedStyle(element);
    var computedHeight = element.clientHeight;
    computedHeight += parseFloat(style.marginTop, 10);
    computedHeight += parseFloat(style.marginBottom, 10);
    computedHeight += parseFloat(style.paddingTop, 10);
    computedHeight += parseFloat(style.paddingBottom, 10);
    computedHeight += parseFloat(style.borderTopWidth, 10);
    computedHeight += parseFloat(style.borderBottomWidth, 10);
    return computedHeight;
  },

  testElement: function() {
    var testElements = document.getElementsByTagName('li');
    var testElement = testElements[0];
    testElement.should.be.an('object');
    return testElement;
  }
};

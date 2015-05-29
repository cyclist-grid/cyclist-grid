var testHelper = {
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
  }
};

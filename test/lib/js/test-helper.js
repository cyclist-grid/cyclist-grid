var testHelper = {
  totalHeightForElement: function(element) {
    console.log("element.id = " + element.id);
    console.log("element.clientHeight = " + element.clientHeight);
    var style = window.getComputedStyle(element);
    console.log("style.lineHeight = " + style.lineHeight);
    console.log("style.marginBottom = " + style.marginBottom);
    var total = element.clientHeight + parseFloat(style.marginBottom, 10);
    console.log("total = " + total);
    return total;
  }
};

var jsdom = require('mocha-jsdom')
var assert = require('assert');
describe('All Raster tests', function() {
  ["../../test-default.html"].forEach(file => {
    describe(file, function() {
      jsdom.fromFile(file).then((dom) => {
        dom.window.mocha.run();
      });
    });      
  });
});
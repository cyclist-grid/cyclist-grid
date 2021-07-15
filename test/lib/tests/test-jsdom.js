const { JSDOM } = require('jsdom');
describe('All Raster tests', function() {
  ["../../test-default.html"].forEach(file => {
    describe(file, function() {
      JSDOM.fromFile(file).then((dom) => {
        dom.window.mocha.run();
      });
    });      
  });
});
const { JSDOM } = require('jsdom');
describe('All Raster tests', function() {
  ["../../test-default.html"].forEach(file => {
    describe(file, function() {
      it('should run without error', function(done) {
        JSDOM.fromFile(file).then((dom) => {
          console.log("got here");
          dom.window.mocha.run();
        })
        .then(done, done);  
      });
    });      
  });
});
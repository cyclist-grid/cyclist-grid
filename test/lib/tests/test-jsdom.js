const { JSDOM } = require('jsdom');
describe('All Raster tests', function() {
  ["test-default.html"].forEach(file => {
    const path = require('path').resolve(__dirname, '../../build/html', file);
    describe(file, function() {
      it('should run without error', function(done) {
        JSDOM.fromFile(path).then((dom) => {
          console.log("got here");
          dom.window.mocha.run();
        })
        .then(done, done);  
      });
    });      
  });
});
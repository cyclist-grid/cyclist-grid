const { JSDOM } = require('jsdom');
const path = require('path');
const url = require('url');
describe('All Raster tests', function() {
  ["test-default.html"].forEach(file => {
    const basePath = path.resolve(__dirname, '../../build/html');
    const filePath = path.resolve(basePath, file);
    const baseFileURL = url.pathToFileURL(basePath) + '/';
    describe(file, function() {
      it('should run without error', function(done) {
        JSDOM.fromFile(filePath, { resources: "usable", runScripts: "dangerously", url: baseFileURL }).then((dom) => {
          // dom.window.mocha.run();
        })
        .then(done, done);  
      });
    });      
  });
});
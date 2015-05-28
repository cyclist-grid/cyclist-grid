var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

// Paths
function makePaths(basePath) {
  var paths = {};
  var srcPath = path.join(basePath, 'src');
  var buildPath = path.join(basePath, 'build');
  paths.src = srcPath;
  paths.build = buildPath;
  // Sass
  paths.sass = {};
  paths.sass.src = path.join(srcPath, 'sass');
  paths.sass.build = path.join(buildPath, 'css');
  return paths;
}
var paths = {};
paths.examples = makePaths('example');
paths.test = makePaths('test');


// Sass

function doSass(srcPath, buildPath) {
  gulp.src(srcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath));
}

gulp.task('sass-examples', function () {
  doSass(paths.examples.sass.src + '/*.scss', paths.examples.sass.build);
});

gulp.task('sass-test', function () {
  doSass(paths.test.sass.src + '/*.scss', paths.test.sass.build);
});


// Watch

gulp.task('watch', function () {
  gulp.watch(paths.examples.sass.src + '/*.scss', ['sass-examples']);
  gulp.watch(paths.test.sass.src + '/*.scss', ['sass-test']);
});

gulp.task('sass', ['sass-examples', 'sass-test']);
gulp.task('default', ['sass']);

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');

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
  paths.sass.srcGlob = paths.sass.src + '/*.scss';
  // Jade
  paths.jade = {};
  paths.jade.src = path.join(srcPath, 'jade');
  paths.jade.build = path.join(buildPath, 'html');
  paths.jade.srcGlob = paths.jade.src + '/*.jade';

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
  doSass(paths.examples.sass.srcGlob, paths.examples.sass.build);
});

gulp.task('sass-test', function () {
  doSass(paths.test.sass.srcGlob, paths.test.sass.build);
});

// Jade

function doJade(srcPath, buildPath) {
  gulp.src(srcPath)
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(buildPath));
}

gulp.task('jade-test', function() {
  doJade(paths.test.jade.srcGlob, paths.test.jade.build);
});

// Watch

gulp.task('watch', function () {
  gulp.watch(paths.examples.sass.srcGlob, ['sass-examples']);
  gulp.watch(paths.test.sass.srcGlob, ['sass-test']);
  gulp.watch(paths.test.jade.srcGlob, ['jade-test']);
});

gulp.task('jade', ['jade-test']);
gulp.task('sass', ['sass-examples', 'sass-test']);
gulp.task('default', ['sass', 'jade']);

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

// Paths
var paths = {
    test: {
      src: './test/src/',
      build: './test/build/'
    },
    examples: {
      src: './examples/src/',
      build: './examples/build/'
    }
};


// Sass

gulp.task('sass-examples', function () {
  var srcPath = path.join(paths.examples.src, 'sass/*.scss');
  var buildPath = path.join(paths.examples.build, 'css');
  gulp.src(srcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath));
});


gulp.task('watch', function () {
  gulp.watch('./examples/src/sass/*.scss', ['sass']);
});

gulp.task('sass', ['sass-examples']);
gulp.task('default', ['sass']);
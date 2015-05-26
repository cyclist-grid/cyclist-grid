'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./examples/src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./examples/build/css'));
});

gulp.task('watch', function () {
  gulp.watch('./examples/src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
// devDependencies
const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const connect = require("gulp-connect");

// Built-in
const path = require("path");

// Paths
function sharedPaths(basePath) {
  var paths = {};
  paths.src = path.join(basePath, "src");
  paths.build = path.join(basePath, "build");
  // Sass
  paths.sass = {};
  paths.sass.src = path.join(paths.src, "sass");
  paths.sass.build = path.join(paths.build, "css");
  paths.sass.srcGlob = paths.sass.src + "/*.scss";

  return paths;
}
var paths = {};
// Examples
paths.examples = sharedPaths("examples");
// Test
paths.test = sharedPaths("test");
paths.test.lib = path.join("test", "lib");
// Pug Test
paths.test.pug = {};
paths.test.pug.src = path.join(paths.test.src, "pug");
paths.test.pug.build = path.join(paths.test.build, "html");
paths.test.pug.srcGlob = paths.test.pug.src + "/*.pug";
paths.test.pug.srcWatchGlob = paths.test.pug.src + "/**/*.pug";
// Dist
paths.dist = {};
paths.dist.sass = {};
paths.dist.sass.root = "dist";
paths.dist.sass.src = paths.dist.sass.root + "scss";
paths.dist.sass.srcGlob = paths.dist.sass.src + "/*.scss";
paths.dist.sass.build = paths.dist.sass.root + "css";
paths.dist.sass.srcWatchGlob = "dist/**/*.scss";

// Sass

function doSass(srcPath, buildPath) {
  return gulp
    .src(srcPath)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(buildPath));
}

gulp.task("sass-examples", function () {
  return doSass(paths.examples.sass.srcGlob, paths.examples.sass.build);
});

gulp.task("sass-test", function () {
  return doSass(paths.test.sass.srcGlob, paths.test.sass.build);
});

gulp.task("sass-dist", function () {
  return doSass(paths.dist.sass.srcGlob, paths.dist.sass.build);
});

// Pug

function doPug(srcPath, buildPath) {
  return gulp
    .src(srcPath)
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest(buildPath));
}

gulp.task("pug-test", function () {
  return doPug(paths.test.pug.srcGlob, paths.test.pug.build);
});

gulp.task("sass", gulp.parallel(["sass-examples", "sass-test", "sass-dist"]));

// Watch

gulp.task("watch", function () {
  gulp.watch(paths.dist.sass.srcWatchGlob, gulp.series("sass-dist"));

  var examplesSassPaths = [
    paths.dist.sass.srcWatchGlob,
    paths.examples.sass.srcGlob,
  ];
  gulp.watch(examplesSassPaths, gulp.series("sass-examples"));
  // Test sass
  var testSassPaths = [paths.dist.sass.srcWatchGlob, paths.test.sass.srcGlob];
  gulp.watch(testSassPaths, gulp.series("sass-test"));
  gulp.watch(paths.test.pug.srcWatchGlob, gulp.series("pug-test"));
});

gulp.task("pug", gulp.series("pug-test"));
gulp.task("default", gulp.parallel(["sass", "pug"]));
gulp.task("connect", function () {
  connect.server({
    livereload: true,
  });
});

gulp.task("serve", gulp.parallel(["connect", "watch"]));
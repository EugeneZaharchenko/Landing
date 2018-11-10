var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cnf         = require('../package.json').config;
var plumber     = require('gulp-plumber');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function () {
    return gulp.src(cnf.src.js)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())

        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cnf.dist.css));
});

gulp.task('js:watch', function () {
    gulp.watch('./src/js/**/*.*', ['js']);
});
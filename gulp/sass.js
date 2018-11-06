var gulp = require('gulp');
var sass = require('gulp-sass');
var cnf = require('../package.json').config;
// sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src(cnf.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cnf.dist.css));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
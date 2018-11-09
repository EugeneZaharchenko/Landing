var gulp = require('gulp');
var sass = require('gulp-sass');
var cnf = require('../package.json').config;
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano')
// sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src(cnf.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(cnf.dist.css));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.*', ['sass']);
});
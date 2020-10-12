'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/assets/scss/**/*.scss', (done) => {
        gulp.series(['sass'])(done);
    });
});

gulp.task('default', gulp.series(['sass:watch']));
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('./public/assets/css'))
				.pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', () => {
	browserSync.init({
		server: {
			baseDir: './public'
		}
	});

	gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('./public/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));

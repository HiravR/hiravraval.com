var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gulp_uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('he',function(){
	return console.log('hi');
});

gulp.task('build-min-css',function(){
	return gulp.src('static/scss/**/*.scss')
	.pipe(sass().on('erro',sass.logError))
	.pipe(concat('style.css'))
	.pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
	.pipe(gulp.dest('static/compiled/css'))
});

gulp.task('build-min-js',function(){
	return gulp.src('static/js/**/*.js')
				.pipe(concat('app.js'))
				.pipe(gulp_uglify())
				.pipe(gulp.dest('static/compiled/js'))

});

gulp.task('watch',function(){
	gulp.watch('static/scss/**/*.scss',gulp.series('build-min-css'));
	gulp.watch('static/js/**/*.js',gulp.series('build-min-js'));
});


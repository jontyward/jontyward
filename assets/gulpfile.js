var gulp = require('gulp'),
	concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {
	return gulp.src('js/_raw/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});
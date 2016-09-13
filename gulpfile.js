/*
* Dependencias
*/
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    sass = require('gulp-sass'),
    serve = require('gulp-serve');


gulp.task('sass', function() {
    gulp.src('sass/personal.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./style/'));
});

  //Watch task
gulp.task('default',function() {
    gulp.watch('sass/personal.scss',['sass']);
});

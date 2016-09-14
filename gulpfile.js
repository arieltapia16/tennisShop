/*
* Dependencias
*/
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    serve = require('gulp-serve'),
    browserSync = require('browser-sync').create();


gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./style/'));
});

gulp.task('serve', serve('')); //serve in localhost:3000
// gulp.task('livereload')

// gulp.task('serve', function() {
  // livereload.listen();

  // browserSync({
  //   server: {
  //     baseDir: '',
  //   },
  //  port: 8080
  // });
// })
  //Watch task
gulp.task('default',function() {
    gulp.watch('sass/personal.scss',['sass']);
});

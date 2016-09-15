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
    gulp.src('./public/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/style/'))
    .pipe(browserSync.reload({ //this reload the page when change sass
      stream: true
    }));
});


// Browser Sync task definition
gulp.task('serve', function() {
  return browserSync.init({
    server: {
      baseDir: 'public'
    },
  });
});


  //Watch task
gulp.task('default', ['serve'],function() {
    gulp.watch('./public/sass/**/*.scss',['sass']);
});

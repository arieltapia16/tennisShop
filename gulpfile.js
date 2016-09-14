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
    .pipe(gulp.dest('./style/'))
    .pipe(browserSync.reload({ //this reload the page when change sass
      stream: true
    }));
});

// gulp.task('serve', serve('')); //serve in localhost:3000
// gulp.task('livereload')

// Browser Sync task definition
gulp.task('serve', function() {
  return browserSync.init({
    server: {
      baseDir: ''
    },
  });
});

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
gulp.task('default', ['serve'],function() {
    gulp.watch('sass/personal.scss',['sass']);
});

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
gulp.task('sass-admin', function() {
    gulp.src('./admin/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./admin/style/'))
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
// Browser Sync task definition
gulp.task('serveAdmin', function() {
  return browserSync.init({
    server: {
      baseDir: 'admin'
    },
  });
});


  //Watch task
gulp.task('default', ['serve'],function() {
    gulp.watch('./public/sass/**/*.scss',['sass']);
});

//Watch task
gulp.task('admin', ['serveAdmin'],function() {
  gulp.watch('./admin/sass/**/*.scss',['sass-admin']);
});

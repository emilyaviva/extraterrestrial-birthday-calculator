'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');

gulp.task('lint', function() {
  return gulp
    .src(['app/**/*.js', 'models/**/*.json', './gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('copy', function() {
  return gulp
    .src('app/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  return gulp
    .src('app/sass/**/*.scss')
    .pipe(sass.sync()
      .on('error', sass.logError))
    .pipe(gulp.dest('build/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('app/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'copy']);

gulp.task('default', ['build']);

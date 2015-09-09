'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var bootlint = require('gulp-bootlint');

gulp.task('lint:js', function() {
  return gulp
    .src(['app/**/*.js', 'models/**/*.json', './gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:bootstrap', function() {
  return gulp
    .src('app/index.html')
    .pipe(bootlint());
});

gulp.task('copy', function() {
  return gulp
    .src(['app/**/*.html', 'app/js/**/*'])
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

gulp.task('lint', ['lint:js', 'lint:bootlint']);

gulp.task('build', ['sass', 'copy']);

gulp.task('default', ['build']);

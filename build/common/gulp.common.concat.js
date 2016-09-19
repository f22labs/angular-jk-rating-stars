(function() {
  'use strict';

  var gulp = require('gulp'),
    concat = require('gulp-concat'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

  gulp.task('concat-dev', function() {
    return gulp.src(['.tmp/scripts.js', '.tmp/templates.js'])
      .pipe(concat('angular-star-ratings.js'))
      .pipe(gulp.dest('dist'))
      .pipe(size());
  });

  gulp.task('concat-prod', function() {
    return gulp.src(['.tmp/scripts.js', '.tmp/templates.js'])
      .pipe(concat('angular-star-ratings.min.js'))
      .pipe(uglify({
        mangle: false
      }).on('error', gutil.log))
      .pipe(gulp.dest('dist'))
      .pipe(size());
  });

})();

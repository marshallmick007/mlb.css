'use strict';

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');

var config = {
  output: {
    css: 'dist'
  },
  src: {
    sass: 'src'
  }
};

gulp.task('default', ['styles']);

gulp.task('styles', function() {
  return (
    gulp
      .src(path.join(config.src.sass, 'mlb.scss'))
      .pipe(
        sass({
          style: 'compressed',
          loadPath: []
        })
      )
      .on('error', function(error) {
        if (error.message.indexOf('ENOENT') >= 0) {
          console.log('Looks like sass in not installed. Run `gem install sass`.');
        }
        console.log('sass error: ' + error.message);
      })
      //.pipe(autoprefix('last 2 version'))
      .pipe(gulp.dest(config.output.css))
  );
});

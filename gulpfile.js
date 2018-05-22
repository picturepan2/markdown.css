var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var autoprefix = new LessPluginAutoPrefix({ browsers: ["last 4 versions", "Explorer >= 10", "Firefox ESR"] });

gulp.task('watch', function() {
  gulp.watch('./**/*.less', ['build']);
});

gulp.task('build', function() {
  gulp.src(['markdown.less"','src/post.less'])
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
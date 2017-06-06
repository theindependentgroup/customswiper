const count = require('gulp-count');

const paths = {
  dest: 'assets/dist/fonts',
  src: 'assets/src/fonts/*'
};

module.exports = (gulp, shared) => {
  gulp.task('copy:fonts', () => {
    return gulp
      .src(paths.src)
      .pipe(gulp.dest(paths.dest))
      .pipe(gulp.dest(`_site/${paths.dest}`))
      .pipe(count('## Font file(s) copied'))
    });
};

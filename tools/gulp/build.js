const runSequence = require('run-sequence');

module.exports = (gulp, shared) => {
  gulp.task('build', (callback) => {
    runSequence(['sass', 'copy:fonts', 'jekyll:build'],
                'optimize:css',
                callback);
  });
};

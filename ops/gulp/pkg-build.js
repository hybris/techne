const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
let environment = require('../lib/environment');

const task = (cb) => {

    if (environment.production) {
        gulpSequence('pkg-clean', 'pkg-css', 'pkg-css-minify', cb)
    } else {
        gulpSequence('pkg-clean', 'pkg-css', cb)
    }

}

gulp.task('pkg-build', task);
module.exports = task;

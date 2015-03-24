

import gulp     from 'gulp'
import del      from 'del'
import config   from 'app/configs/gulp'



gulp.task('clean', (cb) => {
  del([config.scripts.dest], cb)
})

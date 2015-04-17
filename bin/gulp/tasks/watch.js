

import gulp    from 'gulp'
import config  from '../config'
import path    from 'path'
import watch   from 'gulp-watch'


gulp.task('watch', function () {
  gulp.watch(config.styles.watch, ['styles'])
})


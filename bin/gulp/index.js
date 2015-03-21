

import gulp         from 'gulp'
import sequence     from 'run-sequence'
import clean        from './tasks/clean'
import bundle       from './tasks/bundle'


gulp.task('dev', (cb) =>
  sequence(
    'clean'
    , ['bundle']
    , cb
  )
)

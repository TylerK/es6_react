

import gulp         from 'gulp'
import sequence     from 'run-sequence'
import clean        from './tasks/clean'
import bundle       from './tasks/bundle'
import styles       from './tasks/styles'


gulp.task('dev', (cb) => {
  sequence(
    'clean'
    , ['bundle', 'styles']
    , cb
  )
})

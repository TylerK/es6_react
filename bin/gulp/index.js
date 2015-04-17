

import gulp         from 'gulp'
import sequence     from 'run-sequence'
import clean        from './tasks/clean'
import bundle       from './tasks/bundle'
import styles       from './tasks/styles'
import sync         from './tasks/sync'
import server       from './tasks/server'
import watch        from './tasks/watch'


gulp.task('dev', (cb) => {
  sequence(
    'clean'
    , ['bundle', 'styles', 'sync', 'server', 'watch']
    , cb
  )
})

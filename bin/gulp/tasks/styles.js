

import gulp         from 'gulp'
import config       from '../config'
import stylus       from 'gulp-stylus'
import nib          from 'nib'
import lost         from 'lost'
import rupture      from 'rupture'
import sync         from 'browser-sync'
import typographic  from 'typographic'


gulp.task('styles', () => {

  let reload = sync.reload

  return gulp.src(config.styles.src)
    .pipe(stylus({
      use: [
        nib(),
        rupture(),
        lost(),
        typographic()
      ],
      sourcemap: { inline: true },
      compress: false,
      linenos: false
    }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(reload({ stream: true }))
})



import gulp     from 'gulp'
import config   from '../config'
import stylus   from 'gulp-stylus'
import nib      from 'nib'
import jeet     from 'jeet'
import rupture  from 'rupture'
import sync     from 'browser-sync'




gulp.task('styles', () => {

  const reload = sync.reload

  return gulp.src(config.styles.src)
    .pipe(stylus({
      use: [nib(), jeet(), rupture()]
      , sourcemap: { inline: true }
      , compress: false
      , linenos: false
    }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(reload({ stream: true }))
})

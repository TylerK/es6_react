

import path         from 'path'
import gulp         from 'gulp'
import _            from 'lodash'
import transform    from 'vinyl-transform'
import source       from 'vinyl-source-stream'
import browserify   from 'browserify'
import watchify     from 'watchify'
import babelify     from 'babelify'
import reactify     from 'reactify'
import util         from 'gulp-util'
import sync         from 'browser-sync'
import config       from 'app/configs/gulp'




gulp.task('bundle', () => {

  const reload = sync.reload

  const args = {
    entries       : config.scripts.src,
    globals       : true,
    transform     : ['babelify', 'reactify'],
    extensions    : ['.jsx'],
    debug         : true,
    cache         : {},
    packageCache  : {},
    fullPaths     : true
  }

  const bundler = watchify(browserify(args))

  const rebundle = function () {

    util.log(util.colors.cyan('Bundling', util.colors.white('->'), config.scripts.name))

    return bundler
      .bundle()
      .on('error', () => {
        util.log(util.colors.cyan(error.message))
        this.end()
      })
      .pipe(source(config.scripts.name))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(reload({ stream: true }))
  }

  bundler.on('update', rebundle)
  return rebundle()

})

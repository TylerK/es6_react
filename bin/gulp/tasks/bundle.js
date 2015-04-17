

import path         from 'path'
import gulp         from 'gulp'
import transform    from 'vinyl-transform'
import source       from 'vinyl-source-stream'
import browserify   from 'browserify'
import watchify     from 'watchify'
import babelify     from 'babelify'
import util         from 'gulp-util'
import notify       from 'gulp-notify'
import sync         from 'browser-sync'
import config       from '../config'


gulp.task('bundle', () => {

  const start = Date.now()
  const name = config.scripts.name
  const reload = sync.reload
  const args = {
    entries:      config.scripts.src,
    debug:        true,
    cache:        {},
    packageCache: {},
    fullPaths:    true
  }

  const bundler = watchify(browserify(args).transform(babelify))

  const rebundle = function () {

    util.log(util.colors.cyan('Bundling', util.colors.white('->'), name))

    return bundler
      .bundle()
      .on('error', function (error) {
        util.log(util.colors.cyan(error.message))
        this.emit('end')
      })
      .pipe(source(name))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(reload({ stream: true }))
      .pipe(notify(function () {
        util.log(util.colors.cyan('Finished', util.colors.white(name), 'in:', util.colors.white((Date.now() - start) + 'ms')))
      }))
  }

  bundler.on('update', rebundle)
  return rebundle()

})

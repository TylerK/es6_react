

import gulp from 'gulp'
import sync from 'browser-sync'



gulp.task('sync', () => {
  const args = {
    proxy       : 'http://localhost:9999'
    , port      : 3000
    , logLevel  : 'info'
    , open      : false
    , ghostMode : {
      clicks    : true
      , scroll  : true
      , forms   : true
    }
  }
  sync(args)
})

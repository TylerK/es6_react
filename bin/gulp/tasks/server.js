

import gulp from 'gulp'
import server from 'gulp-express'


gulp.task('server', () => {
  server.run(['bootstrap.js'])
})

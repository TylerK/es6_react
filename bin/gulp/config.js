

import path from 'path'


const config = {
  src: path.resolve('src'),
  dest: path.resolve('dist'),

  scripts : {
    src:    path.resolve('src', 'index.jsx'),
    watch:  path.resolve('src', '**/*.jsx'),
    dest:   path.resolve('dist', 'scripts'),
    name:   'bundle.js'
  },

  styles  : {
    src:    path.resolve('src/styles', 'app.styl'),
    watch:  path.resolve('src/styles', '**/*.styl'),
    dest:   path.resolve('dist', 'styles'),
    name:   'app.css'
  }
}

export default config



import path from 'path'



const config = {
  scripts : {
    src   : './src/scripts/index.jsx',
    watch : './src/scripts/**/*',
    dest  : './dist/scripts/',
    name  : 'bundle.js'
  },
  styles  : {
    src   : './src/styles/index.style',
    watch : './src/styles/**/*',
    dest  : './dist/styles/',
    name  : 'app.css'
  }
}

export default config

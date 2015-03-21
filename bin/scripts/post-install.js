

var path          = require('path')
  , process       = require('child_process')
  , system        = require('fs')
  , rmdir         = require('rimraf')
  , chalk         = require('chalk')
  , webModules    = path.resolve(__dirname, '../../web_modules')
  , nodeModules   = path.resolve(__dirname, '../../node_modules')
  , app           = path.join(nodeModules, 'app') // rename 'app'



// Nuke existing ./node_modules/app_name/
rmdir.sync(app, function (err) {})

// All new spiffy ./node_modules/app_name/
system.mkdirSync(app, function (err) {})

// Symlink everything in ./web_modules/ to ./node_modules/app_name/
system.readdirSync(webModules).forEach(function (module) {
  var command = 'ln -s ' + path.join(webModules, module) + ' ' + path.join(app, module)
  process.exec(command, function(err){})
})

console.log(chalk.blue(webModules) + ' ' + chalk.white('<- successfully symlinked to ->') + ' ' + chalk.blue(app))

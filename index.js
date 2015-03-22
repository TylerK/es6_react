'use strict'


require('node-jsx').install({ extension: '.jsx' })

const express       = require('express')
    , http          = require('http')
    , path          = require('path')
    , app           = express()
    , server        = http.createServer()
    , port          = process.env.PORT || 9999



app.use(express.static(process.cwd() + '/dist'))
app.listen(port)
server.on('request', app)

server.on('listening', onListening)
function onListening () {
  console.log('Express server listening on port %s.', app.get('port'))
}

server.on('error', onError)
function onError (error) {
  throw error
}
server.listen(app.get('port'))


// Homepage
app.get('/', function (req, res) {
  res.render('pages/index', {})
})

require('node-jsx').install()

import express  from 'express'
import http     from 'http'
import path     from 'path'
import React    from 'react/addons'
import ReactApp from './src/routes'

const app       = express()
const server    = http.createServer()
const port      = 9999

app.listen(port)
server.on('request', app)

server.on('listening', onListening)
function onListening () {
  console.log('Express server listening on port %s.', port)
}

server.on('error', onError)
function onError (error) {
  throw error
}
server.listen(app.get('port'))


app.use(express.static(process.cwd() + '/dist'))
app.use(function(req, res, next) {
  var html = React.renderToString(<ReactApp />);
  res.send(html);
});



import express from 'express'
import http from 'http'
import path from 'path'
import React from 'react'

const ReactApp  = React.createFactory(require('./src/scripts/index.jsx'))
const app       = express()
const server    = http.createServer()
const port      = process.env.PORT || 9999

console.log(React.renderToString(ReactApp()))

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


app.use(express.static(process.cwd() + '/dist'))
app.get('*', function (req, res) {
  res.render(React.renderToString(ReactApp({})))
})

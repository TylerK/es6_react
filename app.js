// require('node-jsx').install()

import express  from 'express'
import IO       from 'socket.io'
import http     from 'http'
import path     from 'path'
import React    from 'react/addons'

const app       = express()
const server    = http.createServer()
const port      = 9999
const io        = IO(server)


//
// Express bits
//
app.listen(port)
server.on('request', app)
app.use(express.static(path.join(__dirname, 'dist')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Get the main route
app.get('/', function (req, res) {
  res.render('index.ejs');
})


//
// Socket.io bits
//
// var sendContacts = function (socket) {
//   fs.readFile('./src/data/contacts.json', 'utf8', function(err, contacts) {
//     contacts = JSON.parse(contacts)
//     socket.emit('contacts', contacts)
//   })
// }

// io.on('connection', function (socket) {
//   console.log('New client connected!')

//   socket.on('fetchContacts', function () {
//     sendContacts(socket)
//   })

//   socket.on('newContact', function (comment, callback) {
//     fs.readFile('./src/data/contacts.json', 'utf8', function(err, contacts) {
//       contacts = JSON.parse(contacts)
//       contacts.push(comment)
//       fs.writeFile('./src/data/contacts.json', JSON.stringify(contacts, null, 4), function (err) {
//         io.emit('contacts', contacts)
//         callback(err)
//       })
//     })
//   })
// })

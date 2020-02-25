const io = require('socket.io-client')

const socket = io("http://localhost:3000")

socket.on('broadcast', function(data) {
  console.log(data.msg)
})

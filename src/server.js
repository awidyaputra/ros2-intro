const io = require('socket.io')();

io.on('connection', client => {
  console.log('a user connected');
  client.on('subMessage', function(msg) {
    console.log(msg)
    io.sockets.emit('broadcast', msg)
  })
});

io.listen(3000);

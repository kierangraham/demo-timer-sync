var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('connection', { connect: 'ok' });

  socket.on('clock:start', function(data){
    io.sockets.emit("clock:tick", new Date());
  });

  socket.on('clock:stop', function(data) {
    io.sockets.emit("clock:stop", new Date());
  });
});
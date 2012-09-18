var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(process.env.PORT || 3000);

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

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 60);
});

io.sockets.on('connection', function (socket) {
  // clock:start
  socket.on('S', function(data){
    // clock:tick
    io.sockets.emit("T", new Date());
  });

  // clock:stop
  socket.on('P', function(data) {
    io.sockets.emit("P", new Date());
  });

  // refresh
  socket.on('R', function(data){
    io.sockets.emit("R", null);
  });
});
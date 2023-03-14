const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
});
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
      socket.on('sendMessage', (data) => {
        console.log(data, 'Du lieu nhan tu client');
        io.emit('sendMessageServer', "gui du lieu cho client")
      })
      socket.on('vote1', (data) => {
        io.emit('vote1', data)
      })
      socket.on('vote2', (data) => {
        io.emit('vote2', data)
      })
});

httpServer.listen(3000, () => {
    console.log('server started and listening on port ')
});
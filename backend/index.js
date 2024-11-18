const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

const socketIo = require("socket.io")(server, {
  cors: {
      origin: "*",
  }
});

socketIo.on("connection", (socket) => {
  console.log(`New client connected ${socket.id}`);

  socket.emit("getId", socket.id);

  socket.on("sendDataClient", function(data) {
    console.log('sendDataClient')
    console.log(data)
    socketIo.emit("sendDataServer", { data });
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
    console.log('Server is listening on 3000');
});
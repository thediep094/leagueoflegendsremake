require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const http = require("http").Server(app);
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_alert", data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
http.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

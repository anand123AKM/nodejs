const EventEmitter = require("events");
const event = new EventEmitter();
event.on("say my name", () => {
  console.log("Your name is Anand Kr. maurya");
});

event.emit("say my name");

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  // fs.readFile("input.txt", (err, data) => {
  //   res.write(data.toString());
  //   res.end();
  // });

  const rstream = fs.createReadStream("input.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening on port 8000");
});

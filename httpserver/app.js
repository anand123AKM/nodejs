const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi.json`, "utf-8");
  const obj = JSON.parse(data);

  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url == "/about") {
    res.write("About Page");
    res.end();
  } else if (req.url == "/userApi") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(data);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening on port 3000");
});

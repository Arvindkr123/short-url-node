const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${new Date().toLocaleString()} : ${
    req.url
  } : New Request Recived \n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        res.end("I am Arvind Kumar");
        break;
      default:
        res.end("404 page not found.!!");
    }
  });
});

server.listen(8000, () => {
  console.log("server started...");
});

const http = require("http");
const example = require("./example");

//create a server object:
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(example.hi()));
    } else if (req.url === "/latestStar") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(example.getLatestStarArticles()));
    } else {
      res.write("Invalid endpoint"); //write a response to the client
    }
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

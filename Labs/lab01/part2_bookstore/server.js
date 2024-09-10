const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } 
  else if (req.url === "/about") {
    res.write("about us");
    res.end();
  } 
  else if (req.url === "/contact") {
    res.write("contact us");
    res.end();
  } 
  else if (req.url === "/homepage") {
    res.write("home");
    res.end();
  } 
  else {
    res.write("page not found");
    res.end();
  }
});

server.listen(8000);

console.log("Listening to on port 8000");

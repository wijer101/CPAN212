const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, 'pages', 'homepage.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  } 
  else if (req.url === "/about") {
    const filePath = path.join(__dirname, 'pages', 'about.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  } 
  else if (req.url === "/contact") {
    const filePath = path.join(__dirname, 'pages', 'contact.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  } 
  else {
    // Serve 404 page for any unrecognized routes
    const filePath = path.join(__dirname, 'pages', '404.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  }
});

server.listen(8000);

console.log("Listening to on port 8000");


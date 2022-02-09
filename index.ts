const http = require('http');
const fs = require('fs');
import { Request, Response, NextFunction } from 'express';
const index = fs.readFileSync("index.html","utf-8")
const contact = fs.readFileSync("contact.html","utf-8")
const about = fs.readFileSync("about.html","utf-8")

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req:Request, res:Response) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url == "/"){
    res.statusCode = 200;
    res.end(index)
  }
  else if (req.url == "/About"){
    res.statusCode = 200;
    res.end(about)
  }
  else if (req.url == "/Contact"){
    res.statusCode = 200;
    res.end(contact)
  }
  else{
    res.statusCode = 404;
    res.end("Page not found")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


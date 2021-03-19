const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const homePage = fs.readFileSync('./public/index.html', 'utf-8');
    res.write(homePage);
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About page</h1>');
    res.end();
  } else if (req.url === '/contact-us') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Contact us page</h1>');
    res.end();
  } else if (req.url === '/api/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const product = { name: 'food flask', qty: 3 };
    res.write(JSON.stringify(product));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 page not found 😢😢</h1>');
    res.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
});

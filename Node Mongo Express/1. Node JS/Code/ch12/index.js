// Create Web Server - http Module
import http from 'http';

const server = http.createServer((req, res) => {
 res.setHeader('Content-Type', 'text/plain');
 res.end('Response from Server');
});

server.listen(8000, 'localhost', () => {
 console.log('Server Running at http://localhost:8000');
});

// const server = http.createServer((req, res) => {
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Response from Server 1');
// });

// const PORT = process.env.PORT || 8000;
// const HOST = 'localhost';

// server.listen(PORT, HOST, () => {
//  console.log('Server Running at http://localhost:8000');
// });
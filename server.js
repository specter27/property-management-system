const http = require('http');
//adding express app
const app = require('./app.js');
// const server = http.createServer((req,res) => {
//   res.end('Connected to Property management system Backend');
// });
const server = http.createServer(app);
// activating the server

server.listen(process.env.PORT|| 3000);
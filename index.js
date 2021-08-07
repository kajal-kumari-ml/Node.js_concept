const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello from another side');
})

server.listen(8000, "127.0.0.1", () => {
    console.log('liesting the port number');
});
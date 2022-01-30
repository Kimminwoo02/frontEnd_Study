const http = require('http');
const server = http.createServer();
const PORT = 3000; // 80 생략하고 사용할 수 있다.

server.listen(PORT, () => {
    console.log('server start');
})
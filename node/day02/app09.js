const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000; // 80 생략하고 사용할 수 있다.
const fs = require('fs');
const path = require('path');

server.listen(PORT, () => {
    //서버 대기중
    console.log('server start');
})


server.on('connection', (socket) => {
    // 클라이언트가 연결되면 동작
    console.log(`client 연결${socket.address}`);
})

server.on('request', (req, res) => {
    let userPath = path.join(__dirname, req.url);
    // ./index.html : localhost:3000
    // ./login.html : localhost:3000/login.html
    console.log(userPath);


    if (req.url === '/') {
        fs.readFile('index.html', (error, data) => {
            res.write(data);
            res.end();
        })
    } else if (req.url === '/login.html') {
        fs.readFile('login.html', (error, data) => {
            res.write(data);
            res.end();
        })
    }


})

server.on('exit', () => {
    console.log('서버 종료');
})
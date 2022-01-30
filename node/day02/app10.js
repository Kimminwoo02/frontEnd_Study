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
    //res.writeHead(200,{'Content=Type':'text/html; charset=utf-8'});
    //응답을 이미지로 하고싶다면??
    fs.readFile('./images/p.png', (error, data) => {
        // './images/shop.jpg'==data
        res.writeHead(200, { 'ContetntType': 'image/png' });
        res.write(data);
        res.end();
    })

})

server.on('exit', () => {
    console.log('서버 종료');
})
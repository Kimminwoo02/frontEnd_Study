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


const output = path.join(__dirname, './output.txt');
fs.writeFile(output, 'my data', (err, data) => {
    if (err) { console.log('Error' + err); }
})

server.on('request', (req, res) => {
    fs.mkdir('./views', (err) => {
        console.log('error');

    })
})
process.on('rmdir', () => {
    fs.rmdir('./views', err => {
        console.log('폴더삭제')
    })
})

setInterval(() => {
    process.emit('rmdir');
    // 정확하게 2초 후에 처리 되는 것은 아님!
    // 실행될 환경이 조성이 되면 실행이 된다.
}, 2000)

server.on('close', () => {
    console.log('서버 종료');
})
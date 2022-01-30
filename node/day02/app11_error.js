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


//오류 
const data = fs.readFile('./package.json', 'utf-8', (err, data) => {
    console.log(data);
})

const output = path.join(__dirname, './output.txt');
fs.writeFile(output, 'my data', (err, data) => {
    if (err) { console.log('Error' + err); }
})

server.on('request', (req, res) => {
    // 비동기 : 데이터를 읽는 동안 뒤에 있는 작업들이 멈춰 있어야 함
    // 동기 : 데이터를 읽어 들이는 동안 기다리지 않고 뒷 작업을 무조건 실행 (오류가 날수 있다.)
    const data = fs.readFile('./package.json', 'utf-8', (err, data) => {
        console.log(data);

    })

});



server.on('exit', () => {
    console.log('서버 종료');
})
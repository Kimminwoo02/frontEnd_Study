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

// //오류 
// const data = fs.readFile('../package.json', 'utf-8', (err, data) => {
//     console.log(data);
// })
const output = path.join(__dirname, './output.txt');
fs.writeFile(output, 'my data', (err, data) => {
    if (err) { console.log('Error' + err); }
})
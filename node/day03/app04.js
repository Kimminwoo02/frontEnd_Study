const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('server start' + PORT)
})

server.on('connection', (socket) => {
    console.log(socket.address);
})

const options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    headers: {}
}

// server 데이터 전송 방식 : get, post 
const req = http.get(options, res => {
    let resData = ''; // 데이터를 쓰기 위한 메모리 할당. 
    res.on('data', chunk => resData += chunk);

    res.on('end', () => {
        console.log(resData);
    })
})
server.on('error', error => console.log('ERROR' + error.message));

server.on('request', (req, res) => {
    console.log('client request');
})


options.headers['Content-Type'] = 'application/x-www-form-urlencoded'; // body에 넘어온 데이터를 가져올 수 있게 환경설정해주는 코드
req.data = 'q-acotr';
options.headers['Content-length'] = req.data.length;

req.write(req.data);
req.end();
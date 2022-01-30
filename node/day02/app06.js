const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000; // 80 생략하고 사용할 수 있다.
const fs = require('fs');

server.listen(PORT, () => {
    //서버 대기중
    console.log('server start');
})


server.on('connection', (socket) => {
    // 클라이언트가 연결되면 동작
    console.log(`client 연결${socket.address}`);
})



const resString = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1> 내가 만든 노드 서버 </h1>
    <div> 신기하지 않나요?</div>
</body>

</html>`


server.on('request', (req, res) => {
    console.log(req.url);
    res.write(resString)
    res.end();
    //전송 완료를 알려줌

})

server.on('close', () => {
    console.log('서버 종료');
})
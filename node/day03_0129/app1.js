const  http = require('http');
const  server = http.createServer();
const  PORT = process.env.PORT || 3000; 
// 80 생략하고 사용할 수 있음 
const  fs = require('fs'); 
const  path = require('path');
const { setInterval } = require('timers/promises');

server.listen(PORT, ()=>{ 
    //  서버 대기 중 
     console.log( 'server start');
})

server.on('connection', (socket)=>{ 
       // 클라이언트가 연결되면 동작
        console.log(`clinet 연결 ${socket}`)
})

server.on('request', (req, res)=>{
    fs.mkdir('./views', (err)=>{
        console.log( '폴더 생성');
    })
})

process.on( 'rmdir' , ()=>{ 
    fs.rmdir('./views', err => {
        console.log('폴더삭제')
    })
})

setInterval(()=>{
    process.emit('rmdir');
    // 정확하게 2초 후에 처리 되는 것은 아님 
    // 실행될 환경이 조성이 되면 실행 
}, 5000)

server.on('close', ()=>{
    console.log('서버 종료')
})
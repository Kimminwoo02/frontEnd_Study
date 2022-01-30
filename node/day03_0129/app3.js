const  http = require('http');
const  server = http.createServer();
const  PORT = process.env.PORT || 3000; 
// 80 생략하고 사용할 수 있음 
const  fs = require('fs'); 
const  path = require('path');

server.listen(PORT, ()=>{ 
    //  서버 대기 중 
     console.log( 'server start');
})

server.on('connection', (socket)=>{ 
       // 클라이언트가 연결되면 동작
        console.log(`clinet 연결 ${socket}`)
})
/*
const data = fs.readFile( '../package.json', 'utf-8', (err, data)=>{
    console.log(data);
})
*/

const data2 = fs.readFile( '../day02_0123/index.html', 'utf-8' , (err, data2)=>{
  console.log(data2);
  if(err){ console.log( 'Error' + err);}
})
console.log('먼저실행' );

server.on('close', ()=>{
    console.log('서버 종료')
})
// express 서버는 
// node  의 서버에 비해서 간략,
// path, get, post 라우팅 방법이 간단 

const express = require('express');
const app = express();
// const PORT = process.env.PORT || 3000; 
app.set( 'PORT', process.env.PORT || 3000 );

app.listen( app.get('PORT'),  ()=>{
  console.log('express server start' +  app.get('PORT'));
})

app.get('/', (req, res)=>{
     // res.send(200);
     res.status(200).send('hello express 한글도 맘대로 처리함, 정상처리');
     // 헤더 처리도 알아서 하고 
     // 코드 알아서 하고 
     // 
})
const ary = ['html', 'css', 'javascript', 'react'];
const obAry = [{ name:'kim', age:20, email:'jemicom'}, 
                { name:'park', age:33, email:'park@'}, 
                { name:'hong', age:23, email:'hong@'}
                ];

app.get('/ob', (req, res)=>{
      res.send( obAry);
})

app.get('/ary', (req, res)=>{
      res.send(ary);
})

app.get('/goods', (req, res)=>{
     res.send('<a href="/login">login하기</a>')
})

app.get('/login', (req, res)=>{
  res.send('<a href="/goods">goods로 가기</a>')
})

// express 경로 filter 기능이 없고
// localhost:3000/login?name=kim  => 페이지 확인할 때 
// localhost:3000/login/kim => 사용자 직접 확인 
app.get('/login/:name', (req, res)=>{
  /*
  for( let a = 0; a< obAry.length ; a++){
    if( req.params.name === obAry[a].name ){
       console.log( obAry[a]);
       res.status(200).send( obAry[a]);
    }else{
       //res.status(404).send('이름을 확인하세요.');
    }
  }
  
   for( let user of obAry){
        if( req.params.name === user.name ){
          console.log( user );
          res.status(200).send(user);
      }
   }
   */
   for( let user of obAry){
      const { name } = req.params; 
      // spread 연산자, 객체가 가지고 있는 속성을 직접 꺼내오는 방식 

      if( name === user.name ){
        console.log( user );
        res.status(200).send(user);
    }
  }
})

app.get('/*', (req, res)=>{
  res.status(404).send('<h1> 404 file not found </h1>')
})



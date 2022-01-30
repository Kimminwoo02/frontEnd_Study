// 현재 폴더 아래에 index.html, login.html 제작
const express = require('express');
const { rootRouter, loginRouter} = require('./route');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname +'/views')))
app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})

app.use('/', rootRouter);
//localhost:3000/
app.use('/login', loginRouter);
//localhost:3000/login.html

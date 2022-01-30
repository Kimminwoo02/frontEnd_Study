// 현재 폴더 아래에 index.html, login.html 제작
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname +'/views')))
app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})

const rootRouter = express.Router();
const loginRouter = express.Router();

// http://localhost:3000/  요청
rootRouter.use('/', async (req, res)=>{
    res.sendFile(req.url);   
})


loginRouter.use('/login', async (req, res)=>{
    console.log(req.url); //  
    res.sendFile( req.url);
    // http://localhost:3000/login.html
})
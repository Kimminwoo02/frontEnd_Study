// 현재 폴더 아래에 index.html, login.html 제작
const express = require('express');
const path = require('path');

const rootRouter = express.Router();
const loginRouter = express.Router();

rootRouter.get('/', async (req, res)=>{
    res.sendFile(req.url);   
})

loginRouter.get('/login', async (req, res)=>{
    res.sendFile(req.url);
})

exports.rootRouter = rootRouter;
exports.loginRouter = loginRouter;
const express = require('express');
const path = require('path');
const app = express();
app.set('PORT', process.env.PORT || 3000);

// path.join 효과적으로  
// const static = require('serve-static');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));
/*
http://localhost:3000/views/
http://localhost:3000/views/login.html
확장자 반드시 입력해야 함 
*/

app.listen( app.get('PORT'), ()=>{
    console.log('server start' , app.get('PORT'));
})

app.get('/', (req, res)=>{
    res.sendFile(req.url);
})

app.get('/login', (req, res)=>{
    res.sendFile(req.url);
})
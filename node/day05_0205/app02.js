const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000; 
const path = require('path');

app.use(express.static(path.join(__dirname +'/')));
app.use( express.json());
app.use( express.urlencoded({extended:false}));

app.listen(port, ()=>{
   console.log( 'server start')
})

app.use((req, res, next)=>{
  // jQuery animate({ 속성:값}, 시간, 가속, 콜백)
  console.log(`${req.method} - ${req.url}`);
  next(); //
})


app.get('/', (req, res)=>{
  res.sendFile( req.url );
  // index.html
})

app.get('/login', (req, res)=>{
  res.sendFile( path.join(__dirname, '/login.html'));
})

const users = [];
app.get('/list', (req, res)=>{
    res.json( users );
})

app.post('/login',  (req, res)=>{
    res.json( req.body);
    users.push(req.body);
})
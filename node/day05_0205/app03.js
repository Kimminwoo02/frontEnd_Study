const express = require('express');
const app = express();
const port = 3000; 
const path = require('path');

const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host:'127.0.0.1',
  user:'root',
  database:'study',
  password:'12345',
  connectionLimit:5
})

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
    //res.json( users );

    let conn; 
    try{
      conn =  pool.getConnection();
      const query = 'SELECT * FROM users';
      const rows =  conn.query( query );
      console.log(rows);
      res.json( rows);
    }catch(err){
      throw err;
    }finally{
        if(conn){
          conn.end();
        }
    }
})

app.post('/login',  (req, res)=>{
    res.json( req.body);
    users.push(req.body);
})
const express = require('express');
const app = express();
const port = 3000; 

app.use( express.json());
app.use( express.urlencoded({extended:false}));

app.listen(port, ()=>{
   console.log( 'server start')
})

app.get('/*', (req, res)=>{
  res.sendFile( __dirname );
  //res.send(200);
})
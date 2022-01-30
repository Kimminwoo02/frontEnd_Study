//express 서버는
// node 의 서버와 비교했을 때 간략하다.
// path, get, post 라우팅 방법이 간단

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('PORT', process.env.PORT || 3000)

app.listen(app.get('PORT'), () => {
    console.log('express server start', +app.get('PORT'))
})



const ary = ['html', 'css', 'javascript', 'react'];
const obary = [{
        name: 'kim',
        age: 20,
        email: 'jemicom1'
    },
    {
        name: 'park',
        age: 23,
        email: 'jemicom2'
    },
    {
        name: 'woo',
        age: 25,
        email: 'jemicom3'
    }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname, +req.url);
    // localhost:3000 
    // localhost:3000/index.html 
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname, +req.url + '.html');
    // localhost:3000 
    // localhost:3000/login

});

// npm install -s server-static 모듈 설치해서 사용할 때

const path = require('path');
const static = requore('server-static');

//const static = reqiure(server-static) ;
app.use(express.static(path.join(__dirname + '/views')));

app.get('/views', (req, res) => {
    res.sendFile(__dirname, +req.url);
    // localhost:3000 
    // localhost:3000/index.html 
});

app.get('/views/*', (req, res) => {
    res.sendFile(__dirname, +req.url + '.html');
    // localhost:3000 
    // localhost:3000/login

});


app.use(express.urlencoded({ extended: false }))
    //  get, post, 라우팅 까지 다 알아서 해준다
    // filter 기능은 없다. body 데이터를 인코딩 해준다.
app.post('/', (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(users);
    res.status(200).send('Create User');
})

app.post('/posts', (req, res) => {
    console.log(req.headers);
})
app.get('/*', (req, res) => {
    res.status(404).send('<h1>404 file not found</h1>')
})
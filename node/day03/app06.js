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


app.get('/', (req, res) => {
    // res.send(200);
    res.status(200).send('hello express 안녕!, 정상처리');
    // 헤더 처리도 알아서 하고
    // 코드 처리도 알아서 하고
    // path 
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

app.get('/login', (req, res) => {
    res.send('<a href="/goods">sgoods하기</a>')
})

app.get('/login/:name', (req, res) => {
    //res.send(`<h1>${req.params.name}님 안녕하세요 </h1>`)
    // for (let a = 0; a < obary.length; a++) {
    //     if (req.params.name === obary[a].name) {
    //         console.log(obary[a]);
    //         res.status(200).send(obary[0]);
    //     } else {
    //         res.status(404).send('이름을 확인하세요.');
    //     }
    // }

    // for (let user of obary) {

    //     if (req.params.name === user.name) {
    //         console.log(user);
    //         res.status(200).send(user);
    //     }
    // }


    for (let user of obary) {
        const { name } = req.params;
        // spread 연산자, 객체가 가지고 있는 속성을  직접 꺼내오는 방식
        if (name === user.name) {
            console.log(user);
            res.status(200).send(user);
        }
    }

})

// app.get('/ob', (req, res) => {
//     res.send(obary);
// })

// app.get('/ary', (req, res) => {
//     res.send(ary);
// })

// app.get('/goods', (req, res) => {
//     res.send('<a href="/logun">login하기</a>')
// })

// app.get('/login', (req, res) => {
//     res.send('<a href="/goods">goods하기</a>')
// })

// app.get('/*', (req, res) => {
//     res.status(404).send('<h1>404 file not found</h1>')
// })
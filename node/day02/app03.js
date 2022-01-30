//이벤트 : 사건 키보드, 마우스 눈에 보이는 동작
// 프로세서 : 끼리 데이터를 주고 받고 하기위한 동작
// on, remove, once

process.on('hello', () => {

    console.log('이벤트 발생');

})

setTimeout(() => {
    console.log('hello 이벤트 종료');
    process.emit('hello');
}, 5000);
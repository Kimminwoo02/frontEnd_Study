//node가 가지고 있는 자바스크립트 전역변수
console.log(__dirname);
console.log(__filename);
// 현재 실행하고 있는 파일 = 실행 + 프로세스 

// node 가 가지고 있는 자바스크립트 전역객체
let userProcess = process.env; // 
console.log(userProcess);
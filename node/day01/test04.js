const os = require('os');

console.log(`메모리 남은 용량${os.freemem()}`);
console.log(`메모리 전체 용량${os.totalmem()}`);
console.log(`호스트주소 ${os.hostname()}`);
console.log(`os  version ${os.version()}`);
console.log(`os 기본주소 ${os.homedir()}`);
console.log(`전역변수 ${os.dirname()}`);
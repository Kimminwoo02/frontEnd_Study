const path = require('path');

console.log(`${__filename}`);
console.log(`경로명 ${path.dirname(__filename)}`);
console.log(`파일명 ${path.basename(__filename)}`);
console.log(`확장자 ${path.extname(__filename)}`);
console.log(path.join(__dirname) + path.basename(__filename));


const userPath = ['foo', 'bar', 'baz/asdf', 'quux'];
const user = path.join(userPath);

console.log(userpath);
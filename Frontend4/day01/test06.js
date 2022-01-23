const path = require('path');

const userPath = ['foo', 'bar', 'baz/asdf', 'quux'];
console.log(path.join(`${userPath}`));

const userPath2 = userPath.split(path.seq);
// (경로표시)들 을 통합시켜주는 역할
console.log(`${userPath2}`);

// foo/bar/baz/asdf/quux 이런식으로 경로가 만들어진다.
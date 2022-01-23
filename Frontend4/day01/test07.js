var url = require('url');

//www.naver.com

var curURL = url.parse('www.naver.com');

var curStr = url.format(curURL);

// 객체 : 데이터 합을 찍는 도구
// 내장 객체 query string 사용
console.log(`주소 문자열 :${curStr}`)
console.dir(curStr);


var querystring = require('querystring');
var param = querystring.parse(curStr.query);
console.log('param', param);

console.log('요청파라미터', querystring.stringify())
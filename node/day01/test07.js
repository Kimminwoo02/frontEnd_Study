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


// URL 관련 메소드
//parse() : url 문자열을 입력하면 url 객체를 만든다 (format의 반대)
//format() : url 객체를 입력하면 url 문자열을 반환한다.
//resolve() : 상대 url을 절대 url 로 변경한다.
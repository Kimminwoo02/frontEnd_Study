'use strict'; // 엄격하게 사용하고 싶으면 선언하고 사용!
// js의 엄격한 문법을 지켜가며 사용하겠다는 의미.

let num = 10;
let name = 'kim';


// 변수 선언하지 않아도 use strict가 없으면 에러가 나지 않는다.

let Person = {
    num: 20,
    name: 'kim',

    //es5 규정 ,       es6 등등이 존재
    getNumber: function() {
        return this.num;
    },
    /*getNumber() {
        return this.num;
    }*/
}

Person.age = 20;
// 객체데이터를 동적으로 할당.
// 유지보수가 힘들고 프로젝트의 데이터 쓰임새등 확인이 어렵다

console.log(Person.num);
console.log(Person.name);
console.log(typeof Person);
console.log(Person.age);
console.log(Person['name']);
console.log(Person.getNumber());

// 객체, 함수, 배열


function nameReturn1() {
    return 'hong';
}
nameReturn1();

//위처럼 함수로 표현한 것은 호이스팅이 되지 않아서 에러가 난다
// 호이스팅 : 아래서 선언하고 위에서 사용하는 것
// 표현식
let nameReturn2 = function() {
    return 'hone';
}

nameReturn2();
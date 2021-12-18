# 자바스크립트

## 자바스크립트란?

- 인터프리터 : 한 줄 읽고, 한 줄 실행
- 공개된 언어
- 애니메이션(동적인 처리), 데이터를 동적으로 처리하기 위함

```
document.write('<div class='box'> box </div>');

```

## 01 자바스크립트 실행순서

```
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/reset.css">

    <style>

    </style>
    <script>
        console.log('hello javascript!!');
        document.write('html로 쓰기');
        // dom이 생성되기 전에 javascript를 실행하므로 dom을 사용하는 js코드인 경우 처리되지 않음
        // 여러개의 js 코드를 링크한 경우 처리속도도 느려진다.
    </script>

</head>

<body>
    <div class="box" id='idbox'> BOX </div>
    <script>
        console.log('javascript body write')
        document.getElementsByTagName('div')[0].style.color = 'red';
        document.getElementById('idbox').style.backgroundColor = 'green'
    </script>
</body>

</html>
```

## 자바스크립트 사용도

```

     자바스크립트 기능

1. 노드 환경, 브라우저 환경에서 실행되는 명령
2. html, css 함께 사용하여 동적인 처리
3. 문자, 숫자, 날짜(클래스) 등을 이용하여 데이터 처리
4. dom(document object model) => 브라우저를 조작한다.
5. form 처리를 할 수 있다.
6. animate 처리
7. 데이터(서버쪽 데이터와 클라이언트 데이터 송수신)를 처리



```

## 자바스크립트 데이터

- 숫자
- 문자
- undefind : 값을 설정하지 않음
- null : 값이 없음
- boolean : true, false
- NaN : 잘못된 연산

```

        let num = 10;
        console.log(num);
        console.log(200);

        let str = 'hello javascript';
        console.log(str);

        let boolData = true;
        console.log(boolData);
        console.log('True');
        console.log('True' === boolData);
        // 연산자 좌우가 같은 데이터인지 확인
        let num100;
        console.log('num100 = ', num100) // undefind

        let num200 = null;
        console.log('num100 = ', num100); //null

        // Null, undefind, 0 , Nan  = false 값으로 사용된다.
```

## 자바스크립트의 boolean데이터 타입

```
 let num;
        console.log('undefined = ', !undefined);
        num = null;
        console.log('null =', !!num)

        num = 0;
        console.log('0 =', !!num)

        num = 100;
        console.log('100=', !!num)
            // 0이외의 다른 숫자는 true

        num = 'hello';
        console.log('hello = ', !!num);

```

## 산술연산

```


 /*
     산술연산 : + - * /
 */
        console.log(`3+4=${3+4}`);
        console.log(`3-4=${3-4}`);
        console.log(`3*4=${3*4}`);
        console.log(`3/4=${3/4}`);
        console.log(`3%4=${3%4}`);

        // 나머지 연산
        // 5로 나눈 나머지 값의 종류  : 0 1 2 3 4
        // 10으로 나눈 나머자 값의 종류 : 0 1 2 3 4 5 6 7 8 9
        //  + 연산 : 문자열 결합연산으로도 사용
        let str = ' Hello ';
        let userName = '홍길동';
        console.log(str + " " + userName + "!!");

        //산술연산 후 연산의 결과는 임의의 어떤 수, 임의의 문자열
```

## 논리연산자

````


        //비교연산자 >,>,>=,<=, ==, !=, ===, !==
        // 비교 연산 후 연산의 결과는 true, false

        console.log(`3>4=${3>4}`);
        console.log(`3<4=${3<4}`);
        console.log(`3>=4=${3>=4}`);
        console.log(`3<=4=${3<=4}`);
        console.log(`3 == 4=${3 == 4}`);
        console.log(`3 != 4=${3!= 4}`);
        console.log(`4 === '4' =${4 === '4'}`);
        // 데이터 타입은 비교하지 않고 값을 비교 true


        console.log(`4 == '4' =${4 == '4'}`);
        // 데이터 타입도 비교하고 값도 비교 false
        console.log(`4 != '4' =${4 != '4'}`); //false
        console.log(`4 !== '4' =${4 !== '4'}`); //true

        //typeof 데이터타입을 확인할 수 있다.
        console.log(typeof 3);
        console.log(typeof '3');
        console.log(typeof [1, 2, 3])
        console.log(typeof
            function a() {
                return false;
            })
        console.log(typeof {
            name: 'kim'
        })
    ```

````

## 논리연산자

```

        //논리연산자 && || ! & |
        // 논리 연산 후  연산의 결과는 true, false
        // && 피연산자의 연산 결과가 모두 true 일때 ture;
        // || 피연산자의 연산 결과가 하나라도 True 면 ture
        console.log(`3+10>20 && 50<20  =${3+10>20 && 50<20}`);
        console.log(`ture && true =${true && true}`);
        console.log(`ture && false =${true && false}`);
        console.log(`false && ture =${false && true}`);
        console.log(`false && false =${false && false}`);
        // 첫번째 피연산자 값이 false 이면 이면 두번째 피연산자 값은 확인하지 않고 종료
        // 처리속도가 빨라진다.

        console.log(`0 && 3+10>20 =${!!(0 &&  3+10>20)}`);
        console.log(`0 && 3+10>20 =${0 &&  3+10>20}`);




        console.log(`ture || true =${true ||true}`);
        console.log(`ture || false =${true || false}`);
        console.log(`false || ture =${false || true}`);
        console.log(`false || false =${false || false}`);
        // 피연산자가 true 결과인 지점에서 연산종료
        // 처리속도가 빨라진다.

        console.log(`0 || 30+10>20 =${!!(0||  30+10>20)}`);
        console.log(`0 || 30+10>20 =${0 ||  'HELLO'}`);
        console.log(`0 || 30+10>20 =${'HELLO' && 0}`);
```

## 데이터 형변환

```
 //console.log();
        // alert()
        // confirm()
        //prompt()
        //
        // 자동 형변환
        let num = '20';
        console.log(`num type: ${typeof num}`);
        console.log(`num + 20 : ${num+20}`);
        console.log(`num > 20 : ${num>20}`);

        //문자를 숫자로 변경
        let intNumber = parseInt(10 / 3);
        console.log(intNumber)

        let userAge = parseInt(prompt('나이를 입력하세요.')); // '20' -> 20
        console.log(typeof userAge);
        console.log(parseInt(3.678342));
        console.log(parseInt(4.75632));
        console.log(userAge + 20);
```

## 조건문

```
  // 분기 제어문 if
        // if (조건식){ 조건식 == true 일때 처리할 일.......}
        // Else{ 조건식 == false 일때 처리할 일.......}
        // 조건식 ? true: false;
        let num = 50;
        if (num >= 50) {
            console.log('화이팅');
        } else {
            console.log('점프');
        }

        if (num >= 50) console.log('화이팅');
        else console.log('점프');

        //같은 결과가 나온다.

        let userAge = prompt('나이를 입력하세요.');
        if (userAge > 60) {
            console.log('복지제도를 활용하세요.')
        } else {
            console.log('')
        }

        // let jumsu = prompt('점수를 입력하세요. ');
        // // 학점 : >90, >= 80, >=70, >=60, 나머지
        // if (jumsu >= 90) console.log(`당신의 점수 ${jumsu} 는 A학점 입니다.`);
        // else if (jumsu >= 80) console.log(`당신의 점수 ${jumsu} 는 B학점 입니다.`);
        // else if (jumsu >= 70) console.log(`당신의 점수 ${jumsu} 는 C학점 입니다.`);
        // else if (jumsu >= 60) console.log(`당신의 점수 ${jumsu} 는 D학점 입니다.`);
        // else console.log(`당신의 점수 ${jumsu} 는 F학점 입니다.`);


        let jumsu = prompt('점수를 입력하세요. ');
        // 학점 : >90, >= 80, >=70, >=60, 나머지
        if (jumsu >= 90) console.log(`당신의 점수 ${jumsu} 는 A학점 입니다.`);
        else if (jumsu >= 80) console.log(`당신의 점수 ${jumsu} 는 B학점 입니다.`);
        else if (jumsu >= 70) console.log(`당신의 점수 ${jumsu} 는 C학점 입니다.`);
        else if (jumsu >= 60) console.log(`당신의 점수 ${jumsu} 는 D학점 입니다.`);
        else console.log(`당신의 점수 ${jumsu} 는 F학점 입니다.`);

        let grade = null;
        if (jumsu >= 90) grade = 'A';
        else if (jumsu >= 80) grade = 'B';
        else if (jumsu >= 70) grade = 'C';
        else if (jumsu >= 60) grade = 'D';
        else grade = 'F';
        let msg = `당신의 점수 ${jumsu} 는 ${grade}학점 입니다.`;
        console.log((msg))
```

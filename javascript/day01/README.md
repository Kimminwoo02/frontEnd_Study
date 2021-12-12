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

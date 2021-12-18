#증감연산자

```
 console.log('cat' && 'dog');

        console.log('cat' || 'dog');
        //++,-- 선행연산, 후행연산 단항연산이다.

        let a = 10;
        a++; // a = a +1
        console.log(a)
            ++a; // a = a + 1
        a = 8;
        console.log(a)
        let result1 = a++ > 10;
        console.log(result1, a) //9
        let result2 = ++a > 10;
        console.log(result2, a)
        console.log(++a) //11
        console.log(a++) //11
        console.log(a) //12

        console.log('========================')
        console.log(--a) // 11
        console.log(a--) // 11
        console.log(a) // 10

```

## 대입연산자.

```

     대입연산자 = += -= *= /= ....
        let a = 10;
        let b = 0
        b += a // b는 undefined  + 10

        console.log(b);
        b = 5;
        b -= a;
        console.log(b);

        console.log(b *= 5);
        console.log(b %= 5); //-0
        console.log((b %= 5) == 0);
        console.log((b %= 5) === 0);

        // 연산우선순위
        /*
        *, /, % 등등 먼저하고 +, - 이 다음
        >, <, >=, <=, ==, != 등 왼쪽이 먼저
        &&, ||, !
        ++,-- : 최우선순위
        후행이면 등호연산자보다 낮아진다.
        */
```

## 3항 연산

```
    // 조건연산자 ?  (조건) ? true: false
        /*


       */
        let result = confirm('값을 선택하세요.');
        //확인, 취소    버튼을 가지고 있고 확인은 true를 리턴
        //취소는 False를 리턴
        console.log(result);
        console.log(result ? '확인을 선택하셨군요' : '정말 선택하지 않으실건가요?')
        result = prompt('나이를 입력하세요.');

          console.log(result > 20 ? '입장' : '입장불가')
        console.log(`result type =${typeof result}`)
```

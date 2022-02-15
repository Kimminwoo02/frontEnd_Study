# SQL
# DDL( Data Defind Language  , 데이터 정의어)
- 데이터 베이스를 정의하는 언어로 데이터를 생성, 수정, 삭제하는 SQL
- schema, domain, table, view, index를 정의하거나 변경 또는 삭제하기 위한 명령어
- DB관리자나 설계자가 사용
   
|명령|기능|
|---|---|
|CREATE |데이터 베이스, 테이블등을 생성하는 역활|
|DROP|데이블을 삭제하는 역활|
|ALTER| 데이터베이스, 테이블을 구조변경하는 역활|
|TRUNCATE|데이블을 초기화 시키는 역활|

CREATE TABLE : 테이블 생성
ALTER TABLE : 테이블 구조 변경
DROP TABLE : 테이블 삭제
desc student; 테이블 필드 확인

# DML(Data Manipulation Language, 데이터 조작어)
- 데이터베이스 사용자가 응용프로그램이나 질의어를 통하여 저장된 데이터를 처리하는 언어로
작성한 테이블에 추가, 삭제, 수정, 조회하는 SQL

|명령|기능|
|---|---|
|INSERT|데이터를 조회하는 역활|
|SELECT|데이터를 삽입|
|UPDATE |데이터를 수정|
|DELETE|데이터를 삭제|

# DCL(Data Control Language, 데이터 제어어 )
- 데이터베이스에 접근하거나 객체에 권한을 주는등의 역할을 하는 SQL
- 데이터의 보안, 무결성, 데이터 회복, 병행 수행 제어 등을 정의 하는 언어
- 데이터 베이스 관리자가 DB를 관리하는 것이 목적 

|GRANT| 특정 데이터베이스 사용자에게 특정 작업에 대한 수행권한 부여|
|REVOKE| 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 권한을 박탈, 회수| 
|COMMIT| 트랜잭션의 작업을 취소 및 원래래 복구|
|ROLLBACK| 트랜잭션의 작업을 취소 및 원래대로 복구|
|GRANT| 특정 데이터베이스 사용자에게 특정 작업에 대한 수행권한 부여 |
|REVOKE| 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 권한을 박탈, 회수 |

# CRUD란? (Create,Read,Update,Delete)

# 데이터 베이스 사용 순위
https://db-engines.com/en/ranking
mysql 설치 : https://m.blog.naver.com/bjh7007/221829548634

## 1. mariadb 설치
 - url : https://mariadb.org/download/
 - 조금 기다리시면 download버튼이 나오는데 해당 버튼 클릭해서 다운로드
 - 설치하시면 됩니다.
 * 설치시 주의사항 !!!!! : 넥스트를 누르다 보면
  비밀번호 입력하는 곳이 나오는데 해당 비밀번호 반드시 외워야 하며
  하단에 utf-8 케릭터셋으로 설치하는 옵션이 있습니다.
  반드시 체크하시고 설치해야 하고 한글 안됩니다.
 - 설치시 데이터 베이스 생성 폴더 확인하면 다음 폴더에 생성됨 
   C:\Program Files\MariaDB 10.5\data
 - 데이터베이스 문제로 재설치 후 재부팅 안해도 됨 
 
## 2. HeidiSQL 사용 
 - 윈도우 바탕화면의  HeidiSQL 열면 아래와 같은 화면 나옴
 - 현재 커서의 쿼리문 실행은 ctrl+shift+F9 
 - 쿼리문 전체 실행은 F9
 - 블럭 지정된 쿼리문 실행은 ctrl + F9
   CREATE DATABASE study;
   입력 후 ; 앞으로 커서 이동 후 ctrl+shift+F9 
   쿼리문 실행은 ;; 사이를 실행하는 이유로  ; 앞으로 이동 후 실행 

 - 오타 없이 입력하였다면  왼쪽 스키마 창에서 F5(reflash) 하면 다음과 같은 창이 나오며 
   아래 output 창에 다음과 같은 메시지 출력 

### 데이터베이스 생성과 사용
```   
   CREATE DATABASE study;
   SHOW DATABASES;
   USE `study`;
``` 

   /* 영향 받은 행: 1  찾은 행: 0  경고: 0  지속 시간 1 쿼리: 0.000 초 */
 - C:\Program Files\MariaDB 10.5\data폴더 확인하면 study 폴더가 생성되어 있음 

### 테이블 생성 
```
   CREATE TABLE user_info(
    ui_num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ui_id VARCHAR(30) NOT null UNIQUE,
    ui_pwd VARCHAR(30) NOT null
    );

    CREATE TABLE USERS(
        username VARCHAR(255),
        password VARCHAR(255)
    )
    SHOW TABLES;

 ```   
    /* UNIQUE 유일키 지정, 이키값이 중복되면 데이터 입력이 안됨 */

### 데이터 입력 
```
   INSERT INTO user_info(ui_id, ui_pwd) values('test', 'test');

```  
    /* values속성에 복수형 s 주의 */

### 데이터 검색 
```
   SELECT * from user_info;
   SELECT NOW();
   describle users;

   DELETE from users; 
```
 - 위 명령어 실행 후 output 결과 
 /* 127.0.0.1 에 MariaDB (TCP/IP) 을(를) 통해 연결 중, 사용자 이름 "root", 암호 사용: Yes… */


# mariadb 모듈 설치
npm i mariadb -s

# mysql 모듈 설치
```
npm i mysql2 
// 로그인
mysql -u username -p

```

# 데이터 베이스
## 데이터 베이스 이해 
데이터베이스 : 테이블의 집함
테이블  : 엑셀 시트와 같은 구조 
레코드  : 정보의 집합, 한줄

## 관계형 데이터 베이스 다루기
1. 데이터베이스 연결 : 아이디, 비번 등을 가지고 연결
2. 테이블 생성 : create table 테이블명(속성 타입, 속성 타입)
3. 레코드 추가 : insert int 테이블명(속성, 속성) values ( '값' , 10)
4. 데이터 조회 : select 속성 from 속성 where 조건식

## 몽고디비
nosql 
관계형 데이터 베이스 테이블 -> 컬렉션
레코드 -> document 문서객체 { object 1개 }  


# npm init 
package.json을 만든다.
# npm i date-fns
날짜를 사용할 수 있는 모듈 
package-lock.json을 만든다.


# 뷰 템플릿 적용 ejs
뷰 : 눈에 보이는 부분으로 사용자에게 결과를 보여주기 위해 만든 파일로 
자바스크립트로 처리하기보다 웹문서를 미리 만들어  두고  사용하는 것이 좋음 
응답 웹문서의 기본 형태를 뷰템플릿 파일로 만들어 두고 사용함
뷰템플릿을 사용하면 웹문서의 기본 형태는 템플릿으로 만들어 두고 데이터베이스를 조회하여 템플릿의 적다아한 위치에 넣어 웹문서를 만듬, 이때 뷰 템플릿을 자동으로 생성후 응답을 보내는 역활을 뷰엔진이 함

모델 : 데이터를 제공하는 것으로 데이터베이스를 저장하거나 조회하는 함수
컨트롤러 : 처리되는 과정을 담당하는 것으로 사용자 요청을 처리하는 라우팅 함수 



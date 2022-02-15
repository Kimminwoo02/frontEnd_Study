CREATE DATABASE study;
USE study;

CREATE TABLE users(
		ui_num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
		ui_id VARCHAR(30) NOT NULL UNIQUE,
		ui_pwd VARCHAR(30), 
		ui_name VARCHAR(30), 
		ui_email VARCHAR(30),
		ui_credat DATE NOT NULL DEFAULT CURDATE()
);

SHOW DATABASES;
SHOW TABLES;

INSERT INTO users(ui_id, ui_email, ui_name) VALUES('test1', 'test1@', '김길동');
INSERT INTO users(ui_id, ui_email, ui_name) VALUES('test2', 'test2@', '홍길동');
INSERT INTO users(ui_id, ui_email, ui_name) VALUES('test3', 'test3@', '박길동');
SELECT * FROM users;


CREATE USER study@localhost IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'study'@localhost IDENTIFIED BY 'root';

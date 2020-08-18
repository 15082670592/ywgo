SET NAMES UTF8;
DROP DATABASE IF EXISTS yw;
CREATE DATABASE yw CHARSET=UTF8;
USE yw;

/**user信息**/
CREATE TABLE yw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),      
  gender INT 
);
INSERT INTO yw_user VALUES
(NULL,'彭杰forever','qaz102584','870697814@qq.com','15082670592','彭杰',1);
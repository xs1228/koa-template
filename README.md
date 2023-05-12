运行 npm start

## 用户身份校验

采取 jwt 非对称加密

## 判断接口参数是否缺失

const handleProps = require('../utils/handleProps');
const isErr = handleProps({orderPrice,addressId,businessId},ctx)
if (isErr) return

## 表结构

# 创建用户表执行 sql 语句

CREATE TABLE IF NOT EXISTS users (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL UNIQUE,
password VARCHAR(50) NOT NULL,
`active` INT NOT NULL DEFAULT 1 COMMENT '用户是否禁用（1 否，2 是）',
`phone_number` VARCHAR(11),
`email` VARCHAR(30),
createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

# 创建图片表执行 sql 语句

CREATE TABLE IF NOT EXISTS img (
id INT PRIMARY KEY AUTO_INCREMENT,
filename VARCHAR(100) NOT NULL UNIQUE,
mimetype VARCHAR(30),
size INT,
createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

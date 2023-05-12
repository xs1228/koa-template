const mysql = require('mysql2')
const config = require('./config')
console.log('当前数据库信息',config.MYSQL_HOST,config.MYSQL_PORT,config.MYSQL_DATABASE,config.MYSQL_USER,config.MYSQL_PASSWORD);

const connections = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD
})
console.log(connections.getConnection);

connections.getConnection((err,connection)=>{
    connection.connect((err)=> {
        if(err) {
            console.log("连接失败:",err);
        }else{
            console.log("数据库连接成功！");
        }
    })
})

module.exports = connections.promise()
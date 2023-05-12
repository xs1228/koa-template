const Connection = require("../app/database");

class UserService {
    async create(user) {
        const { name, password, email, phoneNumber } = user
        const statement = `INSERT INTO user (name,password,email,phone_number) VALUES (?,?,?,?);`

        const result = await Connection.execute(statement, [name,password,email,phoneNumber])
       
        return result[0]
    }

    async getUserByName(name) {

        const statement = `SELECT * FROM user WHERE name = ?;`
        const result =await Connection.execute(statement, [name])

        return result[0]
    }
    async getList(){
        const statement = `SELECT * FROM user WHERE active = 1;`
        const result =await Connection.execute(statement)
        return result[0]
    }
    async changeStatus(active, userId){
        const statement = `UPDATE user SET active = ? WHERE id= ?;`
        const result =await Connection.execute(statement,[active,userId])
        return result[0]
    }
}

module.exports = new UserService()
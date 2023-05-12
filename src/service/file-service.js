const connection = require('./../app/database');

class FileService {
  async createImg(filename, mimetype, size){
    const statement = `INSERT INTO img (filename, mimetype, size) VALUES (?, ?, ?);`
    const [result] = await connection.execute(statement,[filename, mimetype, size]);
    return result
  }

  async getImgById(uid){
    const statement = `SELECT * FROM img WHERE filename = ?;`
    const [result] = await connection.execute(statement,[uid]);
    return result[0]
  }

}

module.exports = new FileService();
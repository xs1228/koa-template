const fs = require("fs");
const createResult = require('../utils/createResult')
const fileService = require("../service/file-service");
const {
  IMG_PATH
} = require("../constants/file-path");

class FileController {
  async saveImg(ctx, next) {
    console.log(ctx.req.body,ctx.req.file);
    const { mimetype, filename, size } = ctx.req.file;
    try {
      const result = await fileService.createImg(
        filename,
        mimetype,
        size
      );
      ctx.body = createResult({uid:filename},'上传成功', 200);
    } catch (error) {
      console.log(error);
    }
  }

  async getImg(ctx, next) {
    const { uid } = ctx.params;
    let imgInfo;
    // 2.查询数据库
    try {
      imgInfo = await fileService.getImgById(uid);
    } catch (error) {
      console.log(error);
    }
    // 3.返回数据
    ctx.response.set("content-type", imgInfo.mimetype);
    ctx.body = fs.createReadStream(
      `${IMG_PATH}/${imgInfo.filename}`
    );
  }
}

module.exports = new FileController();

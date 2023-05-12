const Multer = require('koa-multer');
const { IMG_PATH } = require('../constants/file-path');

const upload =  Multer({
  dest: IMG_PATH
});

const handleSingleImg = upload.single('picture');//图片数组用commodityClassifyUpload.array方法

const handleArrayImg = upload.array('', 5)//参数名，数量


module.exports = {
  handleSingleImg,
  handleArrayImg
};
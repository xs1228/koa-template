const Router = require('koa-router');

const { handleSingleImg } = require('../middleware/file-middleware');
const fileController = require('../controller/file-controller');



const fileRouter = new Router({prefix:'/upload'});

fileRouter.post('/', handleSingleImg, fileController.saveImg );
fileRouter.get('/:uid', fileController.getImg);


module.exports = fileRouter;
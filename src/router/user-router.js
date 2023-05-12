const Router = require('koa-router')
const controller = require('../controller/user-controller')
const { verifyToken } = require('../middleware/auth-middleware');
const {verifyUser,handlePassword} = require('../middleware/user-middleware')


const userRouter = new Router({prefix:'/users'})


userRouter.post('/', verifyUser,handlePassword,controller.create)//创建用户
userRouter.get('/list' , verifyToken,controller.getList)//获取用户列表
userRouter.post('/status' , verifyToken,controller.changeStatus)//修改用户状态

module.exports = userRouter
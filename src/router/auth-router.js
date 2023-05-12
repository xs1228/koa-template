const Router = require('koa-router')

const authRouter = new Router()

const authController = require('../controller/auth-controller')
const { verifyLogin } = require('../middleware/auth-middleware')
authRouter.post('/login',verifyLogin,authController.login);

module.exports = authRouter
const errorType = require('../constants/error-types')
const service = require('../service/user-service')
const md5password = require('../utils/password-handle')
const verifyUser = async (ctx, next) => {
      //获取用户名密码
      const {name,password,email,phoneNumber} = ctx.request.body

      // 判断用户信息不能为空
  if (!name || !password || name === '' || password === '' || !email || !phoneNumber || email === '' || phoneNumber === '') {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
      } 
      
      const result = await service.getUserByName(name)
      // 判断用户是否已经存在
      if (result.length) {
        const error = new Error(errorType.USER_ALREADY_EXISTS)
        return ctx.app.emit('error', error,ctx)
      }
      await next()
}

// 用户密码加密
const handlePassword = async (ctx, next) => {
      const {password} = ctx.request.body
      ctx.request.body.password = md5password(password)

      await next()
}
module.exports = {
    verifyUser,
    handlePassword
}
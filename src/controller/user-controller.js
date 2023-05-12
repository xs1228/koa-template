const service = require('../service/user-service')
const createResult = require('../utils/createResult')

class UserController {

    async create(ctx, next) {
        // 获取用户请求传递的参数
        const user = ctx.request.body
       
        //查询数据
        const result = await service.create(user)
        ctx.status = 200
        //返回数据
        ctx.body = createResult({},'创建账号成功~',200)
    }
    async getList(ctx, next) {  
        //查询数据
        const result = await service.getList()
        const length = result.length
        ctx.status = 200
        //返回数据
        ctx.body = createResult({result,length},'获取用户列表成功~',200)
    }
    async changeStatus(ctx, next) {  
        const {userId, active} = ctx.request.body
        
        //查询数据
        const result = await service.changeStatus(active, userId)
        ctx.status = 200
        //返回数据
        ctx.body = createResult({},'修改用户状态成功~',200)
    }
}

module.exports = new UserController()
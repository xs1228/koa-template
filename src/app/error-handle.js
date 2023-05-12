const errorType = require('../constants/error-types')
const createResult = require('../utils/createResult')

const errorHandler = (error,ctx) => {
    let status, message;

    switch(error.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            message = '用户名或者密码不能为空'
            break;
        case errorType.USER_ALREADY_EXISTS:
            status = 409;
            message = '用户名存在'
            break;
        case errorType.USER_DOES_NOT_EXITS:
            status = 400;
            message = '用户名不存在'
            break;  
        case errorType.PASSWORD_IS_INCORRENT:
            status = 400;
            message = '密码错误'
            break;
        case errorType.USER_IS_CONT:
            status = 444;
            message = '用户被禁用'
            break;      
        case errorType.UNAUTHORIZATION:
            status = 401;
            message = '请先登录'
            break; 
        case errorType.CART_COMMODITY_NUMBER_IS_ERROR:
            status = 400;
            message = '操作商品数量超过上限'
            break;     
        default:
            status = 404;
            message = 'NOT FOUND'
    }

    ctx.status = status;
    ctx.body = createResult({},message,status);
}

module.exports = errorHandler
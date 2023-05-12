const Koa = require('koa')
const userParser = require('koa-bodyparser')
const errorHandler = require('./error-handle')
const useRoutes = require('../router')
const app = new Koa()

app.use(userParser())
useRoutes(app)
app.on('error', errorHandler)
module.exports  = app
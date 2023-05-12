const createResult = require('./createResult')

function handleProps(props,ctx) {
  const keyArr = Object.keys(props);
  const errorArr = []
  keyArr.forEach(key=>{
    if (!props[key]) {
      errorArr.push(key)
    }
  })
  const err = errorArr.toString()?`${errorArr.toString()}不能为空！`:''
  if (err) {
    ctx.body = createResult({},err,414)
  }
  return err!==''
}

module.exports = handleProps
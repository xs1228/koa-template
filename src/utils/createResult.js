function createResult(result,massage,status=200) {
  return {
    data: result,
    massage,
    status
  }
}

module.exports = createResult
const { 
  getUserInfo, 
  getIntroduce, 
  getNews 
} = require('../controller/info')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleInfoRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  //获取教师信息列表
  if (method === 'GET' && path === '/api/info/userInfo') {
    const t_id = req.query.t_id
    const result = getUserInfo(t_id)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取课程简介信息
  if (method === 'GET' && path === '/api/info/introduce') {
    const result = getIntroduce()
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取近期动态信息
  if (method === 'GET' && path === '/api/info/news') {
    const result = getNews()
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }
}

module.exports = handleInfoRouter
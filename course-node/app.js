const querystring = require('querystring')
const cors = require('cors')
const handleCourseRouter = require('./src/router/course')
const handleInfoRouter = require('./src/router/info')

const serverHandle = (req, res) => {

  //返回JSON格式
  res.setHeader('Content-type', 'application/json')

  //获取path
  const url = req.url
  req.path = url.split('?')[0]

  //解析query
  req.query = querystring.parse(url.split('?')[1])

  //处理course路由
  const courseResult = handleCourseRouter(req, res)
  if (courseResult) {
    courseResult.then(courseData => {
      res.end(
        JSON.stringify(courseData)
      )
    })
    return
  }

  //处理info路由
  const infoResult = handleInfoRouter(req, res)
  if (infoResult) {
    infoResult.then(infoData => {
      res.end(
        JSON.stringify(infoData)
      )
    })
    return
  }

  //未命中路由，返回404
  res.writeHead(404, {'Content-type': 'text/plain'})
  res.write('404 Not Found\n')
  res.end()
}

module.exports = serverHandle
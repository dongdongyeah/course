const {
  getCourseware,
  getVideo,
  getReference
} = require('../controller/course')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleCourseRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  //获取课件列表
  if (method === 'GET' && path === '/api/course/courseware') {
    const filename = req.query.filename || ''
    const result = getCourseware(filename)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取资料列表
  if (method === 'GET' && path === '/api/course/reference') {
    const filename = req.query.filename || ''
    const result = getReference(filename)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取视频列表
  if (method === 'GET' && path === '/api/course/video') {
    const filename = req.query.filename || ''
    const result = getVideo(filename)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }
}

module.exports = handleCourseRouter
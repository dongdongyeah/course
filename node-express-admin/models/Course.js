const _path = require('path')
const fs = require('fs')
const { UPLOAD_URL } = require('../utils/constant')

class Course {
  constructor(file, data) {
    if (file) {
      this.createCourseFromFile(file)
    } else {
      this.createCourseFromData(data)
    }
  }

  createCourseFromFile(file) {
    const {
      originalname,
      destination,
      filename,
      path,
      type
    } = file

    //文件后缀名
    const suffix = _path.extname(originalname)
    //原有路径
    const oldPath = path
    //新路径
    const newPath = `${destination}/${filename}${suffix}`
    //下载路径
    const url = `${UPLOAD_URL}/courseware/${filename}${suffix}`
    if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
      fs.renameSync(oldPath, newPath)
    }
    this.filename = filename // 文件名，可作为主键
    // this.path = `/courseware/${filename}${suffix}` // 文件相对路径
    // this.filePath = this.path
    this.originalname = originalname // 文件的原名
    this.url = url //文件下载路径
  }
  createCourseFromData(data) {
    this.title = data.title // 标题
    this.speaker = data.speaker // 主讲人
    this.content = data.content // 相关内容
    this.originalname = data.originalname
    this.destination = data.destination
    this.filename = data.filename
    this.username = data.username
    this.url = `${UPLOAD_URL}/${data.type}/${this.filename}${_path.extname(this.originalname)}`
    this.createDt = new Date().toLocaleString()
    this.type = data.type
  }

  reset() {
    let suffix = _path.extname(this.originalname)
    let result = `${this.destination}/${this.filename}${suffix}`
    fs.unlinkSync(result)
  }
}

module.exports = Course
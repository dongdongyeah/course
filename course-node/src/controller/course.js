const { exec } = require('../db/mysql')

const getCourseware = (filename) => {
  let sql = `select * from course_file where type='courseware'`
  if (filename) {
    sql += `and filename='${filename}'`
  }
  return exec(sql)
}

const getVideo = (filename) => {
  let sql = `select * from course_file where type='video'`
  if (filename) {
    sql += `and filename='${filename}'`
  }
  return exec(sql)
}

const getReference = (filename) => {
  let sql = `select * from course_file where type='reference'`
  if (filename) {
    sql += `and filename='${filename}'`
  }
  return exec(sql)
}

module.exports = {
  getCourseware,
  getReference,
  getVideo
}
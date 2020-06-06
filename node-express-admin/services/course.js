const Course = require('../models/Course')
const db = require('../db')
const { debug } = require('../utils/constant')

function exists(course) {
  const { originalname } = course
  const sql = `select * from course_file where originalname='${originalname}'`
  return db.queryOne(sql)
}

async function removeCourse(course) {
  if (course) {
    course.reset()
    if (course.filename) {
      const removeCourseSql = `delete from course_file where filename='${course.filename}'`
      await db.querySql(removeCourseSql)
    }
  }
}

function insertCourse(course) {
  return new Promise(async (resolve, reject) => {
    try {
      if (course instanceof Course) {
        const result = await exists(course)
        if (result) {
          await removeCourse(course)
          reject(new Error('文件已存在'))
        } else {
          await db.insert(course, 'course_file')
          resolve()
        }
      } else {
        reject(new Error('添加的文件对象不合法'))
      }
    } catch (e) {
      reject(e)
    }
  })
}

function getCourse(filename) {
  return new Promise(async (resolve, reject) => {
    const courseSql = `select * from course_file where filename='${filename}'`
    const course = await db.queryOne(courseSql)
    resolve(course)
  })
}

async function listCourse(type) {
  let courseSql = `select * from course_file where type='${type}'`
  const list = await db.querySql(courseSql)
  return { list }
}

async function deleteCourse(filename) {
  return new Promise(async (resolve, reject) => {
    let course = await getCourse(filename)
    if (course) {
      const courseObj = new Course(null, course)
      const sql = `delete from course_file where filename='${filename}'`
      await db.querySql(sql).then(() => {
        courseObj.reset()
        resolve()
      })
    } else {
      reject(new Error('该文件不存在'))
    }
  })
}

module.exports = {
  insertCourse,
  getCourse,
  listCourse,
  deleteCourse
}
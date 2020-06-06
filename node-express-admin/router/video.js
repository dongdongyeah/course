const express = require('express')
const multer = require('multer')
const { UPLOAD_PATH } = require('../utils/constant')
const Result = require('../models/Result')
const Course = require('../models/Course')
const { decoded } = require('../utils/index')
const courseService = require('../services/course')
const boom = require('boom')

const router = express.Router()

let COURSE

router.post(
  '/upload',
  multer({dest: `${UPLOAD_PATH}/video`}).single('file'),
  function(req, res, next) {
    if (!req.file || req.file.length === 0) {
      new Result('上传视频失败').fail(res)
    } else {
      COURSE = req.file
      const video = new Course(req.file)
    }
})

router.post(
  '/create', 
  function(req, res, next) {
    const decode = decoded(req)
    req.body.originalname = COURSE.originalname
    req.body.filename = COURSE.filename
    req.body.destination = COURSE.destination
    req.body.type = 'video'
    console.log(req.body)
    COURSE = null
    if (decode && decode.username) {
      req.body.username = decode.username
    }
    const video = new Course(null, req.body)
    courseService.insertCourse(video).then(() => {
      new Result('添加视频成功').success(res)
    }).catch (err => {
      next(boom.badImplementation(err))
    })
  }
)

router.get(
  '/list',
  function(req, res, next) {
    const type = 'video'
    courseService.listCourse(type).then(({ list }) => {
      new Result({ list }, '获取视频列表成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
  }
)

router.get(
  '/delete',
  function(req, res, next) {
    const { filename } =  req.query
    if (!filename) {
      next(boom.badRequest(new Error('参数filename不能为空')))
    } else {
      courseService.deleteCourse(filename).then(course => {
        new Result('删除视频信息成功').success(res)
      }).catch(err => {
        next(boom.badImplementation(err))
      })
    }
  }
)

module.exports = router
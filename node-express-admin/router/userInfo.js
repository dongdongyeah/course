const express = require('express')
const userInfoService = require('../services/userInfo')
const Result = require('../models/Result')
const boom = require('boom')
const UserInfo = require('../models/UserInfo')

const router = express.Router()

router.post(
  '/create', 
  function(req, res, next) {
    const userInfo = new UserInfo(req.body)
    userInfoService.insertUserInfo(userInfo).then(() => {
      new Result('添加教师信息成功').success(res)
    }).catch (err => {
      next(boom.badImplementation(err))
    })
  }
)

router.get('/get', function(req, res, next) {
  const { t_id } = req.query
  if (!t_id) {
    next(boom.badRequest(new Error('参数t_id不能为空')))
  } else {
    userInfoService.getUserInfo(t_id).then(userInfo => {
      new Result(userInfo, '获取教师信息成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
  }
})

router.post(
  '/update',
  function(req, res, next) {
    const userInfo = new UserInfo(req.body)
    userInfoService.updateUserInfo(userInfo).then(() => {
      new Result('更新信息成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
  })

router.get('/list', function(req, res, next) {
  userInfoService.listUserInfo().then(({ list }) => {
    new Result({ list }, '查询教师信息成功').success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

router.get('/delete', function(req, res, next) {
  const { t_id } = req.query
  if (!t_id) {
    next(boom.badRequest(new Error('参数t_id不能为空')))
  } else {
    userInfoService.deleteUserInfo(t_id).then(() => {
      new Result('删除信息成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
  }
})

module.exports = router
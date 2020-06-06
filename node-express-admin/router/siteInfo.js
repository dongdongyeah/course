const express = require('express')
const siteInfoService = require('../services/siteInfo')
const Result = require('../models/Result')
const boom = require('boom')

const router = express.Router()

router.post(
  '/introduce/create', 
  function(req, res, next) {
    req.body.createDt = new Date().toLocaleString()
    siteInfoService.insertWord(req.body, 'introduce').then(() => {
      new Result('课程简介发布成功').success(res)
    }).catch (err => {
      next(boom.badImplementation(err))
    })
  }
)

router.post(
  '/news/create', 
  function(req, res, next) {
    req.body.createDt = new Date().toLocaleString()
    siteInfoService.insertWord(req.body, 'news').then(() => {
      new Result('近期动态发布成功').success(res)
    }).catch (err => {
      next(boom.badImplementation(err))
    })
  }
)

module.exports = router
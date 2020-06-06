const db = require('../db')
const { debug } = require('../utils/constant')
const UserInfo = require('../models/UserInfo')

function exists(userInfo) {
  const { t_id } = userInfo
  const sql = `select * from user_info where t_id='${t_id}'`
  return db.queryOne(sql)
}

function insertUserInfo(userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await exists(userInfo)
      if (result) {
        reject(new Error('该教师信息已存在'))
      } else {
        await db.insert(userInfo, 'user_info')
        resolve()
      }
    } catch (e) {
      reject(e)
    }
  })
}

function getUserInfo(t_id) {
  return new Promise(async (resolve, reject) => {
    const userInfoSql = `select * from user_info where t_id='${t_id}'`
    const userInfo = await db.queryOne(userInfoSql)
    resolve(userInfo)
  })
}

async function listUserInfo() {
  let userInfoSql = `select * from user_info`
  const list = await db.querySql(userInfoSql)
  return { list }
}

async function deleteUserInfo(t_id) {
  return new Promise(async (resolve, reject) => {
    let userInfo = await getUserInfo(t_id)
    if (userInfo) {
      const sql = `delete from user_info where t_id='${t_id}'`
      await db.querySql(sql).then(() => {
        resolve()
      })
    } else {
      reject(new Error('该教师信息不存在'))
    }
  })
}

function updateUserInfo(userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      if (userInfo instanceof UserInfo) {
        const result =  await getUserInfo(userInfo.t_id)
        if (result) {
          await db.update(userInfo, 'user_info', `where t_id='${userInfo.t_id}'`)
          resolve()
        }
      } else {
        reject(new Error('添加的教师信息不合法'))
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  exists,
  insertUserInfo,
  getUserInfo,
  listUserInfo,
  deleteUserInfo,
  updateUserInfo
}
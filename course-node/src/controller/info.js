const { exec } = require('../db/mysql')

const getUserInfo = (t_id) => {
  let sql = 'select * from user_info'
  if (t_id) {
    sql += ` where t_id='${t_id}'`
  }
  return exec(sql)
}

const getIntroduce = () => {
  let sql = 'select * from introduce'
  return exec(sql)
}
const getNews = () => {
  let sql = 'select * from news'
  return exec(sql)
}

module.exports = {
  getUserInfo,
  getIntroduce,
  getNews
}
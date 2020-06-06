const env = process.env.NODE_ENV //环境参数

let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'course'
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'course'
  }
}

module.exports = {
  MYSQL_CONF
}
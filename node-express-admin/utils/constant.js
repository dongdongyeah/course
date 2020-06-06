const UPLOAD_PATH = 'D:/upload/course'
const UPLOAD_URL = 'http://localhost:8089/course'
module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin_dongdong_node',
  PRIVATE_KEY: 'admin_dongdong_node_course',
  JWT_EXPIRED: 12 * 60 * 60, // token失效时间
  UPLOAD_PATH,
  UPLOAD_URL
}
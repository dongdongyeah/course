const db = require('../db')
const { debug } = require('../utils/constant')

function insertWord(word, table) {
  return new Promise(async (resolve, reject) => {
    await db.insert(word, table)
    resolve()
  })
}

module.exports = {
  insertWord
}
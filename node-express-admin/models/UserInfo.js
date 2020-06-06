class UserInfo {
  constructor(data) {
    this.name = data.name,
    this.sex = data.sex,
    this.college = data.college
    this.degree = data.degree
    this.title = data.title
    this.desc_1 = data.desc_1
    this.desc_2 = data.desc_2
    this.desc_3 = data.desc_3
    this.email = data.email
    this.t_id = data.t_id
  }
}

module.exports = UserInfo
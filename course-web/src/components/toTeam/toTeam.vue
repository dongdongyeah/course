<template>
  <div>
    <index-header></index-header>
    <article class='article'>
      <h3 class='title'>教师队伍</h3>
      <el-divider></el-divider>
      <el-table :data="list" border>
        <el-table-column prop="name" label="姓名" align="center">
          <template slot-scope="{ row: { name }}">
            <span>{{ name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" align="center">
          <template slot-scope="{ row: { sex }}">
            <span>{{ sex }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="degree" label="学位" align="center">
          <template slot-scope="{ row: { degree }}">
            <span>{{ degreeMap.get(degree) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="职称" align="center">
          <template slot-scope="{ row: { title }}">
            <span>{{ titleMap.get(title) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="college" label="院系" align="center">
          <template slot-scope="{ row: { college }}">
            <span>{{ collegeMap.get(college) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="履历" align="center">
          <template slot-scope="{ row: {t_id}}">
            <el-button @click="routerToInfo(t_id)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </article>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from '@/components/headerFooter/indexHeader'
import indexFooter from '@/components/headerFooter/indexFooter'
import axios from 'axios'
export default {
  name: 'toTeam',
  components: {
    indexHeader,
    indexFooter
  },
  data () {
    return {
      list: [],
      collegeMap: new Map([['college-1', '信息与电气工程学院'], ['college-2', '科信学院']]),
      degreeMap: new Map([['doctor', '博士'], ['master', '硕士'], ['bachelor', '学士']]),
      titleMap: new Map([['title-1', '助教'], ['title-2', '讲师'], ['title-3', '副教授'], ['title-4', '教授']])
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      axios.get('/api/info/userInfo')
        .then(res => {
          res = res.data
          if (res.errno === 0 && res.data) {
            this.list = res.data
            console.log('getdata', this.list)
          }
        })
    },
    routerToInfo (tId) {
      this.$router.push(`/4-${tId}`)
    }
  }
}
</script>

<style scoped>
  .article {
    width: 70%;
    margin: 50px auto 150px;
  }
  .title {
    font-size: 25px;
    text-align: center;
  }
  .date {
    text-align: center;
    font-size: 11px;
    color: #6c7a89
  }
</style>

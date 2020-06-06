<template>
  <div>
    <index-header></index-header>
    <el-table :data="tableData" style="width:80%; margin:60px auto 0" border>
        <el-table-column label="姓名" prop="name" highlight-current-row="false">
        </el-table-column>
        <el-table-column label="性别" prop="sex">
        </el-table-column>
        <el-table-column label="E-mail" prop="email">
        </el-table-column>
    </el-table>
    <el-table :data="tableData" style="width:80%; margin: 0 auto" border>
        <el-table-column label="学位" prop="degree">
          <template slot-scope="{ row: { degree}}">
            <span>{{ degreeMap.get(degree)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="职称" prop="title">
          <template slot-scope="{ row: { title}}">
            <span>{{ titleMap.get(title)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="院系" prop="college">
          <template slot-scope="{ row: { college}}">
            <span>{{ collegeMap.get(college)}}</span>
          </template>
        </el-table-column>
    </el-table>
    <el-table :data="tableData" style="width:80%; margin:0 auto" border>
      <el-table-column label="承担的实践性教学" prop="desc_1">
      </el-table-column>
    </el-table>
    <el-table :data="tableData" style="width:80%; margin:0 auto" border>
      <el-table-column label="主持的教学研究课题" prop="desc_2"></el-table-column>
    </el-table>
    <el-table :data="tableData" style="width:80%; margin:0 auto 60px" border>
      <el-table-column label="获得的教学表彰/奖励" prop="desc_3"></el-table-column>
    </el-table>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from '@/components/headerFooter/indexHeader'
import indexFooter from '@/components/headerFooter/indexFooter'
import axios from 'axios'
export default {
  name: 'toUserInfo',
  components: {
    indexHeader,
    indexFooter
  },
  data () {
    return {
      tableData: [],
      collegeMap: new Map([['college-1', '信息与电气工程学院'], ['college-2', '科信学院']]),
      degreeMap: new Map([['doctor', '博士'], ['master', '硕士'], ['bachelor', '学士']]),
      titleMap: new Map([['title-1', '助教'], ['title-2', '讲师'], ['title-3', '副教授'], ['title-4', '教授']])
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios({
        url: '/api/info/userInfo',
        params: {
          t_id: this.$route.params.t_id
        }
      })
        .then(res => {
          res = res.data
          if (res.errno === 0 && res.data) {
            this.tableData = res.data
            console.log('getdata', this.list)
            console.log('path', this.$route.params.t_id)
          }
        })
    }
  }
}
</script>

<style>

</style>

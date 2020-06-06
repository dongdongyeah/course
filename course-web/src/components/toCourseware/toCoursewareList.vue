<template>
  <div>
    <index-header></index-header>
    <article class='article'>
      <h3 class='title'>教学课件</h3>
      <el-divider></el-divider>
      <div v-for='item of list' :key=item.filename>
        <div class='row'><a class='filename' :href=item.url>{{item.title}}</a><span class='date'>2020-04-24</span></div>
        <el-divider></el-divider>
      </div>
    </article>
    <index-footer></index-footer>
  </div>
</template>
<script>
import indexHeader from '../headerFooter/indexHeader'
import indexFooter from '../headerFooter/indexFooter'
import axios from 'axios'
export default {
  name: 'toCoursewareList',
  components: {
    indexHeader,
    indexFooter
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getCouseware()
  },
  methods: {
    getCouseware () {
      axios.get('/api/course/courseware')
        .then(res => {
          res = res.data
          if (res.errno === 0 && res.data) {
            this.list = res.data
          }
        })
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
  .row {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .date {
    font-size: 11px;
    color: #6c7a89;
  }
</style>

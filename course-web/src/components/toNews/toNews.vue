<template>
  <div>
    <index-header></index-header>
    <article class='article'>
      <h3 class='title'>{{data.title}}</h3>
      <div class='date'>发布时间：<span>{{data.createDt}}</span></div>
      <el-divider></el-divider>
      <p>{{data.content}}</p>
    </article>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from '@/components/headerFooter/indexHeader'
import indexFooter from '@/components/headerFooter/indexFooter'
import axios from 'axios'
export default {
  name: 'toIntroduce',
  components: {
    indexHeader,
    indexFooter
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      axios.get('/api/info/news')
        .then(res => {
          res = res.data
          if (res.errno === 0 && res.data) {
            this.data = res.data[0]
            console.log('getdata', this.data)
          }
        })
    }
  }
}
</script>

<style scoped>
  .article {
    width: 70%;
    margin: 30px auto;
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

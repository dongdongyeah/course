<template>
  <div>
    <index-header></index-header>
    <article class='article'>
      <h3 class='title'>学习视频</h3>
      <div class='date'>发布时间：<span>2020-04-24</span></div>
      <el-divider></el-divider>
      <a href='www.baidu.com'>视频1.mp4</a>
      <br>
      <a>视频2.mp4</a>
    </article>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from '../headerFooter/indexHeader'
import indexFooter from '../headerFooter/indexFooter'
export default {
  name: 'toVideo',
  components: {
    indexHeader,
    indexFooter
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

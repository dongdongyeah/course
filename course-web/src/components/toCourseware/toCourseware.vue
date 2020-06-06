<template>
  <div>
    <index-header></index-header>
    <article class='article'>
      <h3 class='title'>课件</h3>
      <div class='date'>发布时间：<span>2020-04-24</span></div>
      <el-divider></el-divider>
      <a class='filename'>课件1.ppt</a>
    </article>
    <index-footer></index-footer>
  </div>
</template>
<script>
import indexHeader from '../headerFooter/indexHeader'
import indexFooter from '../headerFooter/indexFooter'
export default {
  name: 'toCourseware',
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

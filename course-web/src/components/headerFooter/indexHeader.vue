<template>
  <div>
    <h3><span class='t1'>河北工程大学</span>系统建模与计算机仿真</h3>
    <el-carousel indicator-position="outside" height="250px">
      <el-carousel-item v-for="item in pic" :key="item.url">
        <img class='header-img' :src="item.url">
      </el-carousel-item>
    </el-carousel>
    <index-Menu class='menu'></index-Menu>
  </div>
</template>

<script>
import indexMenu from './indexMenu'
export default {
  name: 'indexHeader',
  components: { indexMenu },
  data () {
    return {
      pic: [
        {url: require('../../assets/img/header-img1.png')},
        {url: require('../../assets/img/header-img2.png')},
        {url: require('../../assets/img/header-img3.png')}
      ]
    }
  }
}
</script>

<style scoped>
  h3 {
    background: rgba(235, 151, 78, 1);
    color: #fff;
    line-height: 60px;
    font-size: 25px
  }
  .t1 {
    font-size: 30px;
    padding: 0 30px
  }
  .header-img {
    width: 100%;
    height: 250px;
    opacity: .8;
  }
  .menu {
    width: 90%;
    margin: auto
  }
</style>

<template>
  <div>
    <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#f89406">
      <el-menu-item index="1" @click='toIndex'>首页</el-menu-item>
      <el-menu-item index="2">课程介绍</el-menu-item>
      <el-submenu index="3">
        <template slot="title">课程学习</template>
        <el-menu-item index="3-1">教学视频</el-menu-item>
        <el-menu-item index="3-2">教学课件</el-menu-item>
        <el-menu-item index="3-3">参考资料</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">教学队伍</el-menu-item>
      <el-menu-item index="5">近期动态</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'indexMenu',
  data () {
    return {
      activeIndex: this.getCurrentMenu()
    }
  },
  mounted () {
    this.getCurrentMenu()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getCurrentMenu () {
      // 获取当前页面 菜单刷新后能自动选中
      let currentUrl = window.location.href
      let currentPage = currentUrl.split('/')[4]
      return currentPage
    },
    toIndex () {
      console.log('toIndex')
    }
  }
}
</script>

<style>

</style>

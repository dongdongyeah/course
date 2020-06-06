<template>
  <div class='content'>
    <h4>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jiaoshiguanli"></use>
      </svg>
      教学队伍
      <router-link to='4'>
        <svg class="icon more" aria-hidden="true">
          <use xlink:href="#icon-iconmore"></use>
        </svg>
      </router-link>
    </h4>
    <ul>
      <li v-for='item of list' :key='item.id'>主讲教师<span>： </span><span class='name' @click='toInfo(item)'>{{item.name}}</span></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'team',
  data () {
    return {
      list: []
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
    toInfo (item) {
      this.$router.push(`/4-${item.t_id}`)
    }
  }
}
</script>

<style scoped>
  .content {
    box-sizing: border-box;
    margin: 30px 20px;
    padding: 10px 30px;
    border: 1px solid #fabe58;
    border-radius: 20px;
  }
  h4 {
    color: #e87e04;
    font-size: 20px
  }
  h4 a {
    color: #e87e04;
  }
  .more {
    float: right;
  }
  .more:hover {
    font-weight: bolder;
    font-size: 25px;
  }
  .name {
    cursor: pointer;
  }
  .name:hover {
    color: #fabe58;
  }
</style>

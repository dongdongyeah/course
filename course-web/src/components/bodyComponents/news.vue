<template>
  <div class='content'>
    <h4>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon"></use>
      </svg>
      近期动态
      <router-link to='/5'>
        <svg class="icon more" aria-hidden="true">
          <use xlink:href="#icon-iconmore"></use>
        </svg>
      </router-link>
    </h4>
    <p class='sec'>{{data.content}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'news',
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
  .content {
    box-sizing: border-box;
    margin: 30px 20px;
    padding: 10px 30px;
    border: 1px solid #fabe58;
    border-radius: 20px;
    overflow: hidden;
  }
  h4 {
    color: #e87e04;
    font-size: 20px
  }
  h4 a {
    color: #e87e04
  }
  .sec {
    height: 220px;
    overflow: hidden;
  }
  .more {
    float: right
  }
  .more:hover {
    font-weight: bolder;
    font-size: 25px;
  }
</style>

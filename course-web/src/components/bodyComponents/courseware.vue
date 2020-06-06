<template>
  <div class='content'>
    <h4>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-kejianguanli"></use>
      </svg>
      教学课件
      <router-link to='/3-2'>
        <svg class="icon more" aria-hidden="true">
          <use xlink:href="#icon-iconmore"></use>
        </svg>
      </router-link>
    </h4>
    <div class='title'>
      <a v-for='item of list' :key=item.filename :href=item.url>
        {{item.title}}
        <hr>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'courseware',
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
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .more {
    float: right
  }
  .more:hover {
    font-weight: bolder;
    font-size: 25px;
  }
</style>

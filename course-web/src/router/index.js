import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import toIntroduce from '@/components/toIntroduce/toIntroduce'
import toVideoList from '@/components/toVideo/toVideoList'
import toCoursewareList from '@/components/toCourseware/toCoursewareList'
import toReferenceList from '@/components/toReference/toReferenceList'
import toTeam from '@/components/toTeam/toTeam'
import toNews from '@/components/toNews/toNews'
import toUserInfo from '@/components/toTeam/toUserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/1',
      name: 'index',
      component: index
    },
    {
      path: '/1',
      name: 'index',
      component: index
    },
    {
      path: '/2',
      name: 'toIntroduce',
      component: toIntroduce
    },
    {
      path: '/3-1',
      name: 'toVideoList',
      component: toVideoList
    },
    {
      path: '/3-2',
      name: 'toCoursewareList',
      component: toCoursewareList
    },
    {
      path: '/3-3',
      name: 'toReferenceList',
      component: toReferenceList
    },
    {
      path: '/4',
      name: 'toTeam',
      component: toTeam
    },
    {
      path: '/4-:t_id',
      name: 'toUserInfo',
      component: toUserInfo
    },
    {
      path: '/5',
      name: 'toNews',
      component: toNews
    }
  ]
})

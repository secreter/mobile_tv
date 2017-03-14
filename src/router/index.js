import Vue from 'vue'
import Router from 'vue-router'
import LocalTV from '@/components/LocalTV'
import ccTV from '@/components/ccTV'
import More from '@/components/More'
import Picture from '@/components/Picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LocalTV',
      component: LocalTV
    },
    {
      path: '/cctv',
      name: 'ccTV',
      component: ccTV
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
})

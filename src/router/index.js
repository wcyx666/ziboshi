import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Column from '@/components/column'
import Activity from '@/components/activity'
import Speak from '@/components/speak'
import Special from '@/components/special'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/column',
      name: '领导专栏',
      component: Column,
      children:[
        {
          path:"/column",
          redirect:"/special"
        },
        {
          path: '/special',
          name: '领导专栏',
          component: Special,
          meta:{
            title:"领导专栏"
          }
        },
        {
          path: '/activity',
          name: '领导活动',
          component: Activity,
          meta:{
            title:"领导活动"
          }
        },
        {
          path: '/speak',
          name: '领导讲话',
          component: Speak,
          meta:{
            title:"领导讲话"
          }
        }
      ]
    }
  ]
})

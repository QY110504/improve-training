import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '@/pages/home/index'
import homeMain from '@/pages/home/HomeMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },{
      path: '/home',
      name: 'homeIndex',
      component: homeIndex,
      redirect:"/home/index",
      children:[
        {
          path: '/home/index',
          name: 'homeMain',
          component: homeMain,
        }
      ]
    }
  ]
})
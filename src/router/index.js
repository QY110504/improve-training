import Vue from 'vue'
import Router from 'vue-router'
import homeMain from '@/pages/HomeMain'
import course from '@/pages/Course'
import examination from '@/pages/Examination'
import notFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },{
      path: '/home',
      name: 'homeMain',
      component: homeMain
    },{
      path: '/course',
      name: 'course',
      component: course
    },{
      path: '/examination',
      name: 'examination',
      component: examination
    },{
      path:"*",
      name:"notFound",
      component: notFound
    }
  ]
})

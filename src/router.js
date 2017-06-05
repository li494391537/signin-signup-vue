import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index.vue'
import Signin from '@/components/signin/Signin.vue'
import Signup from '@/components/signup/Signup.vue'
import Page from '@/components/Page/Page.vue'
import About from './components/about/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/page/:pageid',
      name: 'page',
      component: Page
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

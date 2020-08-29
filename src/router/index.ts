import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { isAuth } from '@/utils/auth'

import Container from '@/components/layout/Default/index.vue'

import Home from '@/pages/Home/index.vue'
import Post from '@/pages/Post/index.vue'
import CreatePost from '@/pages/CreatePost/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Profile from '@/pages/Profile/index.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/post/create',
        name: 'CreatePost',
        component: CreatePost,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/post/:id',
        name: 'Post',
        component: Post,
        props: route => route.params,
      },
      {
        path: '/user/profile',
        name: 'Profile',
        component: Profile,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/user/login',
        name: 'Login',
        component: Login,
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: '/user/register',
        name: 'Register',
        component: Register,
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


router.beforeEach((to, from, next) => {
  const auth = isAuth()

  const {
    requiresAuth,
  } = to.meta

  if (requiresAuth === false && auth) {
    next({ name: 'Home' })
  } else if (requiresAuth === true && !auth) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router

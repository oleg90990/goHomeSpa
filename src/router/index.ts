import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Container from '@/components/layout/Default/index.vue';

import Home from '@/pages/Home/index.vue'
import Post from '@/pages/Post/index.vue'

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
        path: '/post/:id',
        name: 'Post',
        component: Post,
        props: route => route.params,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

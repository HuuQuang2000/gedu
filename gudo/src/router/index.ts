import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
    ,
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
    ,
    {
      path: '/class/:id',
      name: 'class',
      component: () => import('../views/class.vue')
    },
    {
      path: '/contact1/:id',
      name: 'contact1',
      component: () => import('../views/Contact1.vue')
    }
    ,
    {
      path: '/contact2',
      name: 'contact2',
      component: () => import('../views/Contact2.vue')
    },
    {
      path: '/detailShoe',
      name: 'detailShoe',
      component: () => import('../views/DetailShoe.vue')

    }
  ]
})

export default router

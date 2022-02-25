import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/api/',
    name: 'api',
    // route level code-splitting
    // this generates a separate chunk (api.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "api" */ '../views/Api.vue')
  },

  {
    path: '/api/diarioOficialFederacion',
    name: 'diarioOficialFederacion',
    // route level code-splitting
    // this generates a separate chunk (DiarioOficialFederacion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DiarioOficialFederacion" */ '../views/DiarioOficialFederacion.vue')
  },

  {
    path: '/api/fixer',
    name: 'fixer',
    // route level code-splitting
    // this generates a separate chunk (fixer.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fixer" */ '../views/Fixer.vue')
  },
  
  {
    path: '/api/banxico',
    name: 'banxico',
    // route level code-splitting
    // this generates a separate chunk (banxico.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "banxico" */ '../views/Banxico.vue')
  }, 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

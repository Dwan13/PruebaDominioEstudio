import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {

    path: '/formulario',
    name: 'formulario',
    component: () => import(/*webpackChunkName : "formulario" */ '../views/Formulario.vue')
  },
  {
    path: '/descarga',
    name: 'descarga',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "descarga" */ '../views/Descarga.vue')
  },
  {

    path: '/despliegue',
    name: 'despliegue',
    component: () => import(/*webpackChunkName : "despliegue" */ '../views/Despliegue.vue')
  },
  {

    path: '/preguntas',
    name: 'preguntas',
    component: () => import(/*webpackChunkName : "preguntas" */ '../views/Preguntas.vue')
  },
  {

    path: '/final',
    name: 'final',
    component: () => import(/*webpackChunkName : "final" */ '../views/Final.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
import StarShipsView from '../views/StarShipsView.vue'
import PeopleView from '../views/PeopleView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/films',
    name: 'films',
    component: FilmsView
  },
  {
    path: '/starships',
    name: 'starships',
    component: StarShipsView
  },
  {
    path: '/people',
    name: 'people',
    component: PeopleView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

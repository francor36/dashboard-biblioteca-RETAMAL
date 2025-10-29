import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Libros from '../pages/Libros.vue'
import NuevoLibro from '../pages/NuevoLibro.vue'


const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      { path: '', name: 'home', component: Libros },
      { path: 'libros', name: 'libros', component: Libros },
      { path: 'libros/nuevo', name: 'nuevo-libro', component: NuevoLibro },
    ],
  },
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})
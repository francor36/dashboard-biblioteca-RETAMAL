import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/pages/DashboardPage.vue'
import LibrosList from '@/pages/LibrosList.vue'
import LibrosForm from '@/pages/LibrosForm.vue'

const routes = [
  {
    path: '/',
    component: DashboardPage,
    children: [
      { path: 'libros', component: LibrosList },
      { path: 'libros/nuevo', component: LibrosForm },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

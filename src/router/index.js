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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
    ,
    {
      path: '/menupaciente',
      name: 'menupaciente',
      component: () => import('../views/MenuPacienteView.vue')
    }
    ,
    {
      path: '/registroglucosa',
      name: 'registroglucosa',
      component: () => import('../components/RegistroGlucosa.vue')
    }
    ,
    {
      path: '/registroalimenticio',
      name: 'registroalimenticio',
      component: () => import('../components/RegistroAlimenticio.vue')
    }
    ,
    {
      path: '/registrolaboratorio',
      name: 'registrolaboratorio',
      component: () => import('../components/RegistroLaboratorio.vue')
    }
    ,
    {
      path: '/registromedicamento',
      name: 'registromedicamento',
      component: () => import('../components/RegistroMedicamento.vue')
    }
    ,
    {
      path: '/loginmedico',
      name: 'loginmedico',
      component: () => import('../views/LoginMedicoView.vue')
    }
    ,
    {
      path: '/menuadmin',
      name: 'manuadmin',
      component: () => import('../components/MenuAdmin.vue')
    }
    ,
    {
      path: '/pacientes',
      name: 'pacientes',
      component: () => import('../components/Pacientes.vue')
    }
    ,
    {
      path: '/glucosageneral',
      name: 'glucosageneral',
      component: () => import('../components/GlucosaGeneral.vue')
    }
    ,
    {
      path: '/actualizacionesad',
      name: 'actualizacionesad',
      component: () => import('../components/ActualizacionesAd.vue')
    }
    
  ]
})

export default router

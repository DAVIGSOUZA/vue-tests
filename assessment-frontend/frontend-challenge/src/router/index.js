import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/contato',
        name: 'Contact',
        component: () => import('@/views/Contact')
    },
    {
        path: '/categoria/:path',
        name: 'Category',
        component: () => import('@/views/Category')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
import Home from "./Pages/Home.vue";
import AddPic from "./Pages/AddPic.vue";

export const routes = [
    {
        path: '/home',
        component: Home,
        name: 'home',
        menu: true
    },
    {
        path: '/cadastro',
        component: AddPic,
        name: 'cadastro',
        menu: true
    },
    {
        path: '/cadastro/:id',
        component: AddPic,
        name: 'alterar',
        menu: false
    },
    {
        path: '*',
        component: Home,
        menu: false
    }
]

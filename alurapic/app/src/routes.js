import Home from "./Pages/Home.vue";
import AddPic from "./Pages/AddPic.vue";

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/cadastro',
        component: AddPic,
        name: 'Cadastro'
    }
]

import { createWebHistory, createRouter } from "vue-router";
import TheChooseConnexion from './views/features/connection/TheChooseConnexion'
import TheLogin from './views/features/connection/TheLogin'
import TheRegister from './views/features/connection/TheRegister'

const routes = [
    {
        path: '/',
        component: TheChooseConnexion
    },
    {
        path: '/login',
        component: TheLogin
    },
    {
        path: '/register',
        component: TheRegister
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
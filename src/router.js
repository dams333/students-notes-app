import { createWebHistory, createRouter } from "vue-router";
import TheChooseConnexion from './views/features/connection/TheChooseConnexion'
import TheLogin from './views/features/connection/TheLogin'
import TheRegister from './views/features/connection/TheRegister'
import Profile from './views/Profile'
import AllBranches from './views/AllBranches'
import Branch from './views/Branch'

import store from "./store";

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
        path: '/profile',
        component: Profile
    },
    {
        path: '/current',
        component: AllBranches
    },
    {
        path: '/branch/:id',
        component: Branch,
        props: true
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

router.beforeEach(async (to, from, next) => {
    if(to.path !== '/' && to.path !== '/login' && to.path !== '/register'){
        if(await store.dispatch('isSessionCookieValid')) {
            next();
        }else{
            next('/');
        }
    }else{
        if(await store.dispatch('isSessionCookieValid')) {
            next('/profile');
        }else{
            next();
        }
    }
});

export default router;
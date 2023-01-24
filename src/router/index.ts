import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Overview from '@/views/Overview.vue';

function emptyRoute(path: string, name: string = ''): RouteRecordRaw {
    return {
        path: path,
        name: name,
        component: Overview
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Overview',
            component: Overview
        },
        emptyRoute('/buysell'),
        emptyRoute('/wallet'),
        emptyRoute('/bundles'),
        emptyRoute('/flag'),
        emptyRoute('/atom'),
    ]
})

export default router
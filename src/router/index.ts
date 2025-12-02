import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: () => import('../views/ProjectDetail.vue'),
            props: true
        }
    ]
});

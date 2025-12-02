import { createRouter, createWebHistory } from 'vue-router';
import { getProjectBySlug } from '../data/projects';

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
            props: true,
            beforeEnter: (to) => {
                const slug = String(to.params.slug ?? '');
                const project = getProjectBySlug(slug);
                if (!project) {
                    return { name: 'not-found' };
                }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFound.vue')
        }
    ]
});

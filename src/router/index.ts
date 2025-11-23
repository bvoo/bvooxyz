import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetail from '../views/ProjectDetail.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectDetail,
            props: true
        }
    ]
});

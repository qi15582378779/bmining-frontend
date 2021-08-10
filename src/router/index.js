import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new Router({
    mode: 'hash',
    routes: [

        {
            path: '/',
            name: 'Main',
            component: () => import('../pages/main/index'),
            children: [
                {
                    path: 'about-us',
                    name: 'about-us',
                    component: () => import('../pages/about-us/about-us')
                },
                {
                    path: 'operation',
                    name: 'operation',
                    component: () => import('../pages/operation/operation')
                },
                {
                    path: 'investors',
                    name: 'investors',
                    component: () => import('../pages/investors/investors')
                },
                {
                    path: 'team',
                    name: 'team',
                    component: () => import('../pages/team/team')
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('../pages/contact/contact')
                }
            ],
            redirect: '/about-us',
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
})

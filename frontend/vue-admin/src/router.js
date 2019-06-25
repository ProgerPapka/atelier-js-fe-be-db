import Vue from 'vue'
import Router from 'vue-router'
import Main from './page/Main'
import SignIn from './page/SignIn'
import Profile from './views/Profile'
import store from './store'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'sing-in',
            component: SignIn
        },
        {
            path: '/logout',
            redirect: () => '/' //todo тут будет функция которая очищает token и редиректит на логин
        },
        {
            path: '/admin',
            name: 'main',
            component: Main,
            children: [
                {
                    path: 'logout',
                    redirect: () => '/' //todo тут будет функция которая очищает token и редиректит на логин
                },
                {
                    path: "",
                    redirect: 'profile'
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: Profile,
                }
            ]
        }
    ],
    mode: 'history'
})

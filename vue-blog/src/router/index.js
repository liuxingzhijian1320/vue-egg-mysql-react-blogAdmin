import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/views/home'
import Index from 'src/views/index'
import Login from 'src/views/login'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            children: [{
                path: '/index',
                name: 'index',
                component: Index
            }, ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
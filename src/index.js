window.Vue = require('vue')
import './js/common'
import './scss/main.scss'
import store from './store/store'
import VueRouter from 'vue-router'
const Green = require('./components/Green.vue').default
const Yellow = require('./components/Yellow.vue').default
const Red = require('./components/Red.vue').default

Vue.component('App', require('./components/App.vue').default)
Vue.component('Controller', require('./components/Controller.vue').default)

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/green', component: Green },
        { path: '/yellow', component: Yellow },
        { path: '/red', component: Red }
    ]
})

new Vue({
    router,
    store,
    el: '#app',
})

onload = () => {
    location.href = '/#/green'
}
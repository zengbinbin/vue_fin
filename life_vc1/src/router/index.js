/**
 * 配置了路由的路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入主路由配置信息
import home from '../components/home/home.vue'
import allshop from '../components/allshop/allshop.vue'
import stroll from '../components/stroll/stroll.vue'
import shopcard from '../components/shopcard/shopcard.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import settings from '../components/settings/settings.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import shop_detail from '../components/shop_detail/shop_detail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/allshop',
            component: allshop
        },
        {
            path: '/stroll',
            component: stroll
        },
        {
            path: '/shopcard',
            component: shopcard
        },
        {
            path: '/usercenter',
            component: usercenter,
        },

        {
            path: '/settings',
            component: settings
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component:register
        },
        {
            path: '/shop_detail',
            component: shop_detail
        }

    ]
})

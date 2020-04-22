import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Loading from "../views/Loader";
import AccountDetail from "../views/AccountDetail";
import DialogTest from "../views/DialogTest";
import Transactions from "../views/Transactions";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/login',
        name: 'login',
        component: Login
    },
  {
        path: '/loading',
        name: 'loading',
        component: Loading
    },
  {
        path: '/accountDetail',
        name: 'accountDetail',
        component: AccountDetail
    },
  {
        path: '/dialogTest',
        name: 'dialogTest',
        component: DialogTest
    } , {
        path: '/transactions',
        name: 'transactions',
        component: Transactions
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router

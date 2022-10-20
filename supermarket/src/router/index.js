import Vue from 'vue'
import VueRouter from "vue-router";
const Home = () => import('@/views/home/home')
const news = () => import('@/views/news/news')
const setting = () => import('@/views/setting/setting')
const mine = () => import('@/views/mine/mine')
const DeTails = () => import('@/views/details/DeTails')
//1.安裝路由
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/setting',
    component: setting
  },
  {
    path: '/news',
    component: news
  },
  {
    path: '/DeTails/:iid',
    component: DeTails
  }

]
const router = new VueRouter({
  routes,
  mode:"history"
})

export default router

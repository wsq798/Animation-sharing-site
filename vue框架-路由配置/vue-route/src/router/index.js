import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    //重定向到二级导航
    redirect:'/about/us',
    component: () => import( '../views/AboutView.vue'),
    //二级导航
    children : [

      {
        //二级导航的路径不要加 /
        path:'us',
        component:()=>import('../views/AboutSub/AboutUS.vue')
      },
      {
        path:'info',
        component:()=>import('../views/AboutSub/AboutInfo.vue')
      },
      {
        path:'contact',
        component:()=>import('../views/AboutSub/AboutContact.vue')
      }

    ]
  },
  
  //增加新闻路由
  {
    path:'/news',
    name:'news',
    //异步加载
    component:()=>import('../views/NewsView.vue')
  },

  //新闻详情路由
  {
    path:'/newsdetails/:name',
    name:'newsdetails',
    component:()=>import('../views/NewsDetailsView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

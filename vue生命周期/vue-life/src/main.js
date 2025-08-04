import { createApp } from 'vue'  //导入 Vue 3 的 createApp 函数，用于创建应用实例
import App from './App.vue'     // 导入根组件 App（应用的入口组件）
import './registerServiceWorker'//导入 Service Worker 注册脚本（用于 PWA 功能，可选）
import axios from 'axios';     //导入 Axios 库，用于发起 HTTP 请求

//全局挂载 axios 实例
// 创建应用实例，以 App 作为根组件
const app = createApp(App);   
// 将 axios 挂载到全局属性 $axios 上
app.config.globalProperties.$axios = axios;
// 挂载应用到 #app 元素
app.mount('#app'); 

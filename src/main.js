
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './index.css';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import ajax from './api/index';

const app = createApp(App);
app.config.globalProperties.$ajax = ajax;
app.use(router).use(ajax).use(ElementPlus).mount('#app')

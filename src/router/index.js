//配置路由
import Vue, { defineAsyncComponent } from "vue";
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
//配置路由
export default new VueRouter({
    routes: [
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {   
            name:"search",
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true}
            
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/detail/:id',
            component:Detail,
            meta:{show:false}
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y : 0}
      }
})



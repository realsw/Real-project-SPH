import Vue from 'vue'
import App from './App.vue'
//注册全局组件--TypeNav
import TypeNav from '@/components/TypeNav'
//注册全局组件--Carousel
import Carousel from '@/components/Carousel'
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
//引入MockServe。js---mock数据
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.css"
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
//测试
/* import {reqSearchInfo} from '@/api';
reqSearchInfo({});
console.log(reqSearchInfo({})); */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route$router,屙性
  //$route(路由)：可以获取到路由信息(path、query、params)
  //$router:进行编程式导航路由跳转push||replace
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store
}).$mount('#app')

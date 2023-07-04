//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax';
//三级联动接口
//api/product,/getBaseCategoryList get无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',method:'get'});

//获取banner（Home首页轮播图接口）
export const reqBannerList = ()=> mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor')

//获取搜索数据 地址/api/list 请求方式post 带参数
//当前接口，给服务器传递的默认参数params，至少是一个空对象
export const reqSearchInfo = (params) =>requests({url:'/api/list',method:'post',data:params})

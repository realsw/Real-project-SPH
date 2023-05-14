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
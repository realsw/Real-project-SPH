//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax';
//三级联动接口
//api/product,/getBaseCategoryList get无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/api/product/getBaseCategoryList', method: 'get' });

//获取banner（Home首页轮播图接口）
export const reqBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

//获取搜索数据 地址/api/list 请求方式post 带参数
//当前接口，给服务器传递的默认参数params，至少是一个空对象
export const reqSearchInfo = (params) => requests({ url: '/api/list', method: 'post', data: params })

//获取产品详情数据 /api/item/{ skuId } 请求方式get
export const reqGoodsInfo = (skuId) => requests({ url: `/api/item/${skuId}`, method: 'get' })

//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/api/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表数据
///api/cart/cartList GET
export const reqCartList = () => requests({url:'/api/cart/cartList',method:'get'})

//删除购物车商品
///api/cart/deleteCart/{skuId} DELETE
export const reqDeleteCartById = (skuId) => requests({url:`/api/cart/deleteCart/${skuId}`,method:'delete'})

//切换商品选中状态
///api/cart/checkCart/{skuId}/{isChecked} GET 
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/api/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
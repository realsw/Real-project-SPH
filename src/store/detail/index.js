import { reqGoodsInfo,reqAddOrUpdateShopCart } from '@/api/index'
//封装游客身份模块uuid 生成一个随机字符串（不会变化）
import {getUUID} from '@/utils/uuid_token'
//detail模块的仓库
const state = {
    detailinfo: {},
    //游客临时身份
    uuid_token:getUUID()
};
const mutations = {
    DETAILINFO(state, detailinfo) {
        state.detailinfo = detailinfo
    }
};
const actions = {
    //获取产品信息的action
    async getDetailInfo({ commit }, skuId) {

        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            //提交mutation
            commit("DETAILINFO", result.data)
        }
    },
    //将产品添加到购物车||修改某个产品的个数的action
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //加入购物车返回的解构
        //加入购物车以后，前台将参数带给服务器
        //服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表操作成功
        //因为服务器没有返回其余数据，因此不需要三连环存储数据
       let result =  await reqAddOrUpdateShopCart(skuId,skuNum);
       if(result.code==200){
        return 'ok'
      }else{
        return Promise.reject(new Error('fail'));
      }
    }
};
//计算属性，在项目当中，为了简化数据而生。
//在这里将之后需要在组件中使用的数据进行简化，方便之后在组件中获取数据
const getters = {
    categoryView(state) {
        return state.detailinfo.categoryView || {};
    },
    skuInfo(state) {
        return state.detailinfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.detailinfo.spuSaleAttrList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}
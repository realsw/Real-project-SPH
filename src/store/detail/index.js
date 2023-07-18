import { reqGoodsInfo } from '@/api/index'
//detail模块的仓库
const state = {
    detailinfo: {}
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
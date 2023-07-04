import {reqSearchInfo} from '@/api/index'
//search模块的小仓库
const state = {
    searchlist:{}
};
const mutations = {
    SEARCHLIST(state,searchlist){
        state.searchlist = searchlist
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async getSearchList({commit},params={}){
        //reqSearchInfo函数在调用获取服务器数据时，至少需要传递一个参数（空对象）
        //params形参，是当用户派发action时，第二个参数传递过来的，至少是一个空对象
        let result = await reqSearchInfo(params);
        if (result.code == 200) {
            //提交mutation
            commit("SEARCHLIST",result.data)
        }
    }

};
//计算属性，在项目当中，为了简化数据而生。
//在这里将之后需要在组件中使用的数据进行简化，方便之后在组件中获取数据
const getters = {
    //此处形参state为当前仓库中的state，并非大仓库中的state
    goodsList(state){
        //如果服务器数据回来了，没问题，是一个数组
        //但需要考虑网络不好时，会返回undefined然后被遍历，所以需要||[],以防万一
        return state.searchlist.goodsList||[];
    },
    trademarkList(state){
        return state.searchlist.trademarkList||[];
    },
    attrsList(state){
        return state.searchlist.attrsList||[];
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}
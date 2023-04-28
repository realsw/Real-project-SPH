import {reqCategoryList} from '@/api';
//home模块的小仓库
const state = {
    //state中数据默认初始值根据接口返回值类型来决定
    categoryList : [],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if (result.code == 200){
            commit("CATEGORYLIST",result.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}
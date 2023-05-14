import {reqCategoryList,reqBannerList,reqFloorList} from '@/api';
//home模块的小仓库
const state = {
    //state中数据默认初始值根据接口返回值类型来决定
    categoryList : [],//home仓库中存储三级菜单的数据
    bannerList : [],//轮播图的数据
    floorList : [],//floor的数据
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }

};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if (result.code == 200){
            commit("CATEGORYLIST",result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqBannerList();
        if(result.code == 200){
            //提交mutation
            commit("BANNERLIST",result.data);
        }
    },
    //获取floor的数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code = 200){
            //提交mutation
            commit("FLOORLIST",result.data);
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
import {reqHomeData} from '../../../api'
import {
  RECEIVE_NAVLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,
  RECEIVE_PERSONALSHOP,
  FLASHSALEMODULE,
  NEWITEMLIST,
  POPULARITEMLIST,
  TOPICLIST,
  CATEGORYMODULE
} from '../../mutation-types'

const state = {
  navList: [],// 导航列表
  policyDescList:[],//服务策略
  sceneLightShoppingGuideModule:[],//购物导航榜单
  personalShop:[],//私人订制
  flashSaleModule:[],//限时购
  newItemList:[],//新品首发
  popularItemList:[],//人气推荐
  topicList:[],//专题精选
  categoryModule:[]//categoryModule
}
const mutations = {
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList;
  },
  [RECEIVE_POLICYDESCLIST] (state, policyDescList) {
    state.policyDescList = policyDescList;
  },
  [RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE] (state, sceneLightShoppingGuideModule) {
    state.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule;
  },
  [RECEIVE_PERSONALSHOP] (state, personalShop) {
    state.personalShop = personalShop;
  },
  [FLASHSALEMODULE] (state, flashSaleModule) {
    state.flashSaleModule = flashSaleModule;
  },
  [NEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList;
  },
  [POPULARITEMLIST] (state, popularItemList) {
    state.popularItemList = popularItemList;
  },
  [TOPICLIST] (state, topicList) {
    state.topicList = topicList;
  },
  [CATEGORYMODULE] (state, categoryModule) {
    state.categoryModule = categoryModule;
  }
}
const actions = {
  async getHomeData({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList)
      commit(RECEIVE_POLICYDESCLIST, result.data.policyDescList)
      commit(RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE, result.data.sceneLightShoppingGuideModule)
      commit(RECEIVE_PERSONALSHOP, result.data.personalShop)
      commit(FLASHSALEMODULE, result.data.flashSaleModule.itemList)
      commit(NEWITEMLIST, result.data.newItemList)
      commit(POPULARITEMLIST, result.data.popularItemList)
      commit(TOPICLIST, result.data.topicList)
      commit(CATEGORYMODULE, result.data.categoryModule)
    }
  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}

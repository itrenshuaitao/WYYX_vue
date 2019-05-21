import {reqRecommendTabs,reqRecommendData} from '../../../api'
import {
  RECEIVE_ORDERSHOWTOP,
  RECEIVE_RECOMMENDTABS,
  RECEIVE_RECOMMENDS
} from "../../mutation-types";


const state = {
  payload: [],// 识物-Tab 懒数据
  orderShowTop:[],// 晒单页面顶部数据
  recommends:[], // 推荐商品
}
const mutations = {
  [RECEIVE_RECOMMENDTABS] (state, recommendTabs) {
    state.payload = recommendTabs;
  },
  [RECEIVE_RECOMMENDS] (state, recommends) {
    state.recommends = recommends;
  },
  [RECEIVE_ORDERSHOWTOP] (state, orderShowTop) {
    state.orderShowTop = orderShowTop;
  },
}
const actions = {
  // 识物--获取导航列表的异步action
  async getRecommendTabs ({commit}) {
    const result = await reqRecommendTabs();
    if (result.code === '200') {
      console.log(result)
      commit(RECEIVE_RECOMMENDTABS, result.data);
    }
  },
  // 识物--推荐--获取推荐的商品数据的异步action
  async getRecommends ({commit}) {
    const result = await reqRecommendData();
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDS, result.data);
    }
  },
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}


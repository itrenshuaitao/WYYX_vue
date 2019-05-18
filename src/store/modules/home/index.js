import {reqHomeData} from '../../../api'
import {
  RECEIVE_NAVLIST,
  RECEIVE_POLICYDESCLIST
} from '../../mutation-types'

const state = {
  navList: [],// 导航列表
  policyDescList:[]//服务策略
}
const mutations = {
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList;
  },
  [RECEIVE_POLICYDESCLIST] (state, policyDescList) {
    state.policyDescList = policyDescList;
  },
}
const actions = {
  async getHomeData({commit}) {
    const result = await reqHomeData()
    console.log('xxx')
    if (result.code === 0) {
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList)
      commit(RECEIVE_POLICYDESCLIST, result.data.policyDescList)
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

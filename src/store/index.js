import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import home from './modules/home'
import categoryList from './modules/category'
import General from './modules/General'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules:{
    home,
    categoryList,
    General
  }
})

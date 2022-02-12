import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oc:false,
    curVariety:{}
  },
  mutations: {
    changeoc(state) {
      state.oc = !state.oc
    },
    changecurVariety(state,option) {
      this.state.curVariety = option;
    }
  },
  actions: {
  },
  modules: {
  }
})

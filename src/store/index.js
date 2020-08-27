import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form:{},
    routes: [],
    successRoutes: [],
  },
  mutations: {
    setSuccessRoutes(state, successRoutes){
      console.log("in setSuccessRoutes")
      console.log(successRoutes)
      state.successRoutes = successRoutes;
    },
    setForm(state, form){
      state.form = form;
    },
    setRoutes(state, routes){
      state.routes = routes;
    },
  },
  actions: {  
  },
  modules: {
  }
})

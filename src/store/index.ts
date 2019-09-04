import Vue from 'vue';
import Vuex from 'vuex';
import vuexPersistedstate from 'vuex-persistedstate';
import user from './modules/user';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: user,
  plugins:[
    vuexPersistedstate({
      storage:window.sessionStorage
    })
  ]
});

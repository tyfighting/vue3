import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '@/api/user';

const defaultState: any = {
  authorization: '',
  company: {
    id: '',
    logo: ''
  }
};
const getters: any = {
  getUserState(state: any) {
    return state;
  }
};
const mutations: any = {
  setUserState(state: any, data: any) {
    state.authorization = data.authorization;
    state.company = data.company;
  }
};
const actions: any = {
  async login(state:any,payLoad:any){
    let data:any=await login(payLoad.username,payLoad.password);
    state.commit('setUserState',data.result);
  }
};

export default {
  state: defaultState,
  getters,
  mutations,
  actions
};
